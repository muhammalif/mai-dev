import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/project-card";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Muhammad Alif Islam" },
      { name: "description", content: "Selected fullstack, Web3, and mobile projects." },
      { property: "og:title", content: "Projects — Muhammad Alif Islam" },
      { property: "og:description", content: "Selected fullstack, Web3, and mobile projects." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <section className="container-page pt-16 pb-16 md:pt-28 md:pb-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Projects — {projects.length}
        </p>
        <h1 className="mt-8 font-serif text-5xl leading-[0.98] sm:text-6xl md:text-8xl">
          Selected work,
          <br />
          <span className="italic text-muted-foreground">2023 — 2025.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-base text-muted-foreground md:text-lg">
          A short, opinionated list of products spanning onchain social, DeFi, creator
          economy, education, gaming, and mobile finance.
        </p>
      </section>

      <section className="container-page py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={p.slug} className={i % 5 === 0 ? "md:col-span-2" : ""}>
              <ProjectCard project={p} large={i % 5 === 0} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}