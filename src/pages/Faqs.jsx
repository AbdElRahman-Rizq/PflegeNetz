import React from "react";
import Navbar from "../components/shared/Navbar.jsx";
import Footer from "../components/shared/Footer.jsx";
import TitleWithLine from "../shared/components/TitleWithLine.jsx";
import vectorImg from "/assets/images/vector.png";
import { useTranslation } from "react-i18next";

const FAQs = () => {
  const { t } = useTranslation("faq");

  return (
    <>
      <Navbar />
      <section className="bg-white md:text-left text-center md:px-20 dark:bg-gray-900">
        <div className="px-4 mx-auto max-w-screen-xl ">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"></h2>

          <TitleWithLine text={t("faq.title")} vectorImg={vectorImg} />
          <div className="grid pt-8 md:text-left text-center border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2 mt-2">
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t("faq.faqs.questions.0.question")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faq.faqs.questions.0.answer")}
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t("faq.faqs.questions.1.question")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faq.faqs.questions.1.answer")}
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t("faq.faqs.questions.2.question")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faq.faqs.questions.2.answer")}
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t("faq.faqs.questions.3.question")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faq.faqs.questions.3.answer")}
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t("faq.faqs.questions.4.question")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faq.faqs.questions.4.answer")}
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t("faq.faqs.questions.5.question")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faq.faqs.questions.5.answer")}
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t("faq.faqs.questions.6.question")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faq.faqs.questions.6.answer")}
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t("faq.faqs.questions.7.question")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faq.faqs.questions.7.answer")}
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t("faq.faqs.questions.8.question")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faq.faqs.questions.8.answer")}
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t("faq.faqs.questions.9.question")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faq.faqs.questions.9.answer")}
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t("faq.faqs.questions.10.question")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faq.faqs.questions.10.answer")}
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t("faq.faqs.questions.11.question")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faq.faqs.questions.11.answer")}
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t("faq.faqs.questions.12.question")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faq.faqs.questions.12.answer")}
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t("faq.faqs.questions.13.question")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faq.faqs.questions.13.answer")}
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t("faq.faqs.questions.14.question")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faq.faqs.questions.14.answer")}
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t("faq.faqs.questions.15.question")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {t("faq.faqs.questions.15.answer")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQs;
