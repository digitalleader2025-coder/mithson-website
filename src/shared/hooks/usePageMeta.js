import { useEffect } from 'react';

/** Sets the browser title and search description for a page. */
export default function usePageMeta(title, description) {
  useEffect(() => {
    const tag = document.querySelector('meta[name="description"]');
    const previousDescription = tag?.content;
    document.title = `${title} | Mithson Sealing Solutions`;
    if (tag && description) tag.content = description;
    return () => {
      document.title = 'Mithson Sealing Solutions';
      if (tag && previousDescription) tag.content = previousDescription;
    };
  }, [title, description]);
}
