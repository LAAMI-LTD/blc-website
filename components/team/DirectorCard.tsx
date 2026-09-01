import { TeamPhoto } from "@/components/team/TeamPhoto";
import { TeamMember } from "@/types";

export function DirectorCard({ director }: { director: TeamMember }) {
  return (
    <div className="flex flex-col items-center gap-6 rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-gradient-to-br from-[var(--color-green-950)] to-[var(--color-green-800)] px-8 py-12 text-center text-white sm:flex-row sm:items-center sm:gap-10 sm:px-12 sm:text-left">
      <TeamPhoto member={director} size="lg" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-orange-400)]">
          Director
        </p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">{director.name}</h2>
        {director.bio ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            {director.bio}
          </p>
        ) : (
          <p className="mt-4 text-sm italic text-white/50">
            Full biography to be added upon institutional approval.
          </p>
        )}
      </div>
    </div>
  );
}
