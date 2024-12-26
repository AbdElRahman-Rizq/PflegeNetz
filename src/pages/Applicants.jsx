import React from "react";
import Navbar from "../components/shared/Navbar.jsx";
import Footer from "../components/shared/Footer.jsx";
import HeroSection from "../shared/components/HeroSection.jsx";
import WhatWeDo from "../components/applicants/WhatWeDo.jsx";
import Benefits from "../components/applicants/Benifits.jsx";
import { useTranslation } from "react-i18next";
import HowItWorks from "../components/applicants/HowItWorks.jsx";
import TestimonialsSection from "../components/homePage/TestimonialsSection.jsx";
import BeforeFooter from "../shared/components/BeforeFooter.jsx";
import FAQ from "../components/homePage/FAQ.jsx";
import { FAQAccordion } from "../shared/components/FAQsAccordion.jsx";

export default function Applicants() {
  const { t } = useTranslation("applicant");

  const handleGetStarted = () => {
    console.log("Get Started button clicked!");
  };

  const handleMakeSchedule = () => {
    console.log("Make Schedule button clicked!");
  };

  return (
    <>
      <Navbar />
      <HeroSection
        title={t("applicant.hero_section.title")}
        subtitle={t("applicant.hero_section.subtitle")}
        buttonText={t("applicant.hero_section.cta")}
        onGetStarted={handleGetStarted}
        onSchedule={handleMakeSchedule}
        doctorName="Dr. Tomas"
        doctorTitle={t("applicant.hero_section.doctor_title")}
        doctorCta={t("applicant.hero_section.doctor_cta")}
        img="/images/doctor3.png"
      />
      <WhatWeDo />
      <Benefits />
      <HowItWorks />
      <TestimonialsSection />
      <BeforeFooter
        title={t("applicant.explore_opportunities_section.title")}
        description={t("applicant.why_section.content")}
        buttonText={t("applicant.why_section.cta")}
        buttonLink="/"
        imageSrc="/images/Group 1000001049.png"
      />
      <FAQ />
      <Footer />
    </>
  );
}
