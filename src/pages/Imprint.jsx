// File: src/pages/Imprint.jsx
import React from "react";
import Navbar from "../components/shared/Navbar.jsx";
import Footer from "../components/shared/Footer.jsx";

function Imprint() {
  return (
    <>
      <Navbar />
      <div className="p-5 bg-white lg:px-20 text-[#556987] rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Impressum</h1>
        <div className="text-[#556987] p-5 lg:px-20 text-xl flex flex-col gap-20 break-words">
          <div className="flex flex-col gap-5 ">
            <p className="header">Angaben gemäß § 5 TMG</p>
            <p>FutTech GmbH</p>
            <p>C/O Collective Incubator</p>
            <p>52062 Aachen</p>
            <p>Handelsregister: HRB24749</p>
            <p>Registergericht: Aachen</p>
          </div>

          <div className="flex flex-col gap-5 ">
            <p className="header">Vertreten durch:</p>
            <p>Dr. Ing. Mostafa Abdelshafy</p>
          </div>

          <div className="flex flex-col gap-5 ">
            <p className="header">Kontakt</p>
            <p>Telefon: (+49) 0241 412 17701</p>
            <p>E-Mail: info&#64;futtech-gmbh.de</p>
          </div>

          <div className="flex flex-col gap-5 ">
            <p className="header">Umsatzsteuer-ID</p>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
            </p>
            <p>DE342733178</p>
          </div>

          <div className="flex flex-col gap-5 ">
            <p className="header">Redaktionell verantwortlich</p>
            <p>Dr. Ing. Mostafa Abdelshafy</p>
          </div>

          <div className="flex flex-col gap-5 ">
            <p>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor
              <br />
              einer Verbraucherschlichtungsstelle teilzunehmen
            </p>
          </div>
        </div>
        {/* Add more sections from the document as needed */}
      </div>
      <Footer />
    </>
  );
}

export default Imprint;
