import GenericProductPage from '../../../shared/components/GenericProductPage';
import { getProductBySlug } from '../../../content/products';

const product = getProductBySlug('washers-transmission');

export default function WashersTransmissionPage() {
  return <GenericProductPage product={product} />;
}
