import { prisma } from "@/lib/prisma";

export default async function AdminLeadsPage() {
  let leads = [];
  try {
    leads = await prisma.contactLead.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error(error);
    leads = []
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="text-2xl font-medium text-brand-charcoal">Contact leads</h1>

      {leads.length === 0 && (
        <p className="mt-4 text-sm text-brand-steel">No leads yet.</p>
      )}

      <div className="mt-6 flex flex-col gap-3">
        {leads.map((lead) => (
          <div key={lead.id} className="rounded-lg border border-brand-steel/30 bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-brand-charcoal">{lead.name}</p>
              <p className="text-xs text-brand-steel">
                {lead.createdAt.toLocaleDateString()}
              </p>
            </div>
            <p className="mt-1 text-xs text-brand-steel">
              {lead.phone}
              {lead.service && ` · ${lead.service}`}
            </p>
            <p className="mt-2 text-sm text-brand-charcoal">{lead.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}