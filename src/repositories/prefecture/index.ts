import type { z } from 'zod';

import { logger } from '@/libs/logger';

import { PrefectureApiResponseSchema } from './types';

/**
 * RESAS APIから都道府県データを取得する関数
 */
export const fetchPrefectures = async (): Promise<z.infer<typeof PrefectureApiResponseSchema>> => {
  try {
    const apiKey = process.env.REACT_APP_RESAS_API_KEY;
    const apiUrl = process.env.REACT_APP_RESAS_API_URL;

    if (!apiKey || !apiUrl) {
      throw new Error(`RESAS_APIの環境変数が設定されていません。`);
    }

    const BASE_URL = `${apiUrl}/prefectures`;

    logger.log(`request to ${apiUrl}: getPrefectures`);

    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: {
        'X-API-KEY': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status.toString()}`);
    }

    const parsed = PrefectureApiResponseSchema.safeParse(await response.json());

    if (parsed.success) {
      return parsed.data;
    } else {
      logger.error(parsed.error);
      logger.error(parsed.error.issues.map((v) => v.path));
      throw new Error(`都道府県データの型検証に失敗しました。`);
    }
  } catch (error) {
    logger.error('Error fetching data');
    throw error;
  }
};
