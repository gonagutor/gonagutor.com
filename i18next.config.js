import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './src/assets/locale/en.json';
import es from './src/assets/locale/es.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: {
      order: ['cookie', 'localStorage', 'sessionStorage', 'navigator'],

      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',

      caches: ['localStorage', 'cookie'],
    },
    resources: { en, es },
    lng: 'es',
    fallbackLng: 'en',
  });

export default i18n;
