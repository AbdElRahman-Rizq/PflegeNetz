import React from "react";
import { ContactForm, ContactInfo } from "../components";
import vectorImg from "/assets/images/vector.png";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer.jsx";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation("contact");

  return (
    <>
      <Navbar />
      <section
        className="px-4 pb-2 md:py-12 max-w-[1024px] mx-auto bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/assets/image/Vector.png')" }}
      >
        <h2 className=" text-3xl md:text-5xl font-bold text-center mb-4 text-secondary-bg relative">
          {t("contactPage.heroSection.title")}
          <img
            src={vectorImg}
            alt=""
            className="absolute w-[214.43px] z-0 h-[10.31px] left-1/2 transform -translate-x-1/2 rotate-[-0.43deg] bottom-[-1%]"
          />
        </h2>
        <p className="text-center text-gray-600 mb-8 w-1/2 mx-auto">
          {t("contactPage.heroSection.subtitle")}
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
