"use client";

import { useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { contact, institution } from "@/config/institution";

/**
 * Why click-to-load instead of always embedding the iframe:
 *
 * This site sets no cookies of its own and loads no analytics or tracking
 * scripts. Embedding Google's Maps iframe unconditionally would silently
 * introduce a third-party origin (and whatever cookies Google's iframe
 * sets) on every visit to the Contact page — even for people who never
 * intended to interact with a map. Gating it behind one explicit click
 * keeps that consistent: nothing from Google loads until the visitor
 * asks for it, which avoids the need for a site-wide cookie-consent
 * banner for what is otherwise a cookie-free site. See the Cookie Policy
 * for the full disclosure.
 */
export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={contact.googleMaps.embedUrl}
        title={`Map showing ${institution.shortName}'s location at ${contact.location}`}
        className="h-64 w-full border-0 sm:h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="flex h-64 w-full flex-col items-center justify-center gap-3 bg-[var(--color-paper-dim)] text-center transition-colors hover:bg-[var(--color-line)]/40 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--accent)] sm:h-80"
    >
      <MapPin size={28} className="text-[var(--color-green-900)]" aria-hidden="true" />
      <span className="max-w-xs text-sm text-[var(--color-ink)]">
        <span className="font-semibold">Load map</span>
        <br />
        This loads an embedded map from Google, which may set its own
        cookies. See our{" "}
        <a href="/cookie-policy" className="underline underline-offset-2 hover:text-[var(--color-orange-600)]">
          Cookie Policy
        </a>
        .
      </span>
    </button>
  );
}
