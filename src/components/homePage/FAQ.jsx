import React, { useState } from "react";
import HeadingTitle from "../../shared/components/HeadingTitle";
import Button from "../../shared/components/Button";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation("faq");
  const [openIndex, setOpenIndex] = useState(null);

  // First three questions directly applied here
  const faqs = [
    {
      question: t("faq.faqs.questions.0.question", {
        defaultValue:
          "How can I get my medical qualifications recognized in Germany?",
      }),
      answer: t("faq.faqs.questions.0.answer", {
        defaultValue:
          "We assist you with reviewing and submitting your documents for the recognition of your medical qualifications in Germany.",
      }),
    },
    {
      question: t("faq.faqs.questions.1.question", {
        defaultValue: "Do I need German language skills to work in Germany?",
      }),
      answer: t("faq.faqs.questions.1.answer", {
        defaultValue:
          "Basic German language skills are essential, especially medical terminology. We offer specialized language courses to prepare you thoroughly.",
      }),
    },
    {
      question: t("faq.faqs.questions.2.question", {
        defaultValue: "How does SA netz support me in finding a job?",
      }),
      answer: t("faq.faqs.questions.2.answer", {
        defaultValue:
          "We connect you with renowned hospitals, clinics, and care facilities that match your qualifications and career goals.",
      }),
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto md:w-1/2 mt-10 animations">
      {/* Heading Title */}
      <HeadingTitle title={t("faq.title")} subtitle={t("faq.subtitle")} />

      {/* FAQ Questions */}
      <div className="md:mt-8 space-y-2 mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-b border-primary-90 rounded-md mx-1 md:mx-0 dark:bg-primary-950 pb-4 ${
              openIndex === index ? "bg-primary-950" : ""
            }`}
          >
            {/* Question Header */}
            <div
              className="flex justify-between items-center cursor-pointer p-4"
              onClick={() => handleToggle(index)}
            >
              <h3
                className={`text-base font-semibold ${
                  openIndex === index ? "text-white" : "text-secondary-700"
                }`}
              >
                {faq.question}
              </h3>
              <span
                className={`${
                  openIndex === index ? "text-white" : "text-secondary-700"
                }`}
              >
                {openIndex === index ? "-" : "+"}
              </span>
            </div>

            {/* Answer Section */}
            {openIndex === index && (
              <p className="mt-2 p-4 text-white bg-primary-950 rounded-md">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* See All FAQs Button */}
      <div className="md:mt-8 mt-2 flex justify-center">
        <Button
          title={t("faq.buttonText")} // Translated button text
          href="faqs"
          className="bg-primary-950 hover:bg-primary-800 text-white px-6 py-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default FAQ;
