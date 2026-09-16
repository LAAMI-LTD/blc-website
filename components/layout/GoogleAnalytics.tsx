"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_COOKIE = "bbti-cookie-consent";
const CONSENT_EVENT = "bbti-cookie-consent-change";
const MEASUREMENT_ID = "G-ETBN08SQ0V";

function hasAcceptedAnalytics() {
  return document.cookie
    .split("; ")
    .some((cookie) => cookie === `${CONSENT_COOKIE}=accepted`);
}

export function GoogleAnalytics() {
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsAllowed(hasAcceptedAnalytics());
    });
    const handleConsentChange = (event: Event) => {
      const consent = (event as CustomEvent<"accepted" | "declined">).detail;
      setIsAllowed(consent === "accepted");
    };

    window.addEventListener(CONSENT_EVENT, handleConsentChange);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener(CONSENT_EVENT, handleConsentChange);
    };
  }, []);

  if (!isAllowed) return null;

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="bbti-google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}