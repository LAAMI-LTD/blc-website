import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validation/contact";
import { isRateLimited, getClientIp } from "@/lib/rate-limit";
import { contact as contactConfig, institution } from "@/config/institution";

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (isRateLimited(`contact:${ip}`)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { fullName, email, phone, subject, department, message, companyWebsite } =
    parsed.data;

  // Honeypot tripped — pretend success so the bot doesn't learn anything,
  // but never actually send the email.
  if (companyWebsite) {
    return NextResponse.json({ success: true });
  }

  const recipient = process.env.CONTACT_EMAIL || contactConfig.email;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Fail loudly server-side so this is caught in deployment, but don't
    // leak configuration details to the client.
    console.error(
      "RESEND_API_KEY is not set. Contact form submissions cannot be emailed. " +
        "Set RESEND_API_KEY and CONTACT_EMAIL in your environment (see .env.example)."
    );
    return NextResponse.json(
      { error: "The contact form is not fully configured yet. Please try WhatsApp or phone instead." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      // Resend requires a verified sending domain in production; this
      // default only works for testing until BBTI verifies a domain.
      from: `${institution.shortName} Website <onboarding@resend.dev>`,
      to: recipient,
      replyTo: email,
      subject: subject?.trim() ? `[Website Enquiry] ${subject}` : `[Website Enquiry] New message from ${fullName}`,
      text: [
        `New enquiry from the ${institution.name} website`,
        "",
        `Name: ${fullName}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        department ? `Department of interest: ${department}` : null,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your message. Please try again or contact us via WhatsApp." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form send failure:", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again or contact us via WhatsApp." },
      { status: 500 }
    );
  }
}
