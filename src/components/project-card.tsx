import type { Project } from "@/lib/portfolio-data";

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-foreground/30 ${
        large ? "p-8 md:p-12" : "p-7 md:p-9"
      }`}
    >
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>{project.index} / {project.category}</span>
        <span>{project.year}</span>
      </div>

      <h3
        className={`mt-10 font-serif leading-[1] ${
          large ? "text-6xl md:text-8xl" : "text-5xl md:text-6xl"
        }`}
      >
        {project.name}
      </h3>

      <p className="mt-3 text-sm text-muted-foreground font-mono">
        {project.role}
      </p>

      <p
        className={`mt-8 text-muted-foreground leading-relaxed ${
          large ? "md:text-lg max-w-2xl" : "text-[15px]"
        }`}
      >
        {project.description}
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-3 py-1 text-[11px] font-mono text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-foreground transition-transform duration-500 group-hover:scale-x-100"
      />
    </article>
  );
}