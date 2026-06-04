import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Muhammad Alif Islam" },
      { name: "description", content: `Get in touch with ${profile.name}.` },
      { property: "og:title", content: "Contact — Muhammad Alif Islam" },
      { property: "og:description", content: profile.tagline },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "github.com/muhammalif", href: "https://github.com/muhammalif" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-alif-islam",
    href: "https://www.linkedin.com/in/muhammad-alif-islam/",
  },
  { label: "X", value: "@_emptyman", href: "https://x.com/_emptyman" },
];

function ContactPage() {
  return (
    <section className="container-page pt-16 pb-32 md:pt-28 md:pb-40">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        Contact — 01
      </p>
      <h1 className="mt-8 font-serif text-5xl leading-[0.98] sm:text-7xl md:text-[9rem]">
        Let's make
        <br />
        <span className="italic text-muted-foreground">something good.</span>
      </h1>

      <div className="mt-16 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-6 space-y-6 text-lg leading-relaxed text-foreground/85 md:text-xl">
          <p>
            I take on a small number of engagements each year — fullstack builds, Web3 product work,
            and mobile apps where craft and engineering matter.
          </p>
          <p>
            Send a note with what you're building, the rough scope, and your timeline. I'll respond
            within two business days.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm text-background transition-transform hover:-translate-y-0.5"
          >
            Write me an email
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Channels
          </p>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between py-5"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {c.label}
                  </span>
                  <span className="font-serif text-xl md:text-2xl group-hover:italic transition-all">
                    {c.value}{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
