import DetailPageLayout from "@/app/components/DetailPageLayout";

const cultureSections = [
  {
    title: "Growth",
    items: [
      "Work on real projects with meaningful technical ownership",
      "Keep building skills across engineering and business contexts",
      "Learn through practical delivery, not theory alone",
    ],
  },
  {
    title: "Collaboration",
    items: [
      "Join a team that values clear communication and support",
      "Work across shared goals with real ownership",
      "Contribute in an environment built around teamwork",
    ],
  },
  {
    title: "Impact",
    items: [
      "Build solutions that improve how businesses operate",
      "See the direct effect of your work in delivery outcomes",
      "Help shape scalable systems that clients rely on",
    ],
  },
] as const;

const openingSections = [
  {
    title: "Frontend Developer",
    items: [
      "Build responsive user experiences with React and Next.js",
      "Collaborate with design and engineering on polished interfaces",
      "Support accessible, maintainable frontend delivery",
    ],
  },
  {
    title: "Cloud Engineer",
    items: [
      "Design cloud infrastructure and deployment workflows",
      "Improve CI/CD reliability across environments",
      "Support secure and scalable platform operations",
    ],
  },
  {
    title: "QA Engineer",
    items: [
      "Strengthen release quality through automation and strategy",
      "Create reliable test coverage for critical user journeys",
      "Help teams ship faster with confidence",
    ],
  },
  {
    title: "Business Analyst",
    items: [
      "Translate business needs into clear product and engineering scope",
      "Support planning and prioritization with stakeholder context",
      "Help delivery teams stay aligned to business outcomes",
    ],
  },
] as const;

export default function CareersPage() {
  return (
    <DetailPageLayout
      kicker="Careers"
      title="Join Our Team"
      description="We are always looking for people who care about quality, ownership, and meaningful technology impact."
      sections={cultureSections}
      backHref="/"
      backLabel="Back to Home"
    >
      <section className="grid gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]">
            Current Openings
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Roles We&apos;re Hiring For</h2>
        </div>

        <div className="service-grid grid gap-5 md:grid-cols-2">
          {openingSections.map((opening, index) => (
            <article
              key={opening.title}
              className="service-card-wrap h-full"
              style={{ animationDelay: `${0.1 * (index + cultureSections.length)}s` }}
            >
              <div className="service-card group flex h-full flex-col rounded-2xl border border-blue-200 bg-white p-6 transition-all duration-300 ease-in-out">
                <h2 className="mb-4 text-xl font-bold text-[color:var(--brand-blue)] transition-colors duration-300">
                  {opening.title}
                </h2>
                <ul className="space-y-2 text-[color:var(--text-muted)]">
                  {opening.items.map((item) => (
                    <li key={item} className="list-inside list-disc pl-1 transition-colors duration-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="service-back">
        <div className="rounded-[30px] border border-blue-200 bg-gradient-to-br from-[#ffffff] via-[#f7faff] to-[#eef4ff] p-8 shadow-[0_14px_38px_-26px_rgba(31,86,179,0.35)]">
          <h2 className="text-2xl font-bold text-slate-900">Apply Now</h2>
          <p className="mt-3 max-w-2xl text-[color:var(--text-muted)]">
            Send your resume and the role you are interested in to{" "}
            <a className="font-semibold text-[color:var(--brand-blue)] hover:underline" href="mailto:itap@gmail.com">
              itap@gmail.com
            </a>{" "}
            and we will get in touch.
          </p>
          <a
            href="mailto:itap@gmail.com"
            className="brand-button mt-6 inline-block rounded-lg px-6 py-3 font-semibold transition hover:opacity-90"
          >
            Email Your Resume
          </a>
        </div>
      </section>
    </DetailPageLayout>
  );
}
