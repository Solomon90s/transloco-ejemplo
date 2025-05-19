import { TranslocoGlobalConfig } from '@jsverse/transloco-utils';

export enum AvailableLanguages {
  ES = 'es',
  EN = 'en',
}

export const AvailablesLanguages = [
  AvailableLanguages.ES,
  AvailableLanguages.EN,
];

const config: TranslocoGlobalConfig = {
  langs: AvailablesLanguages,
  defaultLang: AvailableLanguages.ES,
  rootTranslationsPath: 'src/assets/i18n/',
};

export default config;
