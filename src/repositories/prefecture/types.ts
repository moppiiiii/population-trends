import { z } from 'zod';

// 都道府県データのスキーマを定義
const PrefectureSchema = z.object({
  prefCode: z.number().int().min(1).max(47),
  prefName: z.string(),
});

// 都道府県APIのスキーマを定義
export const PrefectureApiResponseSchema = z.object({
  message: z.string().nullable(),
  result: z.array(PrefectureSchema),
});
