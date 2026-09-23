import GenericProductPage from '../../../shared/components/GenericProductPage';
import { getProductBySlug } from '../../../content/products';

const product = getProductBySlug('nozzles-power-grid');

export default function NozzlesPowerGridPage() {
  return <GenericProductPage product={product} />;
}
