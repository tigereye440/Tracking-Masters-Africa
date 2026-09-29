import Link from "next/link";
import Image from "next/image";
import { getServiceBySlug } from "@/lib/data/services";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

type ProjectCardProps = {
  slug: string;
  title: string;
  serviceSlug: string;
  summary: string;
  imageUrl: string | null;
};

export default function ProjectCard({ project }: { project: ProjectCardProps }) {
  const service = getServiceBySlug(project.serviceSlug);

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="block rounded-lg border border-brand-steel/30 bg-white p-3 transition-colors hover:border-brand-maroon/40"
    >
      {project.imageUrl ? (
        <div className="relative h-36 w-full overflow-hidden rounded-lg">
          <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
        </div>
      ) : (
        <ImagePlaceholder className="h-36 w-full" />
      )}
      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-brand-maroon">
        {service?.name ?? project.serviceSlug}
      </p>
      <p className="mt-1 text-sm font-medium text-brand-charcoal">{project.title}</p>
      <p className="mt-1 text-xs text-brand-steel">{project.summary}</p>
    </Link>
  );
}