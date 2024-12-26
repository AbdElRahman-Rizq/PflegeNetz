import React from "react";
import TitleWithLine from "../../shared/components/TitleWithLine.jsx";
import vectorImg from "/assets/images/vector.png";
import BlueButton from "../../shared/components/BlueButton.jsx";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation("applicant");

  const steps = t("applicant.how_it_works_section.steps", {
    returnObjects: true,
  });

  const getBorderStyles = (index) => {
    // Conditional borders based on the index
    if (index % 2 === 0) return "border-l-4 border-t-4";
    return "border-l-4 border-b-4";
  };

  const getCornerStyles = (index) => {
    // Conditional corner styles based on the index
    if (index % 2 === 0) return "rounded-br-2xl";
    return "rounded-tr-2xl";
  };

  return (
    <div className="md:p-8 p-4 animations">
      {/* Title Section */}
      <div className="mb-10">
        <TitleWithLine
          text={t("applicant.how_it_works_section.title")}
          vectorImg={vectorImg}
        />
        <p className="text-secondary-700 mt-2">
          {t("applicant.how_it_works_section.content")}
        </p>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative w-full md:w-1/4 text-center h-52"
          >
            <div
              className={`absolute ${
                index % 2 === 0 ? "top-3 left-3" : "bottom-3 left-3"
              }`}
            >
              <div
                className={`w-8 h-8 bg-[#66BAFF] text-white ${getCornerStyles(
                  index
                )} flex items-center justify-center font-bold`}
              >
                {index + 1}
              </div>
            </div>
            <div
              className={`h-full flex flex-col justify-center items-center border-dashed p-6 ${getBorderStyles(
                index
              )} border-secondary-500`}
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#00457C] text-white rounded-md flex items-center justify-center">
                  ⚙️
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#00457C] mb-2">
                {step.title}
              </h3>
              <p className="text-secondary-700 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <BlueButton title={t("applicant.hero_section.cta")} href="/" />
      </div>
    </div>
  );
};

export default HowItWorks;
