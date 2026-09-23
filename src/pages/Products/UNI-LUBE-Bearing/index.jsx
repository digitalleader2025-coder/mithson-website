import GenericProductPage from '../../../shared/components/GenericProductPage';
import { getProductBySlug } from '../../../content/products';

const product = getProductBySlug('uni-lube-bearing');

export default function UNILUBEBearingPage() {
  return <GenericProductPage product={product} />;
}
