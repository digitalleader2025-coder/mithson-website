import GenericProductPage from '../../../shared/components/GenericProductPage';
import { getProductBySlug } from '../../../content/products';

const product = getProductBySlug('m-uni-seal');

export default function MUNISealPage() {
  return <GenericProductPage product={product} />;
}
