import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";

import App from "./App";

// import Navigation from "./components/Navigation";

import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx";
import Applicants from "./pages/Applicants.jsx";
import ForInstitution from "./pages/ForInstitution.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy.jsx";
import Cookies from "./pages/Cookies.jsx";
import Imprint from "./pages/Imprint.jsx";
import FAQs from "./pages/Faqs.jsx";
import ScrollToTopButton from "./shared/components/BackToTopButton.jsx";

export default function Routes() {
  return (
    <>
      <ScrollToTopButton />
      <BrowserRouter>
        {/* <Navigation /> */}
        <ReactRoutes>
          <Route path="/" element={<App />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/institution" element={<ForInstitution />} />
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/terms_conditions" element={<TermsAndConditions />} />
          <Route path="/privacy_policy" element={<PrivacyAndPolicy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/imprint" element={<Imprint />} />
        </ReactRoutes>
      </BrowserRouter>
    </>
  );
}
