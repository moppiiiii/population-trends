import React, { useCallback, useEffect, useState } from 'react';

import type { RadioGroupProps } from '@/components/organisms/radio-group/types';
import PopulationTrendTemplate from '@/components/templates/population-trend/PopulationTrend.template';
import type {
  ChartDataType,
  PopulationCompositions,
  PopulationTrendTemplateProps,
  Prefectures,
} from '@/components/templates/population-trend/types';
import { useDocumentTitle } from '@/contexts/document-title/DocumentTitle.context';
import { useHtmlLang } from '@/contexts/html-lang/HTMLLang.context';
import { useLoading } from '@/contexts/loading/Loading.context';
import { fetchPopulationComposition } from '@/repositories/population-conposition';
import { fetchPrefectures } from '@/repositories/prefecture';

const PopulationTrendPage: React.FC = () => {
  useHtmlLang('ja');
  useDocumentTitle('PopulationTrend');

  const { isLoading, setLoading } = useLoading();
  const [prefectures, setPrefectures] = useState<Prefectures[]>([]);
  const [populationCompositions, setPopulationCompositions] = useState<PopulationCompositions[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [chartDataType, setChartDataType] = useState<ChartDataType>('総人口');

  const getPrefectures = useCallback(async () => {
    setLoading(true);
    fetchPrefectures()
      .then((result) => {
        setPrefectures((prevList) => {
          if (JSON.stringify(prevList) === JSON.stringify(result.result)) {
            return prevList;
          } else {
            return result.result;
          }
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getPrefectures();
  }, [getPrefectures]);

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>, label: string) => {
    const isChecked = event.target.checked;
    const [specifyPrefecture] = prefectures.filter((pref) => pref.prefName === label);

    if (isChecked) {
      setLoading(true);

      fetchPopulationComposition('-', specifyPrefecture.prefCode)
        .then((result) => {
          setPopulationCompositions([
            ...populationCompositions,
            {
              prefName: label,
              data: result.result.data,
            },
          ]);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setPopulationCompositions([...populationCompositions].filter((composition) => composition.prefName !== label));
    }
  };

  const onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChartDataType(event.target.value as ChartDataType);
  };

  const radioGroupComponentProps: RadioGroupProps = {
    labels: ['総人口', '年少人口', '生産年齢人口', '老年人口'],
    checkedLabel: chartDataType,
    onChangeRadio,
  };

  const PopulationTrendTemplateProps: PopulationTrendTemplateProps = {
    isLoading,
    prefectures,
    populationCompositions,
    chartDataType,
    checkboxProps: {
      onChangeCheckbox,
    },
    radioGroupProps: { ...radioGroupComponentProps },
  };

  return <PopulationTrendTemplate {...PopulationTrendTemplateProps} />;
};

PopulationTrendPage.whyDidYouRender = true;
export default PopulationTrendPage;
