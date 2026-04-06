import DetailPageLayout from "@/app/components/DetailPageLayout";

const cultureSections = [
  {
    title: "Meaningful work",
    items: [
      "Contribute to real products, platforms, and delivery work with visible business impact",
      "Take ownership of work that moves from planning into execution",
      "Build experience through practical problem-solving, not placeholder tasks",
    ],
  },
  {
    title: "Professional growth",
    items: [
      "Strengthen your skills across engineering, product thinking, and delivery execution",
      "Work in an environment where learning comes through responsibility and real outcomes",
      "Keep growing with exposure to modern platforms, client work, and internal initiatives",
    ],
  },
  {
    title: "Collaborative culture",
    items: [
      "Work with teams that value clarity, accountability, and consistent communication",
      "Collaborate across business and technical priorities without unnecessary hierarchy",
      "Help shape systems, products, and delivery practices with shared ownership",
    ],
  },
] as const;

const openingSections = [
  {
    title: "Frontend Engineer",
    team: "Product Engineering",
    items: [
      "Build responsive interfaces with React and Next.js",
      "Work with design and engineering to deliver polished product experiences",
      "Support accessible, maintainable, and scalable frontend architecture",
    ],
  },
  {
    title: "Cloud Engineer",
    team: "Cloud & Platform",
    items: [
      "Design cloud infrastructure and deployment workflows",
      "Improve CI/CD reliability across environments",
      "Support secure and scalable platform operations",
    ],
  },
  {
    title: "Java Backend Engineer",
    team: "Backend Platforms",
    items: [
      "Design and build scalable backend services using Java and Spring Boot",
      "Develop APIs, integrations, and service layers for enterprise platforms",
      "Support performance, security, and reliability across backend systems",
    ],
  },
  {
    title: "Full Stack Engineer",
    team: "Product Engineering",
    items: [
      "Build end-to-end product features across frontend, backend, and data workflows",
      "Work with React, modern APIs, and cloud-native application architecture",
      "Contribute to AI-enabled product experiences where automation and intelligence add value",
    ],
  },
  {
    title: "Python Engineer",
    team: "Data & Intelligent Systems",
    items: [
      "Develop backend services, data workflows, and automation tools with Python",
      "Support analytics, integration, and platform use cases across internal and client systems",
      "Contribute to AI and ML-powered solutions including data pipelines and model-serving workflows",
    ],
  },
  {
    title: "QA Engineer",
    team: "Quality Engineering",
    items: [
      "Improve release quality through thoughtful automation and test strategy",
      "Build reliable coverage around critical product and platform journeys",
      "Help teams ship with confidence through strong quality practices",
    ],
  },
  {
    title: "SRE / DevOps Engineer",
    team: "Reliability & Operations",
    items: [
      "Improve system reliability, deployment workflows, observability, and incident response readiness",
      "Build CI/CD pipelines, infrastructure automation, and resilient cloud environments",
      "Support AI-ready platform operations including scalable runtime, monitoring, and deployment practices",
    ],
  },
  {
    title: "Business Analyst",
    team: "Delivery & Operations",
    items: [
      "Translate business priorities into clear product and engineering scope",
      "Support planning, prioritization, and delivery alignment across stakeholders",
      "Help teams stay focused on measurable business outcomes",
    ],
  },
] as const;

export default function CareersPage() {
  return (
    <DetailPageLayout
      kicker="Careers"
      title="Careers at iTAP"
      description="Explore current opportunities across engineering, platform, and delivery teams. We are hiring for roles where you can contribute to real products, platforms, and business-critical work."
      sections={[]}
      backHref="/"
      backLabel="Back to Home"
    >
      <section
        id="open-positions"
        className="rounded-[28px] border border-blue-100 bg-white/92 p-7 shadow-[0_18px_40px_-30px_rgba(31,86,179,0.24)] md:p-8"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]">
            Open Positions
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Roles currently open across our teams</h2>
          <p className="mt-3 max-w-2xl text-[color:var(--text-muted)]">
            We are actively hiring across product engineering, platform, quality, data, and delivery functions.
          </p>
        </div>

        <div className="mt-7 grid gap-4">
          {openingSections.map((opening, index) => (
            <article
              key={opening.title}
              className="h-full"
              style={{ animationDelay: `${0.08 * index}s` }}
            >
              <div className="group grid gap-5 rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-[0_10px_24px_-22px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--brand-blue)]/30 hover:shadow-[0_16px_34px_-24px_rgba(31,86,179,0.26)] md:grid-cols-[1.1fr_1.8fr_auto] md:items-start md:gap-6">
                <div>
                  <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]/85 transition-colors duration-300">
                    {opening.team}
                  </p>
                  <h2 className="text-xl font-bold text-slate-900 transition-colors duration-300">
                    {opening.title}
                  </h2>
                </div>

                <ul className="space-y-2 text-sm text-[color:var(--text-muted)]">
                  {opening.items.map((item) => (
                    <li key={item} className="list-inside list-disc pl-1 transition-colors duration-300">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex md:justify-end">
                  <a
                    href={`mailto:itap@gmail.com?subject=Application%20for%20${encodeURIComponent(opening.title)}`}
                    className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[color:var(--brand-blue)] hover:text-[color:var(--brand-blue)]"
                  >
                    Apply
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]">
            Working Here
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">A place to do meaningful work and keep growing</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {cultureSections.map((section, index) => (
            <article
              key={section.title}
              className="h-full"
              style={{ animationDelay: `${0.1 * (index + openingSections.length)}s` }}
            >
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_24px_-22px_rgba(15,23,42,0.18)]">
                <h2 className="mb-4 text-xl font-bold text-slate-900">
                  {section.title}
                </h2>
                <ul className="space-y-2 text-sm text-[color:var(--text-muted)]">
                  {section.items.map((item) => (
                    <li key={item} className="list-inside list-disc pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </DetailPageLayout>
  );
}
