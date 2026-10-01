import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          backgroundColor: "#2A2A28",
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "#7A1E1E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#F5F3EE",
            fontSize: 36,
            fontWeight: 600,
            marginBottom: 32,
          }}
        >
          TMA
        </div>
        <div style={{ color: "#F5F3EE", fontSize: 52, fontWeight: 600 }}>
          Tracking Masters Africa
        </div>
        <div style={{ color: "#8A8A82", fontSize: 28, marginTop: 16 }}>
          Vehicle Tracking · CCTV · Electric Fencing · Solar Power
        </div>
      </div>
    ),
    size
  );
}