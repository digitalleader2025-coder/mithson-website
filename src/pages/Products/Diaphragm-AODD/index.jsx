import GenericProductPage from '../../../shared/components/GenericProductPage';
import { getProductBySlug } from '../../../content/products';

const product = getProductBySlug('diaphragm-aodd');

export default function DiaphragmAODDPage() {
  return <GenericProductPage product={product} />;
}
