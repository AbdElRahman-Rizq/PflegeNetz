import { useLocation } from "react-router-dom";
import Testimonial from "./Testimonial";
import vectorImg from "/assets/images/vector.png";

const TestimonialsSection = () => {
  const location = useLocation();
  const isNotHome = location.pathname.includes("institution");

  const testimonials = [
    {
      image: "testimonial1",
      name: "Hospital Director",
      location: "Stuttgart",
      subtitle:
        "SA netz is the key to our success. Their expertise and dedication helped us attract the best professionals",
    },
    {
      image: "testimonial2",
      name: "Rajesh",
      location: "Doctor from India",
      subtitle:
        "Thanks to SA netz, I was able to achieve my dream of working in Germany. Their support was unmatched.",
    },
    {
      image: "testimonial3",
      name: "CEO",
      location: "Frankfurt",
      subtitle:
        "Working with SA netz was one of the best decisions we've made. Their professionalism is impressive.",
    },
  ];

  return (
    <section className="px-4 py-10 max-w-[1278px] mx-auto md:px-6 lg:px-8">
      <div className="text-center mb-8 relative">
        {isNotHome ? (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Trust{" "}
            <span className="relative">
              Experiences of Our Partners
              {/* the line under the title */}
              <img
                src={vectorImg}
                alt=""
                className="absolute w-[214.43px] h-[8px]"
                style={{
                  top: "40px",
                  left: "50%",
                  transform: "translateX(-50%) rotate(-0.43deg)",
                }}
              />
            </span>
          </h2>
        ) : (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Trust{" "}
            <span className="relative">
              Real Experiences
              {/* the line under the title */}
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
        <p className="mt-4 text-gray-600 font-inter text-base font-medium leading-[24.8px] tracking-[0.015em] text-center decoration-skip-ink-none max-w-[600px] mx-auto">
          We use only the best quality materials on the market in order to
          provide the best products to our patients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
