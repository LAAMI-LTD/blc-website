import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { TeamPhoto } from "@/components/team/TeamPhoto";
import { TeamMember } from "@/types";
import { getDepartmentBySlug } from "@/data/departments";

export function HodCard({ member }: { member: TeamMember }) {
  const department =
    member.department !== "leadership" ? getDepartmentBySlug(member.department) : undefined;

  return (
    <Card className="flex flex-col items-start">
      <TeamPhoto member={member} />
      <h3 className="mt-4 text-lg font-semibold text-[var(--color-green-950)]">
        {member.name}
      </h3>
      <p className="text-sm text-[var(--color-orange-600)]">{member.title}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
      {department && (
        <div className="mt-4">
          <Badge>{department.name}</Badge>
        </div>
      )}
    </Card>
  );
}
