import { ko } from './ko';
import { ja } from './ja';
import { en } from './en';

export const translations = {
  korean: ko,
  japanese: ja,
  english: en,
} as const;

export type Language = keyof typeof translations;

export { ko, ja, en };
