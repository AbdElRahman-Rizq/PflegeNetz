import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

const savedLanguage = localStorage.getItem("language") || "de";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: savedLanguage, 
    fallbackLng: "en",
    supportedLngs: ["en_institution", "de_institution", "en", "de"],
    ns: ["en", "de"],
    defaultNS: "de",
    backend: {
      loadPath: "/assets/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
    debug: true, 
  });

export default i18n;
