import { FaWhatsapp } from "react-icons/fa";
import { contact, institution } from "@/config/institution";

export function WhatsAppButton() {
  return (
    <div
      className="fixed z-[999] flex items-center gap-3"
      style={{
        bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
        right: "calc(1.25rem + env(safe-area-inset-right, 0px))",
      }}
    >
      <a
        href={contact.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${institution.name} on WhatsApp`}
        title="Chat with us on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#128C7E] motion-reduce:transition-none motion-reduce:hover:scale-100"
      >
        <FaWhatsapp size={30} aria-hidden="true" />

        {/* Tooltip — shown on hover and keyboard focus, positioned to the
            left so it never clips off the edge of the viewport. */}
        <span
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-[var(--color-green-950)] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
