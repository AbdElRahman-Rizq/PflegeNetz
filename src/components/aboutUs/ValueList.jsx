import React from "react";
import { useTranslation } from "react-i18next";
import ValueCard from "./ValueCard";


const ValuesList = () => {
  const { t } = useTranslation("about"); // Assuming "about" is the namespace for the translations.

  const values = t("values_section.content", { returnObjects: true });

  return (
    <div>
      {values.map((value, index) => (
        <ValueCard
          key={index}
          title={value.title}
          description={value.description}
        />
      ))}
    </div>
  );
};

export default ValuesList;
