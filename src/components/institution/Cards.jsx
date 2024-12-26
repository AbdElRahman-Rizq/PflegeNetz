import React from "react";
import { useTranslation } from "react-i18next";
import second from "/images/second-half_vector.png";
import Heading from "../../shared/components/HeadingTitle";
import SharedButton from "../../shared/components/Button";

const Cards = () => {
  const { t } = useTranslation("institution");
  const savedLanguage = localStorage.getItem("language") || "de";

  return (
    <div
      className="w-full my-4 md:mt-0 animations"
      style={{
        backgroundImage: `url(${second})`,
        backgroundSize: "fill",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <Heading
          title={t("howItWorks.title")}
          subtitle={t(
            "howItWorks.content",
            "SA netz makes recruiting international professionals simple and effective"
          )}
        />
      </div>
{savedLanguage==="de" ? (
  
  <section className="flex items-center justify-center flex-col mx-auto w-[70%]">
        {/* First Card */}
        <div className="w-full rounded-lg">
          <img src="/images/card-de.png" alt="First Card" />
        </div>
        {/* Second Card */}
        <div className="w-full rounded-lg">
          <img src="/images/card (1)-de.png" alt="Second Card" />
        </div>
        {/* Third Card */}
        <div className="w-full rounded-lg">
          <img src="/images/card (2)-de.png" alt="Third Card" />
        </div>
        {/* Fourth Card */}
        <div className="w-full rounded-lg">
          <img src="/images/card (3)-de.png" alt="Fourth Card" />
        </div>
        <SharedButton
          title={t("howItWorks.cta", "Get Started Now")}
          href="/applicants"
        />
       </section>
    ) 
    :(
      <section className="flex items-center justify-center flex-col mx-auto w-[70%]">
        {/* First Card */}
        <div className="w-full rounded-lg">
          <img src="/images/card.png" alt="First Card" />
        </div>
        {/* Second Card */}
        <div className="w-full rounded-lg">
          <img src="/images/card (1).png" alt="Second Card" />
        </div>
        {/* Third Card */}
        <div className="w-full rounded-lg">
          <img src="/images/card (2).png" alt="Third Card" />
        </div>
        {/* Fourth Card */}
        <div className="w-full rounded-lg">
          <img src="/images/card (3).png" alt="Fourth Card" />
        </div>
        <SharedButton
          title={t("howItWorks.cta", "Get Started Now")}
          href="/applicants"
        />
      </section>
  )}
    </div>
  );
};

export default Cards;
