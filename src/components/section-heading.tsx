import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  count,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  count?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-6 ${
        align === "center" ? "items-center text-center" : ""
      }`}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span className="h-px w-8 bg-border" />
          <span>{eyebrow}</span>
          {count && <span className="text-muted-foreground/70">— {count}</span>}
        </div>
      )}
      <h2 className="font-serif text-4xl leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}