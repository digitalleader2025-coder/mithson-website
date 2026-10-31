// Booking storage. Uses Upstash Redis (Vercel KV / Upstash integration) when configured,
// otherwise an in-memory map that only exists for local development.
import { Redis } from '@upstash/redis';
import { dayBlocks, minutesToHHMM } from '../../src/content/booking.js';

const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
const redis = url && token ? new Redis({ url, token }) : null;
const memory = globalThis.__mithsonBookingMemory ?? (globalThis.__mithsonBookingMemory = new Map());

export const isPersistentStore = Boolean(redis);

const blockKey = (date, minutes) => `mithson:booking:block:${date}:${minutesToHHMM(minutes)}`;

/** Minutes-from-midnight of every 30-minute block already taken on `date`. */
export async function getBusyBlocks(date) {
  const blocks = dayBlocks();
  const keys = blocks.map((m) => blockKey(date, m));
  const values = redis ? await redis.mget(...keys) : keys.map((k) => memory.get(k) ?? null);
  return blocks.filter((_, i) => values[i] !== null && values[i] !== undefined);
}

/**
 * Atomically claims all blocks for a booking. Returns false if any block is already taken.
 * `expiresAt` (unix seconds) makes Redis delete the blocks automatically after the meeting.
 */
export async function claimBlocks(date, blocks, bookingId, expiresAt) {
  const entries = Object.fromEntries(blocks.map((m) => [blockKey(date, m), bookingId]));
  if (redis) {
    if ((await redis.msetnx(entries)) !== 1) return false;
    const pipeline = redis.pipeline();
    for (const key of Object.keys(entries)) pipeline.expireat(key, expiresAt);
    await pipeline.exec();
    return true;
  }
  if (Object.keys(entries).some((k) => memory.has(k))) return false;
  for (const [k, v] of Object.entries(entries)) memory.set(k, v);
  return true;
}

/** Frees blocks held by `bookingId` (used when the meeting link could not be created). */
export async function releaseBlocks(date, blocks, bookingId) {
  for (const m of blocks) {
    const key = blockKey(date, m);
    const owner = redis ? await redis.get(key) : memory.get(key);
    if (owner !== bookingId) continue;
    if (redis) await redis.del(key);
    else memory.delete(key);
  }
}

/** Counts an attempt and says whether this address has used up its hourly allowance. */
export async function isOverLimit(scope, address, limit) {
  const key = `mithson:limit:${scope}:${address}`;
  if (redis) {
    const count = await redis.incr(key);
    if (count === 1) await redis.expire(key, 3600);
    return count > limit;
  }
  const count = (memory.get(key) ?? 0) + 1;
  memory.set(key, count);
  return count > limit;
}

export async function saveBooking(booking, expiresAt) {
  const key = `mithson:booking:${booking.id}`;
  if (redis) await redis.set(key, JSON.stringify(booking), { exat: expiresAt });
  else memory.set(key, booking);
}
