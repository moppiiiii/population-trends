import type { z } from 'zod';

import { logger } from '@/libs/logger';

import { PopulationCompositionApiResponseSchema } from './type';

/**
 * RESAS APIから人口構成データを取得する
 */
export const fetchPopulationComposition = async (
  cityCode: string,
  prefCode: number,
): Promise<z.infer<typeof PopulationCompositionApiResponseSchema>> => {
  try {
    const apiKey = process.env.REACT_APP_RESAS_API_KEY;
    const apiUrl = process.env.REACT_APP_RESAS_API_URL;

    if (!apiKey || !apiUrl) {
      throw new Error(`RESAS_APIの環境変数が設定されていません。`);
    }

    const BASE_URL = `${apiUrl}/population/composition/perYear?cityCode=${cityCode}&prefCode=${prefCode.toString()}`;

    logger.log(`request to ${apiUrl}: getPopulationComposition`);

    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: {
        'X-API-KEY': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status.toString()}`);
    }

    const parsed = PopulationCompositionApiResponseSchema.safeParse(await response.json());

    if (parsed.success) {
      return parsed.data;
    } else {
      logger.error(parsed.error);
      logger.error(parsed.error.issues.map((v) => v.path));
      throw new Error(`人口構成データの型検証に失敗しました。`);
    }
  } catch (error) {
    logger.error('Error fetching data');
    throw error;
  }
};
