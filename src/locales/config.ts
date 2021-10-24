import i18n from 'i18next';
import translation from './th.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  th: {
    translation,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'th',
  resources,
});
