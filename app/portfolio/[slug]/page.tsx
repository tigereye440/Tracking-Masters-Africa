import Image from "next/image";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getServiceBySlug } from "@/lib/data/services";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import CtaBand from "@/components/home/CtaBand";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let project;
  
  try {
    project = await prisma.project.findFirst({
      where: { slug, status: "PUBLISHED" },
    });
  } catch {
    return (
      <section className="mx-auto max-w-2xl px-6 py-14 text-center">
          <p className="text-sm text-brand-steel">
              This page iss temporarily unavailable. Please try again later.
          </p>
      </section>
  );
  }

  if (!project) {
    notFound();
  }

  const service = getServiceBySlug(project.serviceSlug);

  return (
    <>
      <section className="mx-auto max-w-2xl px-6 py-14">
        <p className="text-xs font-medium uppercase tracking-wide text-brand-maroon">
          {service?.name ?? project.serviceSlug}
        </p>
        <h1 className="mt-1 text-2xl font-medium text-brand-charcoal">{project.title}</h1>
        {project.imageUrl ? (
          <div className="relative mt-6 h-64 w-full overflow-hidden rounded-lg">
            <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
          </div>
        ) : (
          <ImagePlaceholder className="mt-6 h-64 w-full" />
        )}
        <p className="mt-6 text-sm leading-relaxed text-brand-steel">{project.summary}</p>
      </section>

      <CtaBand />
    </>
  );
}