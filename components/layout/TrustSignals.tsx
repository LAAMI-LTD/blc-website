import { ShieldCheck, MapPin, GraduationCap, MessageCircle } from "lucide-react";
import { institution, branches } from "@/config/institution";
import { departments } from "@/data/departments";

const signals = [
  { icon: ShieldCheck, label: institution.registration.label, value: institution.registration.number },
  { icon: GraduationCap, label: "Departments", value: String(departments.length) },
  { icon: MapPin, label: "Branches Nationwide", value: String(branches.length + 1) },
  { icon: MessageCircle, label: "Support", value: "WhatsApp & Phone" },
];

export function TrustSignals() {
  return (
    <div
      className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-white/10 py-8 sm:grid-cols-4"
      aria-label="Institutional trust indicators"
    >
      {signals.map((signal) => (
        <div key={signal.label} className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[var(--color-orange-400)]">
            <signal.icon size={16} aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{signal.value}</p>
            <p className="text-xs text-white/60">{signal.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
