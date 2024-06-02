import type React from 'react';

import type { RadioGroupProps } from '@/components/organisms/radio-group/types';

type PopulationData = {
  label: string;
  data: {
    year: number;
    value: number;
  }[];
};

export type PopulationCompositions = {
  prefName: string;
  data: PopulationData[];
};

export type Prefectures = {
  prefCode: number;
  prefName: string;
};

export type ChartDataType = '総人口' | '年少人口' | '生産年齢人口' | '老年人口';

export type PopulationTrendTemplateProps = {
  isLoading: boolean;
  prefectures: Prefectures[];
  populationCompositions: PopulationCompositions[];
  chartDataType: ChartDataType;
  checkboxProps: {
    onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>, label: string) => void;
  };
  radioGroupProps: RadioGroupProps;
};
