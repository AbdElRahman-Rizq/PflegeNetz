import React from "react";
import Heading from "../shared/components/HeadingTitle.jsx";
import HealthcareProfessionals from "../components/services/HealthCare.jsx";
import MedicalInstitutions from "../components/services/MedicalInstitutions.jsx";
import WhyChooseSA from "../components/services/WhyChoseNetz.jsx";
import BeforeFooter from "../shared/components/BeforeFooter.jsx";
import Navbar from "../components/shared/Navbar.jsx";
import Footer from "../components/shared/Footer.jsx";

export default function Services() {
  return (
    <>
      <Navbar />
      <Heading
        title={"Services That Connect"}
        subtitle={
          "We offer tailored solutions for healthcare professionals and German medical institutions."
        }
      />
      <HealthcareProfessionals />
      <MedicalInstitutions />
      <WhyChooseSA />

      <BeforeFooter
        title={"Your Journey Starts Here"}
        description={
          "Find the right support for your needs – whether as a professional or an institution."
        }
        buttonText={"Check Opportunities"}
        buttonLink={"/"}
        imageSrc={"/images/Group 1000001049.png"}
      />

      <Footer />
    </>
  );
}
