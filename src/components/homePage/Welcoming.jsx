import VideoSection from "../../components/aboutUs/VideoSection";
import vectorImg from "/assets/images/vector.png";
import { useTranslation } from "react-i18next";
export const Welcoming = () => {
  const { t } = useTranslation("home");
  return (
    <div className="mb-5 animations">
      <h2
        style={{ lineHeight: "1.5" }}
        className="text-2xl md:text-3xl  lg:text-4xl   font-bold my-5 text-center md:w-[50%] mx-auto "
      >
        {t("welcoming.title")}
        <img
          src={vectorImg}
          alt=""
          className="absolute w-[214.43px] z-0 h-[9px] left-1/2 transform -translate-x-1/2 rotate-[-0.43deg] top-[25px] md:top-[42px]"
        />
      </h2>

      <h3 className="text-secondary-700 text-center md:w-[30%] mb-3 mx-auto">
        {t("welcoming.subtitle")}
      </h3>
      <VideoSection
        videoSrc={t("welcoming.videoSrc")}
        altText={t("welcoming.altText")}
      />
    </div>
  );
};
