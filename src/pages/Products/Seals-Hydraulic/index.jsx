import GenericProductPage from '../../../shared/components/GenericProductPage';
import { getProductBySlug } from '../../../content/products';

const product = getProductBySlug('seals-hydraulic');

export default function SealsHydraulicPage() {
  return <GenericProductPage product={product} />;
}
