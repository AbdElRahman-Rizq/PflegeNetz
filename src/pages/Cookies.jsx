// File: src/pages/CookiesPolicy.jsx
import React from "react";
import Navbar from "../components/shared/Navbar.jsx";
import Footer from "../components/shared/Footer.jsx";

function Cookies() {
  return (
    <>
      <Navbar />
      <div className="p-5 bg-white lg:px-20 text-[#556987] rounded-lg">
        <h1 className="text-2xl font-bold ">Cookies</h1>
        <div className="text-[#556987] text-xl p-5 lg:px-20">
          <p className="leading-8">
            Wir setzen Dienste, unter anderem von Drittanbietern, ein, die wir
            für den Betrieb der Website benötigen (Notwendig) oder die uns
            helfen, unsere Website zu optimieren (Komfort) und personalisierte
            Werbung auszuspielen (Marketing). Um die Komfort- und
            Marketing-Dienste einsetzen zu dürfen, benötigen wir Ihre
            Einwilligung.
          </p>

          <p className="leading-8">
            Indem Sie auf "Alle zulassen" klicken, stimmen Sie den Komfort- und
            Marketing-Datenverarbeitungen freiwillig zu. Dies umfasst auch Ihre
            Einwilligung gem. Art. 49 Abs. 1 lit. a DSGVO zur Datenverarbeitung
            außerhalb des EWR, z.B. in den USA. In diesen Ländern kann trotz
            sorgfältiger Auswahl und Verpflichtung der Dienstleister das hohe
            europäische Datenschutzniveau nicht zwingend garantiert werden.
            Sofern eine Datenübermittlung in die USA stattfindet, besteht bspw.
            das Risiko, dass diese Daten von US-Behörden zu Kontroll- und
            Überwachungszwecken verarbeitet werden können, ohne dass wirksame
            Rechtsbehelfe vorhanden oder sämtliche Betroffenenrechte
            durchsetzbar sind. Ihre Einwilligung können Sie jederzeit
            widerrufen.
          </p>
        </div>
        {/* Add more sections from the document as needed */}
      </div>
      <Footer />
    </>
  );
}

export default Cookies;
