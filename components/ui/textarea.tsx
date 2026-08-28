import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[120px] w-full rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-white px-3.5 py-2.5 text-sm text-[var(--color-ink)] shadow-xs transition-colors",
        "placeholder:text-muted-foreground",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-red-500 aria-invalid:ring-red-100",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
