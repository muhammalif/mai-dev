import { createFileRoute } from "@tanstack/react-router";
import { experiences } from "@/lib/portfolio-data";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Muhammad Alif Islam" },
      { name: "description", content: "Independent fullstack development across Web2, Web3, and mobile since 2022." },
      { property: "og:title", content: "Experience — Muhammad Alif Islam" },
      { property: "og:description", content: "Independent fullstack development across Web2, Web3, and mobile since 2022." },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <section className="container-page pt-16 pb-16 md:pt-28 md:pb-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Experience — 01
        </p>
        <h1 className="mt-8 font-serif text-5xl leading-[0.98] sm:text-6xl md:text-8xl">
          A practice in
          <br />
          <span className="italic text-muted-foreground">shipping.</span>
        </h1>
      </section>

      <section className="container-page pb-24">
        {experiences.map((e) => (
          <article
            key={e.company}
            className="grid gap-10 border-t border-border py-12 md:grid-cols-12 md:py-16"
          >
            <aside className="md:col-span-4 space-y-2 font-mono text-[12px]">
              <p className="uppercase tracking-[0.22em] text-muted-foreground text-[10px]">
                Period
              </p>
              <p className="text-foreground text-[13px]">{e.period}</p>
              <p className="uppercase tracking-[0.22em] text-muted-foreground text-[10px] pt-4">
                Location
              </p>
              <p className="text-foreground text-[13px]">{e.location}</p>
            </aside>
            <div className="md:col-span-8">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                {e.title}
              </h2>
              <p className="mt-3 font-mono text-sm text-muted-foreground">
                {e.company}
              </p>
              <ul className="mt-10 space-y-5">
                {e.bullets.map((b, i) => (
                  <li key={b} className="flex gap-5 border-b border-border pb-5 text-base md:text-lg leading-relaxed">
                    <span className="font-mono text-[11px] text-muted-foreground pt-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground/85">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}