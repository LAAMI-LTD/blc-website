import Image from "next/image";

const LAAMI_MARK_PATH = "/credits/laami-mark.png";

export function DeveloperCredit() {
  return (
    <a
      href="https://laamilabs.co.ke"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-white/80 focus-visible:text-white/80"
    >
      <span>Developed by</span>
      <Image
        src={LAAMI_MARK_PATH}
        alt="Laami Labs"
        width={18}
        height={14}
        className="h-[14px] w-[18px] object-contain opacity-80 transition-opacity group-hover:opacity-100"
      />
      <span className="font-semibold text-white/70 underline decoration-white/20 underline-offset-2 transition-colors group-hover:text-white group-hover:decoration-[var(--color-orange-400)]">
        LAAMI LABS
      </span>
    </a>
  );
}
