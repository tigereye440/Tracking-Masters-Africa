import { prisma } from "@/lib/prisma";
import ProjectCard from "@/components/portfolio/ProjectCard";
import CtaBand from "@/components/home/CtaBand";
import { safeQuery } from "@/lib/safe-query";

export default async function PortfolioPage() {
  const projects = await safeQuery ( 
    () => prisma.project.findMany({
        where: { status: "PUBLISHED" },
        orderBy: { createdAt: "desc" },
    }),
    []
  );

  return (
    <>
      <section className="bg-brand-charcoal px-6 py-14 text-center">
        <p className="mb-2 text-xs uppercase tracking-wide text-brand-steel">Our work</p>
        <h1 className="mx-auto max-w-lg text-2xl font-medium text-brand-cream sm:text-3xl">
          Recent installations
        </h1>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        {projects.length === 0 ? (
          <p className="text-center text-sm text-brand-steel">No projects yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </section>

      <CtaBand />
    </>
  );
}