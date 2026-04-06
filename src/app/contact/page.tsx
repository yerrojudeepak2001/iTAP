import Link from "next/link";

import DetailPageLayout from "@/app/components/DetailPageLayout";

const inquiryTypes = [
  {
    title: "Business inquiries",
    description: "For new projects, delivery discussions, service requests, and broader company conversations.",
    href: "mailto:itap@gmail.com?subject=Business%20Inquiry%20for%20iTAP",
  },
  {
    title: "Partnerships",
    description: "For collaboration opportunities, implementation partnerships, and strategic introductions.",
    href: "mailto:itap@gmail.com?subject=Partnership%20Inquiry%20for%20iTAP",
  },
  {
    title: "Careers",
    description: "For applications, hiring questions, and sharing your resume for current or future roles.",
    href: "mailto:itap@gmail.com?subject=Career%20Inquiry%20for%20iTAP",
  },
] as const;

const contactSteps = [
  {
    step: "01",
    title: "You reach out",
    description: "Send us a short summary of your inquiry, your context, and anything that will help us understand the request quickly.",
  },
  {
    step: "02",
    title: "We review it",
    description: "We look at the details, route the message to the right team, and make sure the next response is relevant to your need.",
  },
  {
    step: "03",
    title: "We follow up",
    description: "You hear back with the appropriate next step, whether that is a conversation, clarification, or a direct reply.",
  },
] as const;

export default function ContactPage() {
  return (
    <DetailPageLayout
      kicker="Contact"
      title="Choose the right way to reach us"
      description="Tell us what you are looking for and we will route your message to the team best equipped to help."
      sections={[]}
      heroActions={
        <>
          <a
            href="mailto:itap@gmail.com"
            className="brand-button rounded-xl px-6 py-3 font-semibold transition hover:opacity-90"
          >
            Email iTAP
          </a>
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-[color:var(--brand-blue)] bg-white px-6 py-3 font-semibold text-[color:var(--brand-blue)] transition hover:bg-[color:var(--brand-blue)] hover:text-white"
          >
            Back to Home
          </Link>
        </>
      }
    >
      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[30px] border border-slate-200 bg-white px-8 py-8 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.18)] xl:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]">
            Contact Information
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">Get in touch with iTAP</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[color:var(--text-muted)]">
            The best way to reach us is by email. Share a short summary of your inquiry and any
            relevant context, and we will route it to the right team.
          </p>

          <div className="mt-8 rounded-[26px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Primary email
            </p>
            <a
              href="mailto:itap@gmail.com"
              className="mt-3 inline-block text-3xl font-bold tracking-tight text-[color:var(--brand-blue)] hover:underline"
            >
              itap@gmail.com
            </a>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[color:var(--text-muted)]">
              Best for business inquiries, partnerships, and career conversations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                Short summary of your inquiry
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                Timeline or urgency
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                Relevant context
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-8 py-8 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.16)] xl:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]">
            Reach Out About
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">Common reasons people contact us</h2>
          <div className="mt-8 space-y-4">
            {inquiryTypes.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group block rounded-2xl border border-slate-200 bg-white px-6 py-5 transition hover:-translate-y-0.5 hover:border-[color:var(--brand-blue)]/25 hover:shadow-[0_18px_36px_-28px_rgba(31,86,179,0.28)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-1 text-sm font-semibold text-[color:var(--brand-blue)]">
                    Email
                  </span>
                </div>
                <div className="mt-4 h-1.5 w-14 rounded-full bg-[color:var(--brand-orange)] transition-all duration-300 group-hover:w-20" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white px-8 py-8 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.22)] xl:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]">
          What Happens Next
        </p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900">A simple contact process</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contactSteps.map((item) => (
            <article
              key={item.step}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 px-6 py-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]">
                {item.step}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </DetailPageLayout>
  );
}
