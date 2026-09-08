import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Minimal, non-breaking security headers. Deliberately no Content-
  // Security-Policy here — a strict CSP would need careful tuning around
  // Google Maps' iframe, Google Fonts, and Resend's API calls, and
  // getting it wrong silently breaks functionality. That's a follow-up
  // task, not a "smallest possible change" for this pass.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
