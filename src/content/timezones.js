// Every country and its time zones, for the Book a Meeting location picker and server validation.
import { getAllCountries, getCountryForTimezone, getTimezone } from 'countries-and-timezones';
import { BOOKING } from './booking.js';

function isSupportedZone(timeZone) {
  try {
    new Intl.DateTimeFormat('en-US', { timeZone });
    return true;
  } catch {
    return false;
  }
}

function zoneText(timeZone, ms, style) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone, timeZoneName: style }).formatToParts(ms);
  return parts.find((p) => p.type === 'timeZoneName')?.value ?? timeZone;
}

/** "UTC+05:30" for the offset in force at `ms`. */
export function utcOffsetLabel(timeZone, ms = Date.now()) {
  const offset = zoneText(timeZone, ms, 'longOffset').replace('GMT', '');
  return `UTC${offset || '+00:00'}`;
}

/** "Eastern Time" style name, which holds through daylight saving changes. */
export function zoneName(timeZone, ms = Date.now()) {
  return zoneText(timeZone, ms, 'longGeneric');
}

export const zoneLabel = (timeZone, ms = Date.now()) => `${zoneName(timeZone, ms)} (${utcOffsetLabel(timeZone, ms)})`;

export const COUNTRIES = Object.values(getAllCountries())
  .map(({ id, name, timezones }) => ({ code: id, name, zones: timezones.filter(isSupportedZone) }))
  .filter(({ zones }) => zones.length > 0)
  .sort((a, b) => a.name.localeCompare(b.name));

const byCode = new Map(COUNTRIES.map((country) => [country.code, country]));

export const findCountry = (code) => byCode.get(code);

/** Zones in the same country that always keep the same clock time are the same choice for a customer. */
function zoneGroupKey(timeZone) {
  const year = new Date().getUTCFullYear();
  const winter = utcOffsetLabel(timeZone, Date.UTC(year, 0, 15));
  const summer = utcOffsetLabel(timeZone, Date.UTC(year, 6, 15));
  return `${zoneName(timeZone)}|${winter}|${summer}`;
}

/** One time zone per distinct local time in a country, west to east. */
export function zoneOptions(code) {
  const groups = new Map();
  for (const zone of findCountry(code)?.zones ?? []) {
    const key = zoneGroupKey(zone);
    if (!groups.has(key)) groups.set(key, zone);
  }
  const minutes = (zone) => {
    const [, sign, h, m] = /([+-])(\d{2}):(\d{2})/.exec(utcOffsetLabel(zone));
    return (sign === '-' ? -1 : 1) * (Number(h) * 60 + Number(m));
  };
  return [...groups.values()].sort((a, b) => minutes(a) - minutes(b));
}

/** The country and zone to start with, from the visitor's device; India when that is unknown. */
export function detectLocation() {
  const fallback = { country: 'IN', timeZone: BOOKING.timeZone };
  try {
    const raw = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const zone = getTimezone(raw)?.aliasOf ?? raw;
    const code = getCountryForTimezone(zone)?.id;
    if (!code || !findCountry(code)?.zones.includes(zone)) return fallback;
    const key = zoneGroupKey(zone);
    return { country: code, timeZone: zoneOptions(code).find((z) => zoneGroupKey(z) === key) ?? zone };
  } catch {
    return fallback;
  }
}
