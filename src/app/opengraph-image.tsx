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
            "linear-gradient(135deg, #0d9488 0%, #047857 50%, #022c22 100%)",
          color: "white",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 48,
            opacity: 0.9,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              color: "#047857",
              fontWeight: 700,
            }}
          >
            R
          </div>
          <span style={{ fontSize: 32, fontWeight: 600 }}>RecipeBuilder</span>
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
