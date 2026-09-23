import GenericProductPage from '../../../shared/components/GenericProductPage';
import { getProductBySlug } from '../../../content/products';

const product = getProductBySlug('encapsulated-o-ring');

export default function EncapsulatedORingPage() {
  return <GenericProductPage product={product} />;
}
