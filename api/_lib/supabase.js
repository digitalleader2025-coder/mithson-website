// Enquiry files and records in Supabase. The secret key stays on the server: browsers only
// receive a short-lived upload link for one file, and the bucket itself is private.
import { createClient } from '@supabase/supabase-js';

const { SUPABASE_URL, SUPABASE_SECRET_KEY } = process.env;
const BUCKET = process.env.SUPABASE_BUCKET || 'enquiry-files';

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_SECRET_KEY);

const supabase = isSupabaseConfigured
  ? createClient(SUPABASE_URL, SUPABASE_SECRET_KEY, { auth: { persistSession: false } })
  : null;

const files = () => supabase.storage.from(BUCKET);

export async function createUploadLink(path) {
  const { data, error } = await files().createSignedUploadUrl(path);
  if (error) throw error;
  return data.signedUrl;
}

/** Keeps a customer's file name safe to use as a storage path. */
export const safeFileName = (name) => name.replace(/[^a-zA-Z0-9._-]+/g, '-').slice(-100);

/** Name and size of everything in one private folder. */
export async function listFiles(folder) {
  const { data, error } = await files().list(folder);
  if (error) throw error;
  return data.map((file) => ({ name: file.name, size: file.metadata?.size ?? 0 }));
}

export async function createDownloadLink(path, expiresInSeconds) {
  const { data, error } = await files().createSignedUrl(path, expiresInSeconds, { download: true });
  if (error) throw error;
  return data.signedUrl;
}

export async function saveApplication(application) {
  const { error } = await supabase.from('applications').insert(application);
  if (error) throw error;
}

export async function saveEnquiry(enquiry) {
  const { error } = await supabase.from('enquiries').insert(enquiry);
  if (error) throw error;
}

/** A small read so the free plan does not pause the project during quiet weeks. */
export async function touchDatabase() {
  const { error } = await supabase.from('enquiries').select('id', { head: true, count: 'exact' });
  if (error) throw error;
}
