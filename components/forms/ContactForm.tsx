"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { courses } from "@/data/courses";

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  subject: z.string().optional(),
  course: z.string().optional(),
  message: z.string().min(10, "Please add a short message (10+ characters)."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  // Mock submission — replace with a real API call (e.g. POST /api/contacts)
  // once a backend is connected.
  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          if (values.email.includes("@")) resolve(true);
          else reject(new Error("Invalid submission"));
        }, 900)
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-10 text-center"
      >
        <CheckCircle2 size={40} className="text-[var(--color-gold-500)]" />
        <h3 className="text-xl font-semibold text-[var(--color-navy-950)]">
          Message sent
        </h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out — a member of our team will get back to you shortly.
        </p>
        <Button variant="ghost" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid grid-cols-1 gap-5 rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-6 md:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="text-sm font-medium text-[var(--color-ink)]">
            Full Name <span className="text-[var(--color-gold-600)]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className="mt-1.5 w-full rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-white px-3.5 py-2.5 text-sm focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-red-600">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-[var(--color-ink)]">
            Email <span className="text-[var(--color-gold-600)]">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="mt-1.5 w-full rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-white px-3.5 py-2.5 text-sm focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-[var(--color-ink)]">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1.5 w-full rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-white px-3.5 py-2.5 text-sm focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            {...register("phone")}
          />
        </div>

        <div>
          <label htmlFor="course" className="text-sm font-medium text-[var(--color-ink)]">
            Language of Interest
          </label>
          <select
            id="course"
            className="mt-1.5 w-full rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-white px-3.5 py-2.5 text-sm focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            {...register("course")}
          >
            <option value="">Select a language</option>
            {courses.map((c) => (
              <option key={c.slug} value={c.language}>
                {c.language}
              </option>
            ))}
            <option value="Not sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-medium text-[var(--color-ink)]">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className="mt-1.5 w-full rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-white px-3.5 py-2.5 text-sm focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          {...register("subject")}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-[var(--color-ink)]">
          Message <span className="text-[var(--color-gold-600)]">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className="mt-1.5 w-full rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-white px-3.5 py-2.5 text-sm focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong sending your message. Please try again.
        </p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-fit">
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}