import { Link } from "@tanstack/react-router";
import { profile } from "@/lib/portfolio-data";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-32">
      <div className="container-page py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Let's build
            </p>
            <h2 className="font-serif text-5xl md:text-7xl mt-4 leading-[0.95]">
              Have an idea worth
              <br /> shipping?
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-3 mt-8 text-base group">
              <span className="link-underline">{profile.email}</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
          <div className="md:col-span-5 grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Navigate
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/" className="hover:text-foreground text-muted-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-foreground text-muted-foreground">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-foreground text-muted-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/experience" className="hover:text-foreground text-muted-foreground">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-foreground text-muted-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                More
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="/muhammad-alif-islam-cv.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground text-muted-foreground"
                  >
                    Resume (PDF)
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/muhammalif"
                    className="hover:text-foreground text-muted-foreground"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/muhammad-alif-islam/"
                    className="hover:text-foreground text-muted-foreground"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/_emptyman"
                    className="hover:text-foreground text-muted-foreground"
                    target="_blank"
                    rel="noreferrer"
                  >
                    X ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-t border-border pt-8 font-mono text-[11px] text-muted-foreground">
          <span>
            © {year} {profile.name}. All rights reserved.
          </span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
