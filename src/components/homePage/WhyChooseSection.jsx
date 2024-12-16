import whyChooseImg from "/assets/images/whyChoose.png";
import vectorImg from "/assets/images/vector.png";
import shieldDoneImg from "/assets/images/Shield Done.png";
import TitleWithLine from "../../shared/components/TitleWithLine.jsx";

const WhyChooseSection = () => {
  const benefits = [
    { id: 1, text: "There are many global networks available to you." },
    { id: 2, text: "It's better to leave your home." },
    { id: 3, text: "Schnelle and nachhaltige Ergebnisse" },
    { id: 4, text: "--Just a Placeholder--" },
  ];

  return (
    <section className="bg-custom-50 py-8 mx-8  md:py-16 px-4 min-h-[400px] md:h-[554px] relative">
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
          <h2 className="text-3xl md:text-4xl  font-bold text-navy-900">
            Why Choose{" "}
            <span className="relative ">
              PflegeNetz
              <img
                src={vectorImg}
                alt=""
                className="absolute w-[214.43px] z-0 h-[10.31px] left-1/2 transform -translate-x-1/2 rotate-[-0.43deg] top-[30px] md:top-[35px]"
              />
            </span>
            <br />
            For All Your Treatments?
          </h2>

          <p className="text-gray-700">
            We use only the best quality materials and deal with best doctors in
            order to provide the best products to our patients.
          </p>

          <ul className="md:space-y-4 space-y-2">
            {benefits.map((benefit) => (
              <li
                key={benefit.id}
                className="flex md:items-center text-left  gap-3"
              >
                <img
                  src={shieldDoneImg}
                  alt="Shield check"
                  className="w-5 h-5"
                />
                <span className="text-gray-700">{benefit.text}</span>
              </li>
            ))}
          </ul>

          <button className="bg-[#9CC93B] hover:bg-[#8BB82D] text-white px-8 py-3 rounded-md transition duration-300">
            Book an appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
