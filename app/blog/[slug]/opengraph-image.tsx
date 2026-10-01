import { ImageResponse } from "next/og";
import { prisma } from "@/lib/prisma";
import { getServiceBySlug } from "@/lib/data/services";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.blogPost.findFirst({ where: { slug } });
  const service = post ? getServiceBySlug(post.serviceSlug) : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#2A2A28",
        }}
      >
        {post?.imageUrl && (
          <img
            src={post.imageUrl}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.5,
            }}
          />
        )}

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
            padding: 64,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#F5F3EE",
              fontSize: 24,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: "#7A1E1E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              TMA
            </div>
            {service?.name ?? "Blog"}
          </div>
          <div style={{ display: "flex", color: "#F5F3EE", fontSize: 48, fontWeight: 600, maxWidth: 900 }}>
            {post?.title ?? "Tracking Masters Africa"}
          </div>
        </div>
      </div>
    ),
    size
  );
}