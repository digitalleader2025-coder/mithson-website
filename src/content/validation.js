// Content marked `status: 'pending-validation'` stays hidden until Mithson approves it.
// While running locally, add ?preview to a page address to review the hidden items.
const previewing = () =>
  import.meta.env.DEV && new URLSearchParams(window.location.search).has('preview');

export const isPending = (item) => item.status === 'pending-validation';

export const visible = (items = []) =>
  (previewing() ? items : items.filter((item) => !isPending(item)));
