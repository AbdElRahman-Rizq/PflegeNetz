import whyChooseImg from "/assets/images/whyChoose.png";
import vectorImg from "/assets/images/vector.png";
import shieldDoneImg from "/assets/images/Shield Done.png";
import TitleWithLine from "../../shared/components/TitleWithLine.jsx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WhyChooseSection = () => {
  const { t } = useTranslation("home");

  const benefits = t("whyChoose.benefits", { returnObjects: true });

  return (
    <section className="bg-custom-50 py-8 mx-8 md:py-16 px-4 min-h-[400px] md:h-[554px] relative animations">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={whyChooseImg}
            alt="Medical professional with stethoscope"
            className="w-full max-w-[414px] h-auto md:h-[444px] rounded-tl-[10px] mx-auto"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
            {t("whyChoose.Ftitle")}
            <span className="relative ">
              {t("whyChoose.title")}
              <img
                src={vectorImg}
                alt=""
                className="absolute w-[214.43px] z-0 h-[10.31px] left-1/2 transform -translate-x-1/2 rotate-[-0.43deg] top-[30px] md:top-[35px]"
              />
            </span>
            <br />
            
          </h2>

          <p className="text-gray-700">
            {t("whyChoose.subtitle")}
          </p>

          <ul className="md:space-y-4 space-y-2">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex md:items-center text-left gap-3"
              >
                <img
                  src={shieldDoneImg}
                  alt="Shield check"
                  className="w-5 h-5"
                />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
          <button className="bg-[#9CC93B] hover:bg-[#8BB82D] text-white px-8 py-3 rounded-md transition duration-300 no-underline">
            <Link to="/about-us">{t("whyChoose.button")}</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
