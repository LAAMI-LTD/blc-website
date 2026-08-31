import { NextRequest } from "next/server";

// ---------------------------------------------------------------------------
// Basic in-memory rate limiting, shared across API routes.
//
// NOTE: this only protects a single warm serverless instance — on Vercel,
// concurrent/cold-started instances don't share this Map, so it's a
// best-effort deterrent, not a hard guarantee. For stronger protection in
// production, back this with a shared store (e.g. Upstash Redis / Vercel KV)
// and/or put forms behind a CAPTCHA (e.g. Cloudflare Turnstile).
// ---------------------------------------------------------------------------

const requestLog = new Map<string, number[]>();

export function isRateLimited(
  key: string,
  { windowMs = 60_000, maxRequests = 5 }: { windowMs?: number; maxRequests?: number } = {}
): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(key) ?? []).filter((t) => now - t < windowMs);
  timestamps.push(now);
  requestLog.set(key, timestamps);
  return timestamps.length > maxRequests;
}

export function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}
