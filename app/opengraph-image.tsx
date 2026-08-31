import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { institution } from "@/config/institution";

export const runtime = "nodejs";
export const alt = `${institution.name} (${institution.shortName})`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logoData = readFileSync(join(process.cwd(), "public/logo/bbti-logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0c3d05 0%, #216d06 100%)",
          padding: 64,
        }}
      >
        <img src={logoSrc} width={220} height={272} alt="" style={{ objectFit: "contain" }} />
        <div
          style={{
            marginTop: 36,
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          {institution.name}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            fontStyle: "italic",
            color: "#f0954a",
            display: "flex",
          }}
        >
          {`\u201C${institution.tagline}\u201D`}
        </div>
      </div>
    ),
    { ...size }
  );
}
