import { z } from 'zod';

// 「総人口」「年少人口」「生産年齢人口」「老年人口」々のエントリをバリデーションするスキーマ
const compositionDataEntrySchema = z.object({
  year: z.number(),
  value: z.number(),
  rate: z.number().optional(), // rate はオプション
});

// 各カテゴリのデータスキーマ
const categorySchema = z.object({
  label: z.string(),
  data: z.array(compositionDataEntrySchema),
});

// メインのデータ構造のスキーマ
const resultSchema = z.object({
  boundaryYear: z.number(),
  data: z.array(categorySchema),
});

export const PopulationCompositionApiResponseSchema = z.object({
  message: z.string().nullable(),
  result: resultSchema,
});
