import { notFound } from "next/navigation";
import { projects } from "../../../lib/data/portfolio";
import ImagePlaceholder from "../../../components/ui/ImagePlaceholder";
import CtaBand from "../../../components/home/CtaBand";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="mx-auto max-w-2xl px-6 py-14">
        <p className="text-xs font-medium uppercase tracking-wide text-brand-maroon">
          {project.service}
        </p>
        <h1 className="mt-1 text-2xl font-medium text-brand-charcoal">{project.title}</h1>
        <ImagePlaceholder className="mt-6 h-64 w-full" />
        <p className="mt-6 text-sm leading-relaxed text-brand-steel">{project.summary}</p>
      </section>

      <CtaBand />
    </>
  );
}