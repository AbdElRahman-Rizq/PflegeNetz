import { useTranslation } from "react-i18next";
import Flag from "react-flagkit";
import { useEffect } from "react";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "de" : "en";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center h-full w-12 rounded-lg transition-all"
      aria-label="Switch Language"
    >
      <Flag
        style={{ width: "2em" }}
        country={i18n.language === "en" ? "US" : "DE"}
      />
    </button>
  );
};
