import 'react-i18next';
import { resources } from './locales/config';

declare module 'react-i18next' {
  type DefaultResources = typeof resources['th'];
  interface Resources extends DefaultResources {}
}
