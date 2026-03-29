import DetailPageLayout from "@/app/components/DetailPageLayout";

type CompanyDetail = {
  description: string;
  sections: readonly {
    title: string;
    items: readonly string[];
  }[];
};

const companyDetails: Record<string, CompanyDetail> = {
  "about-us": {
    description:
      "We are a technology consulting and engineering company focused on helping organizations modernize their digital ecosystems and build scalable, resilient technology platforms. Our work centers around cloud transformation, data engineering, AI-driven analytics, and modern application architectures that enable businesses to innovate faster and operate more efficiently. In an increasingly digital world, organizations must continuously evolve their technology foundations to remain competitive. We partner with enterprises to design, build, and optimize modern digital platforms that support operational agility, data-driven decision making, and long-term business growth. Our teams combine strong engineering expertise with modern technology practices to deliver solutions that are reliable, scalable, and future-ready.",
    sections: [
      {
        title: "Digital Transformation",
        items: [
          "Modernize legacy technology environments and transition organizations to scalable digital platforms.",
          "Design cloud-enabled architectures that support innovation, operational agility, and long-term technology growth.",
        ],
      },
      {
        title: "Engineering & Platform Development",
        items: [
          "Build high-performance technology platforms using modern engineering practices and cloud-native architectures.",
          "Implement automation, DevOps pipelines, and resilient infrastructure to ensure reliable and scalable systems.",
        ],
      },
      {
        title: "Data & Intelligence",
        items: [
          "Develop advanced data platforms that transform enterprise data into meaningful insights and strategic value.",
          "Enable AI-driven analytics and intelligent solutions that improve decision-making and operational efficiency.",
        ],
      },
    ],
  },
  leadership: {
    description:
      "Our leadership brings domain expertise, engineering execution, and practical product thinking to every engagement.",
    sections: [
      {
        title: "Leadership Focus",
        items: [
          "Technical direction grounded in delivery experience",
          "Business-aware planning that keeps outcomes central",
          "Guidance that balances quality, speed, and sustainability",
        ],
      },
      {
        title: "How We Lead",
        items: [
          "Hands-on support during planning and execution",
          "Strong emphasis on communication and accountability",
          "Partnership with teams to unblock progress quickly",
        ],
      },
      {
        title: "Client Benefit",
        items: [
          "Better alignment across business and engineering stakeholders",
          "Confidence in decisions for complex transformation work",
          "Reliable execution from experienced technical leadership",
        ],
      },
    ],
  },
  "why-itap": {
    description:
      "We combine technical depth with execution discipline to deliver measurable outcomes for businesses.",
    sections: [
      {
        title: "What Sets Us Apart",
        items: [
          "Business-first thinking applied to every delivery decision",
          "Modern engineering practices without unnecessary complexity",
          "A bias toward practical progress and measurable value",
        ],
      },
      {
        title: "Delivery Principles",
        items: [
          "Clear milestones, ownership, and communication throughout",
          "Flexible collaboration tailored to client team needs",
          "Continuous improvement after launch, not just before it",
        ],
      },
      {
        title: "Why It Matters",
        items: [
          "Less friction between strategy and implementation",
          "More confidence in timelines, quality, and outcomes",
          "Longer-term value from systems built to scale and adapt",
        ],
      },
    ],
  },
  partners: {
    description:
      "We partner with leaders across technology, cloud, and product ecosystems to extend capabilities quickly.",
    sections: [
      {
        title: "Partnership Approach",
        items: [
          "Technology partnerships chosen for practical delivery value",
          "Ecosystem alignment that speeds up implementation",
          "Flexible collaboration across cloud, platform, and tooling needs",
        ],
      },
      {
        title: "How It Helps",
        items: [
          "Faster access to proven tools and implementation patterns",
          "More confident platform decisions for client programs",
          "Broader capability coverage without extra complexity",
        ],
      },
      {
        title: "Client Outcomes",
        items: [
          "Quicker execution with less solution risk",
          "Better fit between platform choices and business goals",
          "A stronger delivery network behind each engagement",
        ],
      },
    ],
  },
  "case-studies": {
    description:
      "See how we have delivered measurable value through practical digital transformation and software initiatives.",
    sections: [
      {
        title: "Project Themes",
        items: [
          "Modernization of business-critical digital platforms",
          "Operational improvements through automation and integration",
          "Secure delivery across cloud, data, and product initiatives",
        ],
      },
      {
        title: "What We Measure",
        items: [
          "Delivery speed and implementation reliability",
          "Operational efficiency and reduced manual effort",
          "Business outcomes tied to platform improvements",
        ],
      },
      {
        title: "Why They Matter",
        items: [
          "Real examples of strategy turning into shipped outcomes",
          "Evidence of disciplined execution across complex work",
          "Confidence in the way we partner and deliver",
        ],
      },
    ],
  },
  blog: {
    description:
      "Read updates, ideas, and practical technology insights from our teams and industry experts.",
    sections: [
      {
        title: "What We Share",
        items: [
          "Practical lessons from engineering and delivery work",
          "Thoughts on cloud, data, product, and operations",
          "Guidance for businesses navigating modernization decisions",
        ],
      },
      {
        title: "Content Focus",
        items: [
          "Useful insights over abstract trend commentary",
          "Topics shaped by real implementation experience",
          "Clear takeaways for business and technical audiences",
        ],
      },
      {
        title: "Reader Value",
        items: [
          "More confidence in common technology decisions",
          "A better understanding of delivery tradeoffs",
          "Actionable ideas that support long-term digital growth",
        ],
      },
    ],
  },
};

function formatTitle(slug?: string) {
  if (!slug) {
    return "Company";
  }

  return slug
    .split("-")
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(" ");
}

export default async function CompanyDetailPage({
  params,
}: {
  params: { slug?: string } | Promise<{ slug?: string }>;
}) {
  const { slug = "" } = await params;
  const company = companyDetails[slug] ?? {
    description: "Explore this topic and request more information.",
    sections: [
      {
        title: "Overview",
        items: [
          "A clear snapshot of the topic and why it matters",
          "Business context aligned to current priorities",
          "Support for learning more or starting a conversation",
        ],
      },
      {
        title: "How We Help",
        items: [
          "Practical guidance shaped by delivery experience",
          "Clear communication and straightforward next steps",
          "Technology support connected to measurable outcomes",
        ],
      },
    ],
  };

  return (
    <DetailPageLayout
      kicker="Company"
      title={formatTitle(slug)}
      description={company.description}
      sections={company.sections}
      backHref="/#company"
      backLabel="Back to Company"
    />
  );
}
