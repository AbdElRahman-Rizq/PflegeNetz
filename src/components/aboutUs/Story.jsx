import React from "react";
import { useTranslation } from "react-i18next";
import TitleWithLine from "../../shared/components/TitleWithLine.jsx";
import vectorImg from "/assets/images/vector.png";

export default function Story() {
  const { t } = useTranslation("about");

  return (
    <>
      <section className="px-4 py-10  md:max-w-[1278px] mx-auto md:px-6 lg:px-8 animations">
        <div className="flex justify-around items-center">
          <div>
            <img
              src="/images/65546916b942345607c0b40ed85efb07.jpeg"
              alt={t("story_section.image_alt")}
              className="rounded-md md:w-[404px] hidden md:block md:h-[302px] object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-normal">
              <span className="text-2xl text-secondary-700 md:text-3xl lg:text-4xl font-bold">
                {t("story_section.Ftitle")}
              </span>
              <TitleWithLine
                text={t("story_section.Stitle")}
                vectorImg={vectorImg}
              />
              <span className="text-2xl text-secondary-700 md:text-3xl lg:text-4xl font-bold">
                {t("story_section.title")}
              </span>
            </div>
            <p className="md:w-[500px] mt-4 text-secondary-700">
              {t("story_section.content")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
