import GenericProductPage from '../../../shared/components/GenericProductPage';
import { getProductBySlug } from '../../../content/products';

const product = getProductBySlug('plug-lined-valve');

export default function PlugLinedValvePage() {
  return <GenericProductPage product={product} />;
}
