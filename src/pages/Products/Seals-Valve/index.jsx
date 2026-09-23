import GenericProductPage from '../../../shared/components/GenericProductPage';
import { getProductBySlug } from '../../../content/products';

const product = getProductBySlug('seals-valve');

export default function SealsValvePage() {
  return <GenericProductPage product={product} />;
}
