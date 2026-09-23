import GenericProductPage from '../../../shared/components/GenericProductPage';
import { getProductBySlug } from '../../../content/products';

const product = getProductBySlug('seals-x-mas-tree');

export default function SealsXMasTreePage() {
  return <GenericProductPage product={product} />;
}
