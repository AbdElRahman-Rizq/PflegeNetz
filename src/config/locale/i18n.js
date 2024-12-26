import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

// Get the base URL dynamically for Vercel and local environments
const getBaseURL = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "/";
};

const savedLanguage = localStorage.getItem("language") || "de";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: savedLanguage, 
    fallbackLng: "en",
    supportedLngs: ["en", "de"],
    ns: ["en", "de"],
    defaultNS: "de",
    backend: {
      loadPath: `${getBaseURL()}/assets/locales/{{lng}}/{{ns}}.json`, // Dynamic base URL
    },
    interpolation: {
      escapeValue: false,
    },
    debug: true, 
  });

export default i18n;
