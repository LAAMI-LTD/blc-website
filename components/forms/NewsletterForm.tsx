"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { newsletterSchema, type NewsletterFormValues } from "@/lib/validation/newsletter";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { website: "" },
  });

  async function onSubmit(values: NewsletterFormValues) {
    setStatus("idle");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong.");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex items-center gap-2.5 text-sm font-medium text-white">
        <CheckCircle2 size={18} className="text-[var(--color-orange-400)]" />
        You&apos;re subscribed — thanks for staying in touch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full max-w-md">
      {/* Honeypot — hidden from real users, see lib/validation/newsletter.ts */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="newsletter-website">Leave this field empty</label>
        <input id="newsletter-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "newsletter-email-error" : undefined}
          className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 backdrop-blur-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-orange-400)] sm:flex-1"
          {...register("email")}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-orange-600)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-orange-700)] hover:shadow-[0_0_0_4px_rgba(162,83,10,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-60"
        >
          {isSubmitting ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <>
              Subscribe
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
      {errors.email && (
        <p id="newsletter-email-error" className="mt-2 text-xs text-orange-200">
          {errors.email.message}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="mt-2 text-xs text-orange-200">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
