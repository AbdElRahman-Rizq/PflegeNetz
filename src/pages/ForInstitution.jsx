import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Hero from "../components/institution/Hero";
import TestimonialsSection from "../components/homePage/TestimonialsSection";
import BeforeFooter from "../shared/components/BeforeFooter";
import WhySaNetz from "../components/institution/WhySaNetz";
import Cards from "../components/institution/Cards";
import { ServicesForInstitute } from "../components";
const ForInstitution = () => {
  return (
    <>
      <Navbar />
     <Hero />
     <ServicesForInstitute />
     <WhySaNetz />
     <Cards />
     <TestimonialsSection />
     <BeforeFooter title={"Together, We Can Achieve More"} description={"Rely on our expertise and start a partnership that will revolutionize your staffing strategy"} 
     buttonText={"Contact Us Now"} buttonLink={"/contact"} imageSrc={"images/nurse-removebg.png"} />
      <Footer />
    </>
  );
};

export default ForInstitution; 