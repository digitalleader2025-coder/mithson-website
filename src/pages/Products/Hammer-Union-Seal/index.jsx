import GenericProductPage from '../../../shared/components/GenericProductPage';
import { getProductBySlug } from '../../../content/products';

const product = getProductBySlug('hammer-union-seal');

export default function HammerUnionSealPage() {
  return <GenericProductPage product={product} />;
}
