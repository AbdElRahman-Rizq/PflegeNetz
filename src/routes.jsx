import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";

import App from "./App";

// import Navigation from "./components/Navigation";

import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx";
import Applicants from "./pages/Applicants.jsx";
import ForInstitution from "./pages/ForInstitution.jsx";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        {/* <Navigation /> */}

        <ReactRoutes>
          <Route path="/" element={<App />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/institution" element={<ForInstitution />} />
          <Route path="/applicants" element={<Applicants />} />
        </ReactRoutes>
      </BrowserRouter>
    </>
  );
}
