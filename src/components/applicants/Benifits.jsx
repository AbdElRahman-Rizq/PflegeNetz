import React from "react";
import Heading from "../../shared/components/HeadingTitle.jsx";
import BlueButton from "../../shared/components/BlueButton.jsx";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t } = useTranslation("applicant");

  return (
    <div className="py-10 px-8 animations text-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Image Section */}
        <div className="mb-8 flex justify-center">
          <div className="relative inline-block">
            <img
              src="/images/Frame 37012.png" // Replace with actual icon
              alt="Doctor"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Heading Section */}
        <Heading
          title={t("applicant.benefits_section.title")}
          subtitle={t("applicant.benefits_section.subtitle")}
        />

        {/* Benefits Section */}
        <div className="container mx-auto md:ml-40 p-4">
          <div className="flex flex-col items-center justify-center">
            {t("applicant.benefits_section.points", { returnObjects: true }).map(
              (point, index) => {
                const [title, description] = point.split(": ");
                return (
                  <div key={index} className="flex gap-4 p-4 text-left w-full mx-auto">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-t from-blue-900 to-blue-600 flex-shrink-0"></div>
                    <div className="flex items-center text-center w-full">
                      <h3 className="font-semibold text-blue-900">
                        <span>{title}: </span>
                         <span className="text-black font-normal text-sm">
                          {description}
                        </span>
                      </h3>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <BlueButton title={t("applicant.benefits_section.cta")} href="/" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
