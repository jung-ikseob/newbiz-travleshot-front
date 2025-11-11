import { useMemo, useCallback } from 'react';
import { translations, Language } from '@/locales';
import { useLocalStorage } from './useLocalStorage';

const LANGUAGE_STORAGE_KEY = 'preferred_language';

export const useTranslation = () => {
  const [language, setLanguage] = useLocalStorage<Language>(
    LANGUAGE_STORAGE_KEY,
    'korean'
  );

  // Memoize translations to avoid unnecessary recalculations
  const t = useMemo(() => translations[language], [language]);

  // Provide a setter function for changing language
  const changeLanguage = useCallback(
    (newLanguage: Language) => {
      setLanguage(newLanguage);
    },
    [setLanguage]
  );

  return { t, language, changeLanguage };
};
