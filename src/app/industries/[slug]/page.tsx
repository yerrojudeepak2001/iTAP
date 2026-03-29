import DetailPageLayout from "@/app/components/DetailPageLayout";

type IndustryDetail = {
  description: string;
  sections: readonly {
    title: string;
    items: readonly string[];
  }[];
};

const industryDetails: Record<string, IndustryDetail> = {
  automotive: {
    description:
      "The automotive industry is rapidly evolving with advancements in digital technologies, connected vehicles, and smart manufacturing systems. We help automotive organizations modernize their technology platforms to improve production efficiency, enable intelligent vehicle ecosystems, and support data-driven innovation. Our solutions enable automotive companies to integrate digital technologies across manufacturing, supply chain operations, and connected vehicle platforms.",
    sections: [
      {
        title: "Smart Manufacturing Systems",
        items: [
          "Implement digital manufacturing platforms that enable real-time monitoring of production processes.",
          "Integrate automation technologies that improve operational efficiency and manufacturing performance.",
        ],
      },
      {
        title: "Connected Vehicle Technologies",
        items: [
          "Enable digital platforms that support connected vehicle ecosystems and intelligent mobility solutions.",
          "Integrate vehicle data systems that provide insights into performance, maintenance, and operations.",
        ],
      },
    ],
  },
  "advertising-and-event-management": {
    description:
      "Advertising and event management organizations rely on technology to manage campaigns, audiences, and large-scale event operations efficiently. We help marketing agencies and event companies build modern digital platforms that streamline campaign management, improve audience engagement, and support seamless event execution. Our solutions enable organizations to leverage data-driven insights, automate marketing workflows, and deliver impactful digital and physical event experiences.",
    sections: [
      {
        title: "Campaign & Marketing Platforms",
        items: [
          "Implement digital platforms that manage advertising campaigns, audience targeting, and marketing performance.",
          "Enable analytics tools that track campaign effectiveness and customer engagement.",
        ],
      },
      {
        title: "Event Technology Solutions",
        items: [
          "Develop systems that support event planning, registration, and attendee management.",
          "Enable digital tools that enhance event coordination and audience interaction.",
        ],
      },
    ],
  },
  retail: {
    description:
      "The retail industry is rapidly evolving with the growth of digital commerce, omnichannel experiences, and data-driven customer engagement. We help retailers modernize their technology platforms to improve customer experiences, optimize operations, and drive business growth. Our solutions enable retailers to integrate digital channels, leverage advanced analytics, and build scalable technology infrastructures that support modern retail ecosystems.",
    sections: [
      {
        title: "Digital Commerce Platforms",
        items: [
          "Build scalable e-commerce platforms that support seamless online and in-store experiences.",
          "Enable omnichannel strategies that connect mobile, web, and physical retail environments.",
        ],
      },
      {
        title: "Customer Insights & Personalization",
        items: [
          "Use analytics and AI to understand customer behavior and preferences.",
          "Deliver personalized shopping experiences that improve customer engagement and retention.",
        ],
      },
      {
        title: "Retail Operations Optimization",
        items: [
          "Implement technology solutions that improve inventory management and supply chain visibility.",
          "Enable real-time data insights that support smarter operational decision-making.",
        ],
      },
    ],
  },
  "media-and-communication": {
    description:
      "Media and communication companies rely on scalable digital platforms to manage content, distribution, and audience engagement across multiple channels. We help organizations modernize their technology infrastructure to support efficient content management, digital distribution, and real-time audience insights. Our solutions enable media companies to deliver engaging digital experiences while optimizing content workflows and improving audience reach.",
    sections: [
      {
        title: "Digital Content Platforms",
        items: [
          "Develop platforms that manage digital content creation, publishing, and distribution across web and mobile channels.",
          "Enable seamless content delivery across multiple media platforms and communication networks.",
        ],
      },
      {
        title: "Audience Analytics & Engagement",
        items: [
          "Use analytics tools to understand audience behavior and engagement patterns.",
          "Enable data-driven strategies that improve content performance and user engagement.",
        ],
      },
    ],
  },
  healthcare: {
    description:
      "Healthcare organizations are increasingly adopting digital technologies to improve patient care, operational efficiency, and data management. We help healthcare providers and health-tech organizations modernize their systems, securely manage medical data, and enable intelligent healthcare solutions. Our technology solutions support healthcare institutions in delivering better patient outcomes while maintaining compliance with strict regulatory and security standards.",
    sections: [
      {
        title: "Digital Health Platforms",
        items: [
          "Develop modern healthcare platforms that support telemedicine, digital patient engagement, and remote care.",
          "Integrate healthcare applications with hospital management systems and electronic medical records.",
        ],
      },
      {
        title: "Healthcare Data & Analytics",
        items: [
          "Enable advanced analytics that help healthcare providers improve clinical decision-making.",
          "Implement secure data platforms that manage patient data while maintaining privacy and compliance.",
        ],
      },
      {
        title: "System Integration & Security",
        items: [
          "Integrate healthcare systems, medical devices, and applications for seamless information flow.",
          "Implement strong security and compliance frameworks to protect sensitive healthcare data.",
        ],
      },
    ],
  },
  finance: {
    description:
      "Financial institutions are undergoing rapid digital transformation to meet evolving customer expectations, regulatory requirements, and competitive market demands. We help banks, fintech companies, and financial service providers modernize their technology platforms to improve operational efficiency, enhance security, and deliver innovative financial services. Our solutions enable financial organizations to adopt modern technologies while maintaining strong governance, compliance, and risk management practices.",
    sections: [
      {
        title: "Digital Banking Platforms",
        items: [
          "Develop modern digital banking solutions that support seamless customer experiences across mobile and web channels.",
          "Enable secure online transactions, digital payments, and integrated financial services.",
        ],
      },
      {
        title: "Risk, Security & Compliance",
        items: [
          "Implement secure technology frameworks that protect financial data and transactions.",
          "Support regulatory compliance and risk management through advanced monitoring and reporting systems.",
        ],
      },
      {
        title: "Data & Financial Analytics",
        items: [
          "Leverage advanced analytics to gain deeper insights into customer behavior and financial performance.",
          "Enable data-driven decision-making that improves operational efficiency and strategic planning.",
        ],
      },
    ],
  },
  insurance: {
    description:
      "The insurance industry is evolving rapidly with the adoption of digital platforms, advanced analytics, and automated processes. We help insurance providers modernize their technology infrastructure to improve operational efficiency, enhance customer experiences, and streamline policy management. Our solutions support insurers in building scalable digital platforms, improving risk assessment capabilities, and delivering faster, more personalized services to customers.",
    sections: [
      {
        title: "Digital Insurance Platforms",
        items: [
          "Develop modern platforms for policy management, claims processing, and customer engagement.",
          "Enable digital channels that support seamless policy purchases, renewals, and service requests.",
          "Integrate core insurance systems with modern applications and data platforms.",
        ],
      },
      {
        title: "Risk Assessment & Data Insights",
        items: [
          "Use advanced analytics to improve underwriting accuracy and risk evaluation.",
          "Enable data-driven insights that support fraud detection and operational efficiency.",
          "Implement scalable data platforms that support insurance analytics and reporting.",
        ],
      },
    ],
  },
  manufacturing: {
    description:
      "Manufacturing organizations are adopting digital technologies to improve production efficiency, supply chain visibility, and operational performance. We help manufacturers modernize their technology infrastructure, integrate intelligent systems, and enable data-driven manufacturing environments. Our solutions support manufacturers in optimizing production processes, improving operational transparency, and building scalable technology platforms for smart manufacturing.",
    sections: [
      {
        title: "Smart Manufacturing Systems",
        items: [
          "Implement digital platforms that connect production systems, machines, and enterprise applications.",
          "Enable real-time monitoring of manufacturing operations to improve productivity and efficiency.",
        ],
      },
      {
        title: "Supply Chain & Operations",
        items: [
          "Improve supply chain visibility through integrated data platforms and analytics.",
          "Support efficient inventory management and operational planning across manufacturing facilities.",
        ],
      },
      {
        title: "Data & Automation",
        items: [
          "Enable data-driven manufacturing through advanced analytics and automated workflows.",
          "Integrate modern automation technologies that enhance operational performance and reliability.",
        ],
      },
    ],
  },
  telecom: {
    description:
      "Telecommunication companies are rapidly transforming their networks and digital platforms to support growing connectivity demands, cloud services, and digital experiences. We help telecom providers modernize infrastructure, optimize network performance, and enable scalable digital services. Our solutions support telecom organizations in delivering reliable connectivity, improving operational efficiency, and building future-ready network platforms.",
    sections: [
      {
        title: "Network Infrastructure & Modernization",
        items: [
          "Modernize telecom infrastructure to support high-performance and scalable network environments.",
          "Enable cloud-ready architectures that support next-generation telecom services.",
        ],
      },
      {
        title: "Data, Analytics & Network Insights",
        items: [
          "Implement analytics platforms that provide deep insights into network performance and usage patterns.",
          "Enable predictive monitoring to detect network issues before they impact customers.",
          "Support data-driven decision-making for operational and network optimization.",
        ],
      },
      {
        title: "Digital Service Platforms",
        items: [
          "Develop platforms that enable telecom providers to launch new digital services quickly.",
          "Integrate customer-facing applications that improve user experience and service management.",
        ],
      },
    ],
  },
  education: {
    description:
      "We support education organizations with modern learning platforms and efficient campus operations.",
    sections: [
      {
        title: "Experience Design",
        items: [
          "Student and faculty workflows designed for ease of use",
          "Digital platforms that improve access to key services",
          "Reliable interfaces across learning and support systems",
        ],
      },
      {
        title: "Operational Systems",
        items: [
          "Integration across academic and administrative platforms",
          "Reporting foundations for planning and performance visibility",
          "Automation that reduces manual coordination work",
        ],
      },
      {
        title: "Value for Institutions",
        items: [
          "Better service delivery across campus operations",
          "Improved digital readiness for evolving learning models",
          "Stronger support for long-term institutional growth",
        ],
      },
    ],
  },
  logistics: {
    description:
      "The logistics and transportation industry relies on efficient supply chains, real-time tracking, and optimized operations to deliver goods reliably across global networks. We help logistics providers modernize their technology platforms to improve operational visibility, streamline transportation processes, and enhance supply chain performance. Our solutions enable logistics companies to leverage data, automation, and digital platforms to improve delivery efficiency and respond quickly to changing market demands.",
    sections: [
      {
        title: "Supply Chain Visibility",
        items: [
          "Implement digital platforms that provide real-time tracking of shipments and logistics operations.",
          "Enable integrated systems that improve coordination between warehouses, transportation networks, and distribution centers.",
        ],
      },
      {
        title: "Transportation Optimization",
        items: [
          "Use analytics and intelligent systems to optimize delivery routes and transportation planning.",
          "Enable operational insights that improve delivery performance and reduce logistics costs.",
        ],
      },
    ],
  },
  "mortgage-and-investment-banking": {
    description:
      "Mortgage and investment banking institutions operate in a highly regulated and data-driven environment that requires secure, scalable, and reliable technology platforms. We help financial organizations modernize their systems to support digital financial services, streamline mortgage processing, and improve investment management capabilities. Our solutions enable financial institutions to enhance operational efficiency, maintain regulatory compliance, and deliver secure digital experiences to customers and investors.",
    sections: [
      {
        title: "Digital Financial Platforms",
        items: [
          "Develop secure platforms that support mortgage processing, loan management, and investment services.",
          "Enable seamless digital experiences for customers across web and mobile financial applications.",
        ],
      },
      {
        title: "Risk Management & Compliance",
        items: [
          "Implement technology frameworks that support regulatory compliance and financial governance.",
          "Use analytics and monitoring systems to strengthen financial risk assessment and security controls.",
        ],
      },
    ],
  },
  "professional-services": {
    description:
      "Professional service organizations rely on efficient technology platforms to manage clients, projects, and operational workflows. We help consulting firms, legal organizations, and service providers modernize their digital infrastructure to improve collaboration, operational efficiency, and client engagement. Our solutions enable professional service firms to streamline project management, enhance service delivery, and leverage data-driven insights for better business outcomes.",
    sections: [
      {
        title: "Business Process Platforms",
        items: [
          "Implement digital systems that support project management, resource planning, and service delivery.",
          "Enable seamless collaboration between teams, clients, and external partners.",
        ],
      },
      {
        title: "Operational Insights & Productivity",
        items: [
          "Use analytics tools to monitor project performance and operational efficiency.",
          "Provide technology solutions that improve productivity and decision-making across service teams.",
        ],
      },
    ],
  },
  "real-estate": {
    description:
      "The real estate industry is increasingly adopting digital platforms to manage properties, streamline transactions, and improve customer engagement. We help real estate organizations modernize their technology systems to support efficient property management, digital transactions, and data-driven market insights. Our solutions enable real estate firms to enhance operational efficiency, improve client experiences, and gain better visibility into property performance and market trends.",
    sections: [
      {
        title: "Property Management Platforms",
        items: [
          "Implement digital systems that support property listings, leasing, and property management operations.",
          "Enable centralized platforms that streamline communication between property owners, agents, and tenants.",
        ],
      },
      {
        title: "Market Analytics & Insights",
        items: [
          "Use analytics tools to evaluate property performance and market trends.",
          "Enable data-driven insights that support investment decisions and strategic planning.",
        ],
      },
    ],
  },
  "travel-and-tourism": {
    description:
      "The travel and tourism industry relies on digital platforms to deliver seamless booking experiences, manage global operations, and enhance customer engagement. We help travel companies modernize their technology ecosystems to support efficient reservation systems, personalized traveler experiences, and scalable digital services. Our solutions enable travel organizations to integrate digital channels, optimize operations, and leverage data insights to improve customer satisfaction and operational performance.",
    sections: [
      {
        title: "Digital Travel Platforms",
        items: [
          "Build modern booking and reservation systems that support web and mobile travel services.",
          "Enable seamless integration between airlines, hotels, and travel service providers.",
        ],
      },
      {
        title: "Customer Experience & Engagement",
        items: [
          "Use analytics and data platforms to understand traveler preferences and behavior.",
          "Deliver personalized travel experiences that improve customer engagement and loyalty.",
        ],
      },
    ],
  },
};

function formatTitle(slug?: string) {
  if (!slug) {
    return "Industry";
  }

  return slug
    .split("-")
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(" ");
}

export default async function IndustryDetailPage({
  params,
}: {
  params: { slug?: string } | Promise<{ slug?: string }>;
}) {
  const { slug = "" } = await params;
  const industry = industryDetails[slug] ?? {
    description: "Explore this industry focus and request a tailored discussion.",
    sections: [
      {
        title: "Industry Focus",
        items: [
          "Business workflows mapped to current operational challenges",
          "Technology planning aligned with user and process needs",
          "Delivery support from discovery through implementation",
        ],
      },
      {
        title: "What You Can Expect",
        items: [
          "Practical modernization priorities with business context",
          "Scalable system decisions for long-term growth",
          "Clearer visibility into process and platform opportunities",
        ],
      },
    ],
  };

  return (
    <DetailPageLayout
      kicker="Industries"
      title={formatTitle(slug)}
      description={industry.description}
      sections={industry.sections}
      backHref="/#industries"
      backLabel="Back to Industries"
    />
  );
}
