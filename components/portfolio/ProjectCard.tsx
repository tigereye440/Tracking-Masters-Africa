import Link from "next/link";
import type { Project } from "../../lib/data/portfolio";
import ImagePlaceholder from "../../components/ui/ImagePlaceholder";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="block rounded-lg border border-brand-steel/30 bg-white p-3 transition-colors hover:border-brand-maroon/40"
    >
      <ImagePlaceholder className="h-36 w-full" />
      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-brand-maroon">
        {project.service}
      </p>
      <p className="mt-1 text-sm font-medium text-brand-charcoal">{project.title}</p>
      <p className="mt-1 text-xs text-brand-steel">{project.summary}</p>
    </Link>
  );
}