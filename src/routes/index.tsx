import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { profile, projects, skillGroups } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — ${profile.role} (${profile.scope})` },
      { name: "description", content: profile.tagline },
      { property: "og:title", content: `${profile.name} — ${profile.role}` },
      { property: "og:description", content: profile.tagline },
    ],
  }),
  component: Index,
});

function Index() {
  const selected = projects.slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="container-page pt-16 pb-28 md:pt-28 md:pb-40">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground reveal">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-foreground animate-ping opacity-40" />
            <span className="relative rounded-full bg-foreground h-2 w-2" />
          </span>
          {profile.available}
        </div>

        <h1 className="reveal mt-10 font-serif text-[clamp(2.75rem,9vw,9.5rem)] leading-[0.92] tracking-tight">
          {profile.role}
          <span className="block text-muted-foreground italic">({profile.scope})</span>
        </h1>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg leading-relaxed text-foreground/85 md:text-xl">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform hover:-translate-y-0.5"
              >
                View selected work
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:bg-accent"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Divider label="Selected work" />

      {/* Selected projects */}
      <section className="container-page py-20 md:py-32">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Projects"
            count={`${projects.length} total`}
            title={
              <>
                Building products
                <br />
                across the stack.
              </>
            }
          />
          <Link
            to="/projects"
            className="font-mono text-xs uppercase tracking-[0.22em] link-underline self-start md:self-end"
          >
            All projects →
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {selected.map((p, i) => (
            <div key={p.slug} className={i === 0 ? "md:col-span-2" : ""}>
              <ProjectCard project={p} large={i === 0} />
            </div>
          ))}
        </div>
      </section>

      <Divider label="Capabilities" />

      {/* Skills snapshot */}
      <section className="container-page py-20 md:py-32">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              A toolkit shaped by
              <br /> shipping real products.
            </>
          }
          description="No bars, no ratings — just the technologies I reach for when building."
        />
        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3 overflow-hidden rounded-2xl">
          {skillGroups.map((g) => (
            <div key={g.title} className="bg-surface p-8">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {g.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-serif text-xl">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="container-page">
      <div className="flex items-center gap-4 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        <span>{label}</span>
        <span className="flex-1 h-px bg-border" />
      </div>
    </div>
  );
}
