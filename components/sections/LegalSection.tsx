export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-[var(--color-line)] py-8 last:border-b-0">
      <h2 className="text-xl font-semibold text-[var(--color-green-950)]">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-[var(--color-ink)] [&_a]:text-[var(--color-orange-600)] [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-[var(--color-orange-500)] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
        {children}
      </div>
    </section>
  );
}
