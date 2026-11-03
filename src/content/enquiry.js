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

// Extra details from the Application Data Form, as [field, label for the email]
export const APPLICATION_FIELDS = [
  ['company', 'Company'], ['phone', 'Phone'], ['dueDate', 'Due date'], ['market', 'Market'], ['inquiryType', 'Type of inquiry'],
  ['tempMin', 'Minimum temperature'], ['tempNormal', 'Normal temperature'], ['tempMax', 'Maximum temperature'], ['tempTest', 'Test temperature'],
  ['pressureMin', 'Minimum pressure'], ['pressureNormal', 'Normal pressure'], ['pressureMax', 'Maximum pressure'], ['pressureTest', 'Test pressure'],
  ['media', 'Media and contaminants'], ['motion', 'Motion'], ['speed', 'Speed or stroke'],
  ['dimensions', 'Hardware dimensions'], ['clearances', 'Clearances and gaps'],
];

/** Sends one file straight to private storage, using a link from the upload API. */
export async function uploadFile(file, url) {
  const body = new FormData();
  body.append('cacheControl', '3600');
  body.append('', file);
  const res = await fetch(url, { method: 'PUT', headers: { 'x-upsert': 'false' }, body });
  if (!res.ok) throw new Error(`Could not upload ${file.name}. Please try again.`);
}

/** Uploads any files, then sends the enquiry. Throws with `fields` when the server rejects it. */
export async function sendEnquiry({ form, files, onStatus }) {
  let enquiryId;
  let uploaded = [];
  if (files.length) {
    onStatus('Preparing upload…');
    const res = await fetch('/api/enquiry-upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ files: files.map(({ name, size }) => ({ name, size })), website: form.website }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Could not prepare your upload.');

    for (const [index, upload] of data.uploads.entries()) {
      onStatus(`Uploading file ${index + 1} of ${files.length}…`);
      await uploadFile(files[index], upload.url);
    }
    enquiryId = data.enquiryId;
    uploaded = data.uploads.map(({ path, name }) => ({ path, name }));
  }

  onStatus('Sending…');
  const res = await fetch('/api/enquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...form, enquiryId, files: uploaded }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw Object.assign(new Error(data.error || 'Your message could not be sent. Please try again.'), { fields: data.fields });
  }
  return { fileCount: uploaded.length };
}

export function formatBytes(bytes) {
  return bytes < 1024 * 1024
    ? `${Math.max(1, Math.round(bytes / 1024))} KB`
    : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
