import DetailPageLayout from "@/app/components/DetailPageLayout";

type SolutionDetail = {
  description: string;
  sections: readonly {
    title: string;
    items: readonly string[];
  }[];
};

const solutionDetails: Record<string, SolutionDetail> = {
  "cloud-migration": {
    description:
      "Modern enterprises are rapidly adopting cloud technologies to improve scalability, agility, and operational efficiency. Our cloud migration services help organizations transition applications, data, and infrastructure from traditional environments to modern cloud platforms securely and efficiently. We follow a structured migration approach that minimizes disruption while enabling businesses to leverage the full potential of cloud technologies.",
    sections: [
      {
        title: "Cloud Strategy & Planning",
        items: [
          "Assess existing infrastructure, workloads, and dependencies to determine cloud readiness.",
          "Define a strategic migration roadmap aligned with business and technology objectives.",
        ],
      },
      {
        title: "Application & Infrastructure Migration",
        items: [
          "Migrate enterprise applications, databases, and servers with minimal operational downtime.",
          "Implement scalable cloud architectures that support performance and reliability.",
        ],
      },
      {
        title: "Hybrid & Multi-Cloud Enablement",
        items: [
          "Design hybrid environments that integrate on-premises infrastructure with cloud platforms.",
          "Enable multi-cloud strategies that improve flexibility, resilience, and workload distribution.",
        ],
      },
      {
        title: "Optimization & Governance",
        items: [
          "Continuously monitor and optimize cloud resources for performance and cost efficiency.",
          "Establish governance frameworks that ensure security, compliance, and operational control.",
        ],
      },
    ],
  },
  "data-engineering": {
    description:
      "Data engineering is the foundation of modern analytics and intelligent decision-making. Our data engineering services help organizations build scalable data platforms that collect, process, and transform data into valuable business insights. We design reliable data architectures that enable efficient data management, real-time processing, and seamless integration across enterprise systems.",
    sections: [
      {
        title: "Data Pipeline Architecture",
        items: [
          "Design and implement scalable data pipelines that enable seamless data ingestion from multiple sources.",
          "Build reliable workflows that ensure consistent data flow across analytics and operational systems.",
        ],
      },
      {
        title: "Data Platforms & Warehousing",
        items: [
          "Develop modern data lakes and data warehouses that support large-scale data storage and analytics.",
          "Enable efficient data access for reporting, business intelligence, and advanced analytics workloads.",
        ],
      },
      {
        title: "Data Processing & Transformation",
        items: [
          "Implement robust ETL and ELT processes that transform raw data into structured and analytics-ready formats.",
          "Ensure high-performance data processing for both batch and real-time workloads.",
        ],
      },
      {
        title: "Data Governance & Quality",
        items: [
          "Establish governance frameworks to maintain data accuracy, consistency, and compliance.",
          "Implement monitoring and validation mechanisms to ensure reliable and high-quality enterprise data.",
        ],
      },
    ],
  },
  "ai-and-analytics": {
    description:
      "Artificial Intelligence and advanced analytics enable organizations to transform complex data into meaningful insights. Our AI and analytics solutions help businesses improve decision-making, automate processes, and uncover new opportunities for innovation. By combining machine learning, predictive analytics, and modern data platforms, we help organizations build intelligent systems that support long-term business growth.",
    sections: [
      {
        title: "Intelligent Data Analysis",
        items: [
          "Analyze large volumes of data to identify patterns, trends, and business insights.",
          "Build advanced analytics solutions that support real-time and predictive decision-making.",
          "Enable organizations to transform raw data into actionable intelligence.",
        ],
      },
      {
        title: "Machine Learning & AI Solutions",
        items: [
          "Develop machine learning models that automate predictions and improve operational efficiency.",
          "Integrate AI capabilities into enterprise applications and digital platforms.",
          "Support intelligent automation across business processes.",
        ],
      },
      {
        title: "Business Intelligence & Insights",
        items: [
          "Design interactive dashboards that provide leadership teams with clear performance visibility.",
          "Enable data-driven decision making across departments and business units.",
        ],
      },
    ],
  },
  "devops-automation": {
    description:
      "DevOps automation helps organizations accelerate software delivery while maintaining reliability, security, and operational stability. By integrating development and operations practices, we enable faster release cycles, improved collaboration, and consistent deployment processes. Our DevOps solutions focus on automation, infrastructure scalability, and continuous delivery to support modern digital platforms.",
    sections: [
      {
        title: "Continuous Delivery & Deployment",
        items: [
          "Implement CI/CD pipelines that automate code integration, testing, and deployment.",
          "Enable faster and more reliable software releases across development environments.",
          "Improve collaboration between development, operations, and security teams.",
        ],
      },
      {
        title: "Infrastructure & Platform Automation",
        items: [
          "Automate infrastructure provisioning using Infrastructure as Code (IaC).",
          "Implement containerization and orchestration for scalable application deployment.",
          "Optimize infrastructure environments for performance, reliability, and operational efficiency.",
        ],
      },
    ],
  },
  "api-management": {
    description:
      "APIs are the foundation of modern digital ecosystems, enabling seamless communication between applications, platforms, and services. Our API management solutions help organizations design, secure, and scale APIs that power integrations, digital products, and partner ecosystems. We enable businesses to build reliable API infrastructures that support innovation while maintaining strong security and governance.",
    sections: [
      {
        title: "API Design & Architecture",
        items: [
          "Design scalable API architectures that support modern applications and microservices.",
          "Define clear API standards and documentation to ensure consistent development practices.",
        ],
      },
      {
        title: "API Security & Governance",
        items: [
          "Implement secure API gateways that manage authentication, authorization, and traffic control.",
          "Establish governance policies that ensure compliance and protect enterprise data.",
          "Monitor API usage to maintain reliability and operational stability.",
        ],
      },
      {
        title: "Integration & Lifecycle Management",
        items: [
          "Enable seamless integration between enterprise systems, cloud services, and third-party platforms.",
          "Manage the full API lifecycle including development, deployment, versioning, and monitoring.",
        ],
      },
    ],
  },
  "application-modernization": {
    description:
      "Legacy systems can limit innovation, scalability, and operational efficiency. Our application modernization services help organizations transform outdated applications into modern, cloud-ready platforms that support agility and long-term growth. We enable businesses to adopt modern architectures and development practices that improve performance, security, and maintainability.",
    sections: [
      {
        title: "Legacy System Transformation",
        items: [
          "Assess and modernize legacy applications to align with modern technology standards.",
        ],
      },
      {
        title: "Microservices Architecture",
        items: [
          "Redesign monolithic applications into scalable microservices-based architectures.",
          "Improve flexibility and independent service deployment.",
        ],
      },
      {
        title: "Cloud-Native Development",
        items: [
          "Build and modernize applications to fully leverage cloud scalability and resilience.",
        ],
      },
      {
        title: "Performance & Reliability",
        items: [
          "Enhance application performance, maintainability, and system stability through modern engineering practices.",
        ],
      },
    ],
  },
  "qa-automation": {
    description:
      "Delivering reliable and high-quality software requires a strong testing strategy. Our QA automation services help organizations improve software quality by integrating automated testing frameworks into modern development pipelines. By automating critical testing processes, we help teams accelerate releases, reduce manual effort, and ensure consistent application performance across environments.",
    sections: [
      {
        title: "Test Automation Strategy",
        items: [
          "Design scalable automation frameworks that support continuous testing.",
          "Identify the right tools and testing approaches for enterprise applications.",
        ],
      },
      {
        title: "Functional & Performance Testing",
        items: [
          "Automate functional and regression testing to validate application behavior.",
          "Perform load and performance testing to ensure system stability under real-world conditions.",
          "Continuously monitor application quality across development cycles.",
        ],
      },
      {
        title: "Continuous Quality Integration",
        items: [
          "Integrate automated testing into CI/CD pipelines for faster feedback loops.",
          "Provide reporting and insights that help teams maintain consistent software quality.",
        ],
      },
    ],
  },
  "observability-and-monitoring": {
    description:
      "Modern applications require continuous visibility into system performance, infrastructure health, and operational behavior. Our observability and monitoring solutions help organizations gain deep insights into their digital environments. By analyzing logs, metrics, and traces, we enable teams to detect issues proactively, maintain system reliability, and deliver consistent user experiences.",
    sections: [
      {
        title: "System & Infrastructure Monitoring",
        items: [
          "Monitor servers, cloud infrastructure, and network components to ensure system stability and availability.",
          "Track performance metrics to identify bottlenecks and optimize resource utilization.",
          "Maintain operational visibility across distributed and cloud-native environments.",
        ],
      },
      {
        title: "Application Performance & Incident Management",
        items: [
          "Implement application performance monitoring (APM) tools that provide real-time insights into application behavior.",
          "Centralize logs and operational data to quickly identify and troubleshoot issues.",
          "Enable proactive alerting and incident response to minimize downtime and service disruption.",
        ],
      },
    ],
  },
};

function formatTitle(slug?: string) {
  if (!slug) {
    return "Solution";
  }

  return slug
    .split("-")
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(" ");
}

export default async function SolutionDetailPage({
  params,
}: {
  params: { slug?: string } | Promise<{ slug?: string }>;
}) {
  const { slug = "" } = await params;
  const solution = solutionDetails[slug] ?? {
    description: "Explore this solution area and request a tailored discussion.",
    sections: [
      {
        title: "Approach",
        items: [
          "Discovery aligned with your current systems and goals",
          "Execution planning focused on practical delivery milestones",
          "Measured rollout and optimization after launch",
        ],
      },
      {
        title: "What You Gain",
        items: [
          "Clearer priorities for technical investment",
          "A repeatable path from strategy to implementation",
          "Better alignment between business and engineering teams",
        ],
      },
    ],
  };

  return (
    <DetailPageLayout
      kicker="Solutions"
      title={formatTitle(slug)}
      description={solution.description}
      sections={solution.sections}
      backHref="/#solutions"
      backLabel="Back to Solutions"
    />
  );
}
