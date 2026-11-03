// Page images kept in src/assets/site-images. Each page asks for one by file name, for example
// `manufacturing`. To swap in a real photo later, replace the file and keep the same name.
const files = import.meta.glob('../assets/site-images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const siteImages = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split('/').pop().replace(/\.\w+$/, ''), url]),
);
