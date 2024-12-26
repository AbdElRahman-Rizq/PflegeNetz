import React from "react";
import Heading from "../../shared/components/HeadingTitle.jsx";
import BlueButton from "../../shared/components/BlueButton.jsx";

const Testimonials = ({
  title,
  subtitle,
  testimonials,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="px-4 py-10 max-w-[1278px] mx-auto md:px-6 lg:px-8 animations">
      {/* Title Section */}
      <Heading title={title} subtitle={subtitle} />

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
        {testimonials.map(({ image, name, location, subtitle }, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-4 mb-4">
              <img
                src={`/assets/images/${image}.png`}
                alt={name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="space-y-2">
                {name && <p className="font-semibold">{name},</p>}
                {location && (
                  <p className="text-gray-500 ms-2 text-sm">{location}</p>
                )}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="#EC942C"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700">{subtitle}</p>
          </div>
        ))}
      </div>

      {/* Button Section */}
      {buttonText && onButtonClick && (
        <div className="text-center mt-8">
          <BlueButton title={buttonText} href="/" />
        </div>
      )}
    </section>
  );
};

export default Testimonials;
