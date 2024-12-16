import React, { useState } from "react";
import Heading from "./HeadingTitle.jsx";
import BlueButton from "./BlueButton.jsx";

export const FAQAccordion = ({ title, subtitle, faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        {/* Title */}
        <Heading title={title} subtitle={subtitle} />

        {/* Accordion */}
        <div className="mx-auto max-w-screen-md">
          {faqs.map((faq, index) => (
            <div key={index}>
              {/* Accordion Header */}
              <h2>
                <button
                  type="button"
                  className={`flex justify-between items-center p-5 w-full font-medium text-left border-b border-gray-200  dark:border-gray-700 ${
                    activeIndex === index
                      ? "text-white bg-[#00447C]"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`accordion-body-${index}`}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-6 h-6 transform ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    } transition-transform`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </h2>

              {/* Accordion Body */}
              <div
                id={`accordion-body-${index}`}
                className={`overflow-hidden transition-[max-height] duration-300 px-5 ease-in-out ${
                  activeIndex === index
                    ? "max-h-screen bg-[#00447C] text-secondary-200"
                    : "max-h-0 "
                }`}
                aria-labelledby={`accordion-header-${index}`}
              >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  {faq.answer.map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-2 ">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex mt-4  justify-center items-center">
          <BlueButton title="Read More" href="/" />
        </div>
      </div>
    </section>
  );
};
