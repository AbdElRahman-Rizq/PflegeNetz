import { useLocation } from "react-router-dom";
import Testimonial from "./Testimonial";
import { useTranslation } from "react-i18next";
import vectorImg from "/assets/images/vector.png";

const TestimonialsSection = () => {
  const { t } = useTranslation("home");
  
  const location = useLocation();
  const isNotHome = location.pathname.includes("institution");

  const testimonials = [
    {
      image: "testimonial1",
      name: "Hospital Director",
      location: "Stuttgart",
      subtitle: t("testimonials.subtitles.0"),
    },
    {
      image: "testimonial2",
      name: "Rajesh",
      location: "Doctor from India",
      subtitle: t("testimonials.subtitles.1"),
    },
    {
      image: "testimonial3",
      name: "CEO",
      location: "Frankfurt",
      subtitle: t("testimonials.subtitles.2"),
    },
  ];

  return (
    <section className="px-4 py-10 max-w-[1278px] mx-auto md:px-6 lg:px-8 animations">
      <div className="text-center mb-8 relative">
        {isNotHome ? (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {t("testimonials.inst_testimonials.Ftitle")}
            <span className="relative">
              {t("testimonials.inst_testimonials.title")}
              <img
                src={vectorImg}
                alt=""
                className="absolute w-[214.43px] h-[8px]"
                style={{
                  top: "33px",
                  left: "50%",
                  transform: "translateX(-50%) rotate(-0.43deg)",
                }}
              />
            </span>
          </h2>
        ) : (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {t("testimonials.Ftitle")}
            <span className="relative">
              {t("testimonials.title")}
              <img
                src={vectorImg}
                alt=""
                className="absolute w-[214.43px] h-[10.31px]"
                style={{
                  top: "40px",
                  left: "50%",
                  transform: "translateX(-50%) rotate(-0.43deg)",
                }}
              />
            </span>
          </h2>
        )}
      
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          {t("testimonials.button")}
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
