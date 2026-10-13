import { ImageResponse } from "next/og";

export const alt = "Tojiwan — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#f9f9f9",
          border: "12px solid #000",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            background: "#0ea5e9",
            border: "6px solid #000",
            padding: "8px 20px",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          Tojiwan
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 24 }}>
          Full-Stack Developer
        </div>
        <div style={{ fontSize: 30, marginTop: 12 }}>
          Next.js / TypeScript / Tailwind — placeholder
        </div>
      </div>
    ),
    { ...size }
  );
}
