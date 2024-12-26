import SharedButton from "../../shared/components/Button.jsx";
import { useTranslation } from "react-i18next";
import vectorImg from "/assets/images/vector2.png";

export default function ImpactSection() {
  const { t } = useTranslation("home");

  return (
    <section className="py-4 md:mx-8 md:my-2 md:py-10 px-4 animations">
      <div className="flex justify-between items-center flex-col md:flex-row">
        {/* left side */}
        <div className="space-y-5">
          <h1 className="text-2xl relative text-center md:text-left font-bold  md:text-3xl  lg:text-4xl  ">
            {t("impactSection.title")}
            <img
              src={vectorImg}
              alt=""
              className="absolute w-[214.43px] z-0 h-[9px] left-40 transform -translate-x-1/2 rotate-[-0.43deg] top-[25px] md:top-[35px]"
            />
          </h1>
          <p className="text-sm  text-gray-600 text-center md:text-left">
            {t("impactSection.subtitle")}
          </p>
          <div className="flex items-center md:items-start justify-center md:justify-start">
            <SharedButton title="For institutions" href="institution" />
          </div>
        </div>
        {/* right side */}
        <div className="my-5 md:mt-0">
          <div className="relative max-w-xl">
            <div className="absolute top-0 left-0 w-full h-full bg-lime-300 rounded-lg -z-10"></div>
            <div className="relative flex items-center justify-center rounded-lg md:right-10 right-5 top-5 py-2 px-1">
              <img
                src="/images/4bf5c2d056b04f08e048793ff2f910a1.jpeg"
                alt="Doctor with Mask"
                className="rounded-lg object-cover w-[300px] h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
