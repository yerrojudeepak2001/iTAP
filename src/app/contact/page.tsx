import DetailPageLayout from "@/app/components/DetailPageLayout";

const contactSections = [
  {
    title: "Talk to Us",
    items: [
      "Share your business goals, product ideas, or delivery challenges",
      "Get guidance on services, solutions, and engagement options",
      "Start with a practical conversation about what you need next",
    ],
  },
  {
    title: "What to Expect",
    items: [
      "A quick response from our team after you reach out",
      "Clear next steps based on your business context",
      "A simple path from discussion to planning and delivery",
    ],
  },
  {
    title: "Reach Us",
    items: [
      "Email: itap@gmail.com",
      "Discussion topics: services, solutions, partnerships, careers",
      "Availability for new project and consulting conversations",
    ],
  },
] as const;

export default function ContactPage() {
  return (
    <DetailPageLayout
      kicker="Contact"
      title="Let's Start the Conversation"
      description="Reach out to discuss a project, explore a solution, or ask how we can support your next stage of growth."
      sections={contactSections}
      backHref="/"
      backLabel="Back to Home"
    >
      <section className="service-back">
        <div className="rounded-[30px] border border-blue-200 bg-gradient-to-br from-[#ffffff] via-[#f7faff] to-[#eef4ff] p-8 shadow-[0_14px_38px_-26px_rgba(31,86,179,0.35)]">
          <h2 className="text-2xl font-bold text-slate-900">Email iTAP</h2>
          <p className="mt-3 max-w-2xl text-[color:var(--text-muted)]">
            Send us a note at{" "}
            <a className="font-semibold text-[color:var(--brand-blue)] hover:underline" href="mailto:itap@gmail.com">
              itap@gmail.com
            </a>{" "}
            and we will get back to you.
          </p>
          <a
            href="mailto:itap@gmail.com"
            className="brand-button mt-6 inline-block rounded-lg px-6 py-3 font-semibold transition hover:opacity-90"
          >
            Email Us
          </a>
        </div>
      </section>
    </DetailPageLayout>
  );
}
