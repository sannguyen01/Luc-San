import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          backgroundColor: "#F5F2EC",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Subtle top rule */}
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 80,
            right: 80,
            height: 1,
            backgroundColor: "#D4CEC5",
          }}
        />

        {/* Brand name */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: 72,
            fontWeight: 300,
            letterSpacing: "0.25em",
            color: "#111111",
            marginBottom: 24,
            textTransform: "uppercase",
          }}
        >
          LỤC SAN
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 18,
            fontWeight: 300,
            letterSpacing: "0.15em",
            color: "#8C7A6B",
            textTransform: "uppercase",
          }}
        >
          Material Infrastructure
        </div>

        {/* Subtle bottom rule */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            right: 80,
            height: 1,
            backgroundColor: "#D4CEC5",
          }}
        />

        {/* URL hint */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 80,
            fontFamily: "sans-serif",
            fontSize: 13,
            letterSpacing: "0.1em",
            color: "#C0B8AE",
          }}
        >
          lucsan.com
        </div>
      </div>
    ),
    { ...size }
  );
}
