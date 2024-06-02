import React from 'react';

import Header from '@/components/organisms/header/Header.organism';

import PopulationTrendStyle from './PopulationTrend.template.module.scss';

const PopulationTrendTemplate: React.FC = () => {
  return (
    <div className={PopulationTrendStyle['population-trend-container']}>
      <Header title="Not Found" />

      <div className={PopulationTrendStyle['content-wrapper']}>aasa</div>
    </div>
  );
};

PopulationTrendTemplate.whyDidYouRender = true;
export default PopulationTrendTemplate;
