import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "RecipeBuilder — Food Labeling & Recipe Management Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient(135deg, #50C878 0%, #0B6E4F 60%, #043B2A 100%)",
          color: "white",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 48,
            opacity: 0.95,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 36 A11 11 0 0 1 22 15 A12 12 0 0 1 25.5 11 A12 12 0 0 1 38.5 11 A12 12 0 0 1 42 15 A11 11 0 0 1 46 36 L46 50 L18 50 Z"
                fill="#0B6E4F"
                stroke="#0B6E4F"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="18"
                y1="44"
                x2="46"
                y2="44"
                stroke="white"
                strokeOpacity="0.7"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span style={{ fontSize: 34, fontWeight: 700 }}>RecipeBuilder</span>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 900,
            display: "flex",
          }}
        >
          Food Labeling & Recipe Management for Food Businesses
        </div>
        <div
          style={{
            fontSize: 26,
            opacity: 0.85,
            marginTop: 40,
            textAlign: "center",
            display: "flex",
          }}
        >
          FDA · EU · GCC/SFDA compliant · 40+ languages · From $29/mo
        </div>
        <div
          style={{
            fontSize: 22,
            opacity: 0.7,
            marginTop: 56,
            display: "flex",
          }}
        >
          recipebuilder.co
        </div>
      </div>
    ),
    { ...size }
  );
}
