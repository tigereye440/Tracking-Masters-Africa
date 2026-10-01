import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { services } from "@/lib/data/services";
import { devices } from "@/lib/data/vehicle-tracking";
import { safeQuery } from "@/lib/safe-query";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/about`, priority: 0.7 },
    { url: `${baseUrl}/contact`, priority: 0.8 },
    { url: `${baseUrl}/faq`, priority: 0.6 },
    { url: `${baseUrl}/pricing`, priority: 0.7 },
    { url: `${baseUrl}/portfolio`, priority: 0.7 },
    { url: `${baseUrl}/blog`, priority: 0.6 },
    { url: `${baseUrl}/testimonials`, priority: 0.5 },
    { url: `${baseUrl}/catalogue`, priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    priority: 0.9,
  }));

  const devicePages: MetadataRoute.Sitemap = devices.map((device) => ({
    url: `${baseUrl}/services/vehicle-tracking/${device.id}`,
    priority: 0.6,
  }));

  const [blogPosts, projects] = await Promise.all([
    safeQuery(
      () => prisma.blogPost.findMany({
        where: { status: "PUBLISHED" },
        select: { slug: true, createdAt: true },
      }),
      []
    ),
    safeQuery(
      () => prisma.project.findMany({
        where: { status: "PUBLISHED" },
        select: { slug: true, createdAt: true },
      }),
      []
    ),
  ]);

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.createdAt,
    priority: 0.5,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: project.createdAt,
    priority: 0.5,
  }));

  return [...staticPages, ...servicePages, ...devicePages, ...blogPages, ...projectPages];
}