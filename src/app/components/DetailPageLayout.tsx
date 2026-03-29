import Link from "next/link";

import type { ReactNode } from "react";

type DetailSection = {
  title: string;
  items: readonly string[];
};

type DetailPageLayoutProps = {
  kicker: string;
  title: string;
  subtitle?: string;
  description: string;
  sections?: readonly DetailSection[];
  backHref?: string;
  backLabel?: string;
  children?: ReactNode;
  boxedHero?: boolean;
  shadedHero?: boolean;
  pageShade?: string;
};

const defaultDetailPageShade = "linear-gradient(135deg, #f7faff 0%, #d7e6ff 44%, #c5d8fb 100%)";

export default function DetailPageLayout({
  kicker,
  title,
  subtitle,
  description,
  sections = [],
  backHref,
  backLabel,
  children,
  boxedHero = false,
  shadedHero = false,
  pageShade = defaultDetailPageShade,
}: DetailPageLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-900" style={{ background: pageShade }}>
      {pageShade ? (
        <>
          <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[color:var(--brand-orange)]/28 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-8 h-72 w-72 rounded-full bg-[color:var(--brand-blue)]/28 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_50%_100%,rgba(31,86,179,0.24),transparent_72%)]" />
        </>
      ) : null}
      <section className="relative mx-auto grid max-w-6xl gap-7 overflow-hidden px-6 pt-20 pb-10">
        <header
          className={`service-hero relative ${
            boxedHero
              ? "overflow-hidden rounded-[30px] border border-blue-200 bg-gradient-to-br from-[#ffffff] via-[#f4f8ff] to-[#ecf3ff] p-7 md:p-10"
              : "overflow-hidden py-4"
          }`}
        >
          {shadedHero ? (
            <>
              <div className="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full bg-[color:var(--brand-orange)]/20 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 -bottom-16 h-56 w-56 rounded-full bg-[color:var(--brand-blue)]/15 blur-3xl" />
            </>
          ) : null}
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]">
            {kicker}
          </p>
          <h1 className="relative mt-3 text-4xl font-bold md:text-6xl">{title}</h1>
          {subtitle ? (
            <p className="relative mt-3 text-base font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]">
              {subtitle}
            </p>
          ) : null}
          <p className="relative mt-5 max-w-3xl text-lg leading-relaxed text-[color:var(--text-muted)]">
            {description}
          </p>
        </header>

        {sections.length > 0 ? (
          <section className="service-grid grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sections.map((section, index) => (
              <article
                key={section.title}
                className="service-card-wrap h-full"
                style={{ animationDelay: `${0.09 * index}s` }}
              >
                <div className="service-card group flex h-full flex-col cursor-pointer rounded-2xl border border-blue-200 bg-white p-6 transition-all duration-300 ease-in-out">
                  <h2 className="mb-4 text-xl font-bold text-[color:var(--brand-blue)] transition-colors duration-300">
                    {section.title}
                  </h2>
                  <ul className="space-y-2 text-[color:var(--text-muted)]">
                    {section.items.map((item) => (
                      <li key={item} className="list-inside list-disc pl-1 transition-colors duration-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </section>
        ) : null}

        {children}

        {backHref && backLabel ? (
          <div className="flex service-back">
            <Link href={backHref} className="brand-button rounded-lg px-6 py-3 font-semibold transition hover:opacity-90">
              {backLabel}
            </Link>
          </div>
        ) : null}
      </section>
    </main>
  );
}
