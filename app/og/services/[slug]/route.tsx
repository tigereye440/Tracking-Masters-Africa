import { ImageResponse } from "next/og";
import { getServiceBySlug } from "@/lib/data/services";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

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
          {service?.name ?? "Tracking Masters Africa"}
        </div>
        <div style={{ color: "#8A8A82", fontSize: 28, marginTop: 16, maxWidth: 800, textAlign: "center" }}>
          {service?.shortDescription ?? ""}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}