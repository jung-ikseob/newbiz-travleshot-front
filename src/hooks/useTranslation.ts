import { useState, useEffect } from 'react';
import { translations, Language } from '@/locales';

const LANGUAGE_STORAGE_KEY = 'preferred_language';

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return (saved as Language) || 'korean';
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved && saved !== language) {
        setLanguage(saved as Language);
      }
    };

    // Listen for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Also check on mount and when component updates
    const checkInterval = setInterval(() => {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved && saved !== language) {
        setLanguage(saved as Language);
      }
    }, 100);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(checkInterval);
    };
  }, [language]);

  const t = translations[language];

  return { t, language };
};
