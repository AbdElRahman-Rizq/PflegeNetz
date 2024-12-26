import SharedButton from "../../shared/components/Button";
import vectorImg from "/assets/images/vector2.png";
import { useTranslation } from "react-i18next";

export const FutureStart = () => {
  const { t } = useTranslation("home");

  return (
    <section className="flex animations justify-center flex-col md:flex-row md:gap-16 bg-[#E6F6FE] py-10 px-4 md:px-6 lg:px-8 mb-10">
      <img src="/images/clinic.png" alt="clinic" className="md:w-1/3 w-full" />
      <div className="flex flex-col my-auto">
        <div className="text-center md:text-left mb-6 lg:mb-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            <span className="relative ">
              {t("futureStart.title")}
              <img
                src={vectorImg}
                alt=""
                className="absolute w-[214.43px] z-0 h-[9px] left-1/2 transform -translate-x-1/2 rotate-[-0.43deg] top-[25px] md:top-[40px]"
              />
            </span>
          </h2>
          <p className="text-sm text-gray-600 mb-6 lg:w-[70%] mt-2">
            {t("futureStart.subtitle")}
          </p>
        </div>

        <div className="md:ml-1 flex md:justify-start md:items-start justify-center items-center md:mt-3">
          <SharedButton title={"For Applicants"} href="/applicants" />
        </div>
      </div>
    </section>
  );
};
