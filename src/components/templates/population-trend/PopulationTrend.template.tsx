import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';

import Header from '@/components/organisms/header/Header.organism';
import Loading from '@/components/organisms/loading/Loading.organism';
import RadioGroup from '@/components/organisms/radio-group/RadioGroup.organism';
import Checkbox from '@/components/parts/checkbox/Checkbox.parts';
import HeadingSecondary from '@/components/parts/heading/heading-secondary/HeadingSecondary.parts';

import PopulationTrendStyle from './PopulationTrend.template.module.scss';
import type { PopulationTrendTemplateProps } from './types';

const PopulationTrendTemplate: React.FC<PopulationTrendTemplateProps> = ({
  isLoading,
  prefectures,
  populationCompositions,
  chartDataType,
  checkboxProps,
  radioGroupProps,
}) => {
  const categories = populationCompositions
    .flatMap((composition) => {
      const specifyData = composition.data.find((dataByType) => dataByType.label === chartDataType);
      return specifyData ? specifyData.data.map((v) => v.year.toString()) : [];
    })
    .filter((value, index, self) => self.indexOf(value) === index); // 重複を排除

  const series = populationCompositions.map((composition) => {
    const specifyData = composition.data.find((dataByType) => dataByType.label === chartDataType);
    return {
      name: composition.prefName,
      data: specifyData ? specifyData.data.map((v) => v.value) : [],
      type: 'line' as const,
    };
  });

  const chartOption: Highcharts.Options = {
    title: {
      text: '総人口推移',
    },
    xAxis: {
      title: {
        text: '年',
      },
      categories,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    series,
  };

  return (
    <div className={PopulationTrendStyle['population-trend-container']}>
      {isLoading && <Loading />}

      <Header title="Not Found" />

      <div className={PopulationTrendStyle['content-wrapper']}>
        <div className={PopulationTrendStyle['prefectures-wrapper']}>
          <div className={PopulationTrendStyle['prefecture-title']}>
            <HeadingSecondary>都道府県</HeadingSecondary>
          </div>

          <div className={PopulationTrendStyle['prefecture-list']}>
            {prefectures.map((pref) => {
              return (
                <div key={pref.prefCode}>
                  <Checkbox label={pref.prefName} onChangeCheckbox={checkboxProps.onChangeCheckbox} />
                </div>
              );
            })}
          </div>

          <div className={PopulationTrendStyle['prefecture-title']}>
            <HeadingSecondary>人口推移グラフ</HeadingSecondary>
          </div>

          <div className={PopulationTrendStyle['population-chart']}>
            {populationCompositions.length > 0 ? (
              <>
                <RadioGroup {...radioGroupProps} />
                <HighchartsReact highcharts={Highcharts} options={chartOption} />
              </>
            ) : (
              <div className={PopulationTrendStyle['prefecture-unselected']}>
                <p className={PopulationTrendStyle['unselected-description']}>都道府県を選択してください</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

PopulationTrendTemplate.whyDidYouRender = true;
export default PopulationTrendTemplate;
