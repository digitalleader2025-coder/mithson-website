// Enquiry form rules — shared by the Enquire Now page and the /api enquiry functions.
export const ENQUIRY = {
  maxFiles: 5,
  maxFileBytes: 20 * 1024 * 1024, // 20 MB; the bucket in supabase/enquiries.sql uses the same limit
  extensions: ['pdf', 'dwg', 'dxf', 'step', 'stp', 'igs', 'iges', 'png', 'jpg', 'jpeg'],
  rateLimit: 10, // submissions allowed from one address per hour
  linkDays: 30, // how long the file links in the email keep working
};

export const fileExtension = (name = '') => name.split('.').pop().toLowerCase();

/** A message saying why this file can't be uploaded, or null when it is fine. */
export function fileProblem({ name, size }) {
  if (!ENQUIRY.extensions.includes(fileExtension(name))) {
    return `${name} is not a supported file type.`;
  }
  if (!size) return `${name} is empty.`;
  if (size > ENQUIRY.maxFileBytes) return `${name} is larger than 20 MB.`;
  return null;
}

export function formatBytes(bytes) {
  return bytes < 1024 * 1024
    ? `${Math.max(1, Math.round(bytes / 1024))} KB`
    : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
