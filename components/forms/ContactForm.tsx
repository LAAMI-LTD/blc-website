"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { departments } from "@/data/departments";
import { institution } from "@/config/institution";
import { contactSchema, type ContactFormValues } from "@/lib/validation/contact";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { companyWebsite: "", consent: false },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong sending your message.");
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
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-10 text-center"
      >
        <CheckCircle2 size={40} className="text-[var(--color-orange-500)]" />
        <h3 className="text-xl font-semibold text-[var(--color-green-950)]">
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
      {/* Honeypot field — hidden from real users (visually and from screen
          readers), invisible in the tab order. Bots that auto-fill every
          field will trip this; the server silently discards the submission. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="companyWebsite">Leave this field empty</label>
        <input
          id="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("companyWebsite")}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="fullName">
            Full Name <span className="text-[var(--color-orange-600)]">*</span>
          </Label>
          <Input
            id="fullName"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-xs text-red-600">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="email">
            Email <span className="text-[var(--color-orange-600)]">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="text-xs text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="department">Department / Course of Interest</Label>
          <Controller
            control={control}
            name="department"
            render={({ field }) => (
              <Select value={field.value ?? ""} onValueChange={field.onChange}>
                <SelectTrigger id="department" aria-label="Department of interest">
                  <SelectValue placeholder="Select a department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((d) => (
                    <SelectItem key={d.slug} value={d.name}>
                      {d.name}
                    </SelectItem>
                  ))}
                  <SelectItem value="Not sure">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" type="text" {...register("subject")} />
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="message">
          Message <span className="text-[var(--color-orange-600)]">*</span>
        </Label>
        <Textarea
          id="message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Consent — required, never pre-checked. A distinct, explicit
          acknowledgement rather than assuming consent from form
          submission alone. */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 rounded border-[var(--color-line)] text-[var(--color-orange-600)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          {...register("consent")}
        />
        <label htmlFor="consent" className="text-sm text-[var(--color-ink)]">
          I agree to the{" "}
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-orange-600)] underline underline-offset-2 hover:text-[var(--color-orange-500)]"
          >
            Privacy Policy
          </a>{" "}
          and consent to {institution.shortName} contacting me about this enquiry.{" "}
          <span className="text-[var(--color-orange-600)]">*</span>
        </label>
      </div>
      {errors.consent && (
        <p id="consent-error" className="-mt-3 text-xs text-red-600">
          {errors.consent.message}
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          {errorMessage ?? "Something went wrong sending your message. Please try again."}
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
