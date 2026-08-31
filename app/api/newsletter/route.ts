import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { newsletterSchema } from "@/lib/validation/newsletter";
import { isRateLimited, getClientIp } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (isRateLimited(`newsletter:${ip}`, { maxRequests: 5 })) {
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

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  const { email, website } = parsed.data;

  // Honeypot tripped — pretend success, never actually subscribe the bot.
  if (website) {
    return NextResponse.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.error(
      "RESEND_API_KEY or RESEND_AUDIENCE_ID is not set. Newsletter signups cannot be stored. " +
        "Create an Audience in Resend and set both variables (see .env.example)."
    );
    return NextResponse.json(
      { error: "Newsletter signup isn't fully configured yet. Please try again later." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    if (error) {
      // Resend returns an error for duplicate emails on some plans — treat
      // that as a success from the user's point of view, since they're
      // already subscribed either way.
      const alreadySubscribed = /already exists|duplicate/i.test(error.message ?? "");
      if (alreadySubscribed) {
        return NextResponse.json({ success: true });
      }
      console.error("Resend contacts.create error:", error);
      return NextResponse.json(
        { error: "We couldn't subscribe that email right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter signup failure:", err);
    return NextResponse.json(
      { error: "We couldn't subscribe that email right now. Please try again." },
      { status: 500 }
    );
  }
}
