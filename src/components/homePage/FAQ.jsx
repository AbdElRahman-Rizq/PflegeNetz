import React, { useState } from "react";
import HeadingTitle from "../../shared/components/HeadingTitle";
import Button from "../../shared/components/Button";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I see who reads my email campaigns?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      question: "Do you offer non-profit discounts?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
    {
      question: "Can I see who reads my email campaigns?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto  md:w-1/2">
      <HeadingTitle
        title="Frequently Ask Question"
        subtitle="We use only the best quality materials on the market in order to provide the best products to our patients."
      />
      <div className="md:mt-8 space-y-4 mx-auto">
        {" "}
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-b border-primary-90 rounded-md mx-1 md:mx-0 dark:bg-primary-950 pb-4 ${
              openIndex === index ? "bg-primary-950" : ""
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer p-4"
              onClick={() => handleToggle(index)}
            >
              <h3
                className={`text-base font-semibold ${
                  openIndex === index ? "text-white" : "text-secondary-700"
                }`}
              >
                {" "}
                {faq.question}{" "}
              </h3>{" "}
              <span
                className={`${
                  openIndex === index ? "text-white" : "text-secondary-700"
                }`}
              >
                {" "}
                {openIndex === index ? "-" : "+"}{" "}
              </span>{" "}
            </div>{" "}
            {openIndex === index && (
              <p className="mt-2 p-4 text-white bg-primary-950 rounded-md">
                {faq.answer}
              </p>
            )}{" "}
          </div>
        ))}{" "}
      </div>{" "}
      <div className="mt-8 flex justify-center">
        <Button
          title="See All FAQs"
          href="/faqs"
          className="bg-primary-950 hover:bg-primary-800 text-white px-6 py-2 rounded-md"
        />{" "}
      </div>{" "}
    </div>
  );
};

export default FAQ;
