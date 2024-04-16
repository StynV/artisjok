'use client'

import { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookieBar = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  const notAcceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "false", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70" onClick={notAcceptCookie}>
      <div className="fixed bottom-0 left-0 right-0 flex md:flex-row flex-col items-center justify-between px-4 py-8 bg-gray-100">
        <span className="text-black text-base mr-16 mb-5 md:mb-0">
          Deze website gebruikt cookies om de user experience hoog te houden. Door onze website te gebruiken kom je hiermee overeen.
        </span>
        <div>
          <button className="bg-green-500 py-2 px-8 rounded text-white mr-5" onClick={() => acceptCookie()}>
            Accepteer
          </button>
          <button className="bg-green-500 py-2 px-8 rounded text-white mr-5" onClick={() => notAcceptCookie()}>
            Weiger
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBar