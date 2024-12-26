import Navbar from "./components/shared/Navbar";
import WhyChooseSection from "./components/homePage/WhyChooseSection";
import TestimonialsSection from "./components/homePage/TestimonialsSection";
import ImpactSection from "./components/homePage/ImpactSection";
import Footer from "./components/shared/Footer";
import { Welcoming } from "./components/homePage/Welcoming";
import FAQ from "./components/homePage/FAQ";
import HeroSection from "./components/HeroSection";
import { WhatWeOffer } from "./components/homePage/WhatWeOffer";
import { CallToAction } from "./components/homePage/CallToAction";
import { CookiesPopup, FutureStart, NumbersThatSpeak } from "./components";

function App() {
  return (
    <>
      <Navbar />

      <HeroSection />
      <WhatWeOffer />
      <CallToAction />
      <NumbersThatSpeak />
      <WhyChooseSection />
      <TestimonialsSection />
      <ImpactSection />
      <FutureStart />
      <Welcoming />
      <FAQ />
      <CookiesPopup />
      <Footer />
    </>
  );
}

export default App;
