import Image from "next/image";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import { TeamMember } from "@/types";

export function TeamPhoto({
  member,
  size = "md",
}: {
  member: TeamMember;
  size?: "md" | "lg";
}) {
  const dimensions = size === "lg" ? "h-32 w-32 sm:h-40 sm:w-40" : "h-20 w-20";

  if (member.hasPhoto && member.photoFile) {
    return (
      <Image
        src={`/team/${member.photoFile}`}
        alt={`${member.name}, ${member.title}`}
        width={size === "lg" ? 160 : 80}
        height={size === "lg" ? 160 : 80}
        className={cn("rounded-full object-cover", dimensions)}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-[var(--color-paper-dim)] text-muted-foreground",
        dimensions
      )}
      aria-hidden="true"
    >
      <User size={size === "lg" ? 48 : 28} strokeWidth={1.5} />
    </div>
  );
}
