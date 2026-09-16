"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_COOKIE = "bbti-cookie-consent";
const CONSENT_EVENT = "bbti-cookie-consent-change";

function hasConsentCookie() {
  return document.cookie.split("; ").some((cookie) => cookie.startsWith(`${CONSENT_COOKIE}=`));
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsVisible(!hasConsentCookie());
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function respond(value: "accepted" | "declined") {
    document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=31536000; SameSite=Lax`;
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-1000 border-t border-green-700 bg-green-950 text-white shadow-[0_-8px_30px_rgba(0,0,0,0.18)]"
    >
      <div className="mx-auto flex max-w-width flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-8">
        <p className="max-w-4xl text-sm leading-relaxed text-white/85">
          Berlin Business Training Institute respects your privacy. This website
          does not use advertising cookies. With your permission, privacy-friendly
          Google Analytics helps us understand how visitors use the site. Google
          Maps loads only when you ask to view it. By choosing &quot;Accept&quot;, you acknowledge our{" "}
          <Link href="/privacy-policy" className="font-semibold text-white underline underline-offset-2 hover:text-orange-400">
            Privacy Policy
          </Link>
          ,{" "}
          <Link href="/cookie-policy" className="font-semibold text-white underline underline-offset-2 hover:text-orange-400">
            Cookie Policy
          </Link>
          {" "}and{" "}
          <Link href="/terms-and-conditions" className="font-semibold text-white underline underline-offset-2 hover:text-orange-400">
            Terms &amp; Conditions
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => respond("declined")}
            className="rounded-md border border-white/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => respond("accepted")}
            className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
          >
            Accept
          </button>
        </div>
      </div>
    </aside>
  );
}