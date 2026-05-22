import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(135deg, #50C878 0%, #0B6E4F 100%)",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 36 A11 11 0 0 1 22 15 A12 12 0 0 1 25.5 11 A12 12 0 0 1 38.5 11 A12 12 0 0 1 42 15 A11 11 0 0 1 46 36 L46 50 L18 50 Z"
            fill="white"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="18"
            y1="44"
            x2="46"
            y2="44"
            stroke="#0B6E4F"
            strokeOpacity="0.55"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
