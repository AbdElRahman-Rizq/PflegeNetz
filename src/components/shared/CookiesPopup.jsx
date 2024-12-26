import React, { useState, useEffect } from "react";

export const CookiesPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice about cookies
    const cookiesConsent = localStorage.getItem("cookiesConsent");
    if (!cookiesConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-custom-150 shadow-lg p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Cookies Message */}
        <p className="text-custom-900 text-sm lg:text-base">
          We use cookies to enhance your browsing experience and analyze site traffic.
          By continuing to use this website, you agree to our use of cookies.{" "}
          <a href="/privacy_policy" className="underline hover:text-primary-800">
            Learn more.
          </a>
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleAccept}
            className="bg-primary-700 hover:bg-primary-800 text-white px-4 py-2 rounded-md transition"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="bg-secondary-700 hover:bg-secondary-800 text-white px-4 py-2 rounded-md transition"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

