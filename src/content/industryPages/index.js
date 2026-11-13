// The industry pages (plus Oil & Gas Seal and Downhole Tools) that share src/pages/Industries/IndustryPage.jsx, keyed by route slug.
import lifeScience from './lifeScience';
import semiconductor from './semiconductor';
import aerospace from './aerospace';
import automotive from './automotive';
import mining from './mining';
import robotics from './robotics';
import downholeTools from './downholeTools';
import oilGasSeal from './oilGasSeal';

export const industryPages = {
  'life-science': lifeScience,
  semiconductor,
  aerospace,
  automotive,
  mining,
  robotics,
  'downhole-tools': downholeTools,
  'oil-gas-seal': oilGasSeal,
};
