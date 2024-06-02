import React from 'react';

import PopulationTrendTemplate from '@/components/templates/population-trend/PopulationTrend.template';
import { useDocumentTitle } from '@/contexts/document-title/document-title.context';

const PopulationTrendPage: React.FC = () => {
  useDocumentTitle('PopulationTrend');

  return <PopulationTrendTemplate />;
};

PopulationTrendPage.whyDidYouRender = true;
export default PopulationTrendPage;
