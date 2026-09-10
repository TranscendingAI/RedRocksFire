/**
 * Barrel export for all /industries/ sub page data objects.
 *
 * Copy source: reference/content/rrfps-industries-we-serve-website-content.md
 * (verbatim per page, §2–§14; §1 Multi-Family lives in src/data/site.ts
 * and its page is already built).
 * Images are placeholders from /public/images until dedicated assets land.
 */
export type {
  IndustryPageData,
  IndustrySection,
  SplitSection,
  AccordionSection,
  SliderSection,
  SplitBackground,
} from './types';

export { commercialPropertyPage } from './commercial-property';
export { religiousInstitutionsPage } from './religious-institutions';
export { assistedLivingPage } from './assisted-living';
export { educationPage } from './education';
export { warehouseIndustrialPage } from './warehouse-industrial';
export { hoaManagementPage } from './hoa-management';
export { hotelsHospitalityPage } from './hotels-hospitality';
export { retailPage } from './retail';
export { restaurantsPage } from './restaurants';
export { financialPage } from './financial';
export { automotivePage } from './automotive';
export { dataCentersPage } from './data-centers';
export { generalContractorsPage } from './general-contractors';