import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import uz from './i18n/uz/uz.json'
import ru from './i18n/ru/ru.json'
import eng from './i18n/eng/eng.json'



export const resources = {
  uz: { translation: uz  },
  ru: { translation: ru },
  eng: {translation: eng}
} as const;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz',
    fallbackLng: 'eng',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;