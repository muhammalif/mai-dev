import { createFileRoute, Link } from "@tanstack/react-router";
import { profile, skillGroups } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${profile.name}` },
      { name: "description", content: `${profile.name} is a ${profile.role} based in ${profile.location}.` },
      { property: "og:title", content: `About — ${profile.name}` },
      { property: "og:description", content: profile.tagline },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-page pt-16 pb-20 md:pt-28 md:pb-32">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          About — 01
        </p>
        <h1 className="mt-8 font-serif text-5xl leading-[0.98] sm:text-6xl md:text-8xl">
          Engineer first.
          <br />
          <span className="italic text-muted-foreground">Designer always.</span>
        </h1>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <dl className="space-y-6 font-mono text-[12px]">
              <Meta label="Name" value={profile.name} />
              <Meta label="Role" value={`${profile.role} (${profile.scope})`} />
              <Meta label="Based" value={profile.location} />
              <Meta label="Status" value="Open to collaborations" />
            </dl>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed text-foreground/85 md:text-xl">
            <p>
              I'm Muhammad Alif Islam — a fullstack engineer building across Web2, Web3
              and mobile. I design and ship products end-to-end, from the typography of a
              landing page to the smart contracts that settle them.
            </p>
            <p>
              My toolkit centers around React, Next.js, Node.js, PostgreSQL and Solidity,
              extended with AI-assisted workflows that compress iteration cycles without
              compromising craft.
            </p>
            <p>
              I care about clarity — in code, in product, and in the interfaces between
              the two. Whether it's an onchain social platform or a personal finance app,
              I treat every product as a piece of writing worth editing.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28 border-t border-border">
        <SectionHeading
          eyebrow="Disciplines"
          title={<>Six surfaces.<br /> One practice.</>}
        />
        <div className="mt-14 grid gap-px border border-border bg-border rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <div key={g.title} className="bg-surface p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl">{g.title}</h3>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 font-mono text-[12px] text-muted-foreground leading-relaxed">
                {g.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link to="/projects" className="font-mono text-xs uppercase tracking-[0.22em] link-underline">
            See the work →
          </Link>
        </div>
      </section>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-border pb-4">
      <dt className="uppercase tracking-[0.22em] text-muted-foreground text-[10px]">
        {label}
      </dt>
      <dd className="text-foreground text-[13px]">{value}</dd>
    </div>
  );
}