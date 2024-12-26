import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Hero from "../components/institution/Hero";
import TestimonialsSection from "../components/homePage/TestimonialsSection";
import BeforeFooter from "../shared/components/BeforeFooter";
import WhySaNetz from "../components/institution/WhySaNetz";
import Cards from "../components/institution/Cards";
import { ServicesForInstitute } from "../components";
import { useTranslation } from "react-i18next";
const ForInstitution = () => {
  const { t } = useTranslation("institution");

  return (
    <>
      <Navbar />
     <Hero />
     <ServicesForInstitute />
     <WhySaNetz />
     <Cards />
     <TestimonialsSection />
     <BeforeFooter title={t("partner_with_us.title")} description={t("partner_with_us.content")}  
     buttonText={t("partner_with_us.cta")} buttonLink={"/contactUs"} imageSrc={"images/nurse-removebg.png"} />
      <Footer />
    </>
  );
};

export default ForInstitution; 