import Link from "next/link";
import { Languages, Monitor, Briefcase, HeartPulse, Sparkles, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Department } from "@/types";

const icons = { Languages, Monitor, Briefcase, HeartPulse, Sparkles };

export function DepartmentCard({ department }: { department: Department }) {
  const Icon = icons[department.iconName];

  return (
    <Card className="flex flex-col">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-green-900)] text-[var(--color-orange-400)]">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold text-[var(--color-green-950)]">
        {department.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {department.shortDescription}
      </p>
      <Link
        href={`/departments/${department.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-orange-600)] transition-all hover:gap-2.5"
      >
        View {department.name} courses
        <ArrowRight size={16} />
      </Link>
    </Card>
  );
}
