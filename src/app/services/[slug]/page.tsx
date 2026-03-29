import DetailPageLayout from "@/app/components/DetailPageLayout";

type ServiceBlock = {
  heading: string;
  items: readonly string[];
};

type ServiceSection = {
  title: string;
  subtitle: string;
  description: string;
  whoBenefits: readonly string[];
  outcomes: readonly string[];
  blocks: readonly ServiceBlock[];
  techFocus: readonly string[];
  engagementModel: string;
};

const serviceDetails: Record<string, ServiceSection> = {
  "it-consulting": {
    title: "IT Consulting",
    subtitle: "",
    description:
      "We provide strategic IT consulting services that help organizations align technology with their business objectives. Our consultants analyze your existing infrastructure, identify opportunities for improvement, and recommend scalable solutions that enhance efficiency, security, and overall performance. By combining industry expertise with modern technologies, we guide businesses toward smarter technology decisions that support innovation and long-term growth.",
    outcomes: [],
    whoBenefits: [],
    blocks: [
      {
        heading: "Technology Strategy & Planning",
        items: [
          "IT roadmap development aligned with business goals",
          "Technology stack evaluation and architecture recommendations",
          "Digital transformation consulting for modern enterprises",
          "IT governance, compliance, and policy planning",
        ],
      },
      {
        heading: "Infrastructure Optimization",
        items: [
          "Assessment of existing IT infrastructure and systems",
          "Network architecture planning and optimization",
          "Cloud migration strategies and implementation guidance",
          "Performance tuning for systems and applications",
        ],
      },
      {
        heading: "Risk & Security Advisory",
        items: [
          "IT risk identification and mitigation strategies",
          "Development of security policies and procedures",
          "Business continuity and disaster recovery planning",
          "Compliance advisory for industry standards and regulations",
        ],
      },
    ],
    techFocus: [],
    engagementModel: "",
  },
  outsourcing: {
    title: "Outsourcing",
    subtitle: "",
    description:
      "Our outsourcing services help businesses optimize operations by leveraging skilled technology professionals and scalable development resources. By partnering with us, organizations can focus on their core business activities while we manage technical execution, development processes, and IT support. Our flexible outsourcing models enable companies to scale teams quickly, reduce operational costs, and accelerate project delivery without compromising quality.",
    outcomes: [],
    whoBenefits: [],
    blocks: [
      {
        heading: "Dedicated Development Teams",
        items: [
          "Full-time offshore or remote development teams",
          "Agile collaboration with your internal teams",
          "Project-based or long-term development support",
          "Skilled developers across multiple technologies",
        ],
      },
      {
        heading: "IT Support & Managed Services",
        items: [
          "Continuous technical support and system monitoring",
          "Infrastructure management and maintenance",
          "Software updates and operational support",
          "Remote IT administration and troubleshooting",
        ],
      },
      {
        heading: "Resource Augmentation",
        items: [
          "Short-term or long-term technical experts",
          "Rapid scaling of development teams for projects",
          "Access to specialized developers and engineers",
          "Flexible hiring models to match project requirements",
        ],
      },
    ],
    techFocus: [],
    engagementModel: "",
  },
  crm: {
    title: "CRM",
    subtitle: "Customer Relationship Management",
    description:
      "Customer Relationship Management solutions help businesses organize, manage, and analyze customer interactions throughout the entire customer lifecycle. Our CRM services are designed to improve customer engagement, streamline sales processes, and enhance service delivery. By implementing the right CRM platform and customizing it to your business needs, we enable better decision-making, stronger customer relationships, and increased operational efficiency.",
    outcomes: [],
    whoBenefits: [],
    blocks: [
      {
        heading: "CRM Implementation & Customization",
        items: [
          "CRM platform selection based on business requirements",
          "Custom configuration of CRM modules and workflows",
          "Data migration from existing systems",
          "User role configuration and access management",
        ],
      },
      {
        heading: "Sales Process Automation",
        items: [
          "Lead management and tracking systems",
          "Sales pipeline and opportunity management",
          "Automated follow-ups and task assignments",
          "Sales performance monitoring and reporting",
        ],
      },
      {
        heading: "Customer Insights & Analytics",
        items: [
          "Customer data dashboards and reporting tools",
          "Analysis of customer behavior and engagement trends",
          "Integration with marketing automation platforms",
          "Performance tracking for sales and customer service teams",
        ],
      },
      {
        heading: "Integration & System Connectivity",
        items: [
          "Integration with ERP, marketing, and support systems",
          "API-based integrations with third-party platforms",
          "Email, communication, and customer support integrations",
          "Data synchronization across business applications",
        ],
      },
    ],
    techFocus: [],
    engagementModel: "",
  },
  "custom-application-development": {
    title: "Custom Application Development",
    subtitle: "Tailored software for real business workflows",
    description:
      "Every business has unique processes that cannot always be supported by off-the-shelf software. Our custom application development services focus on building tailored software solutions that address specific business requirements. From concept and architecture to deployment and long-term support, we design scalable, secure, and high-performance applications that streamline operations and support business growth.",
    outcomes: [],
    whoBenefits: [],
    blocks: [
      {
        heading: "Enterprise Application Development",
        items: [
          "Development of custom enterprise-grade software solutions",
          "Business workflow automation applications",
          "Scalable cloud-based application architecture",
          "Secure and high-performance backend systems",
        ],
      },
      {
        heading: "API Development & System Integration",
        items: [
          "RESTful API development for application connectivity",
          "Integration with third-party platforms and services",
          "Payment gateway and external service integrations",
          "Modernization and integration of legacy systems",
        ],
      },
      {
        heading: "UI/UX & Application Design",
        items: [
          "User-centered interface design for better usability",
          "Interactive dashboards and reporting interfaces",
          "Responsive application interfaces across devices",
          "Prototyping and usability testing before development",
        ],
      },
      {
        heading: "Application Maintenance & Support",
        items: [
          "Continuous application monitoring and optimization",
          "Feature enhancements and performance improvements",
          "Security updates and bug fixes",
          "Long-term technical support and system upgrades",
        ],
      },
    ],
    techFocus: [],
    engagementModel: "",
  },
  testing: {
    title: "Testing",
    subtitle: "Quality assurance for confident releases",
    description:
      "High-quality software requires thorough testing to ensure reliability, performance, and security. Our software testing services focus on identifying defects early, validating functionality, and ensuring applications meet business and user expectations. By using modern testing tools and proven quality assurance practices, we help organizations deliver stable and high-performing software products.",
    outcomes: [],
    whoBenefits: [],
    blocks: [
      {
        heading: "Functional Testing",
        items: [
          "Verification of software features and functionality",
          "User interface and user experience testing",
          "Validation of business logic and workflows",
          "Cross-browser and cross-device compatibility testing",
        ],
      },
      {
        heading: "Automated Testing",
        items: [
          "Development of automated test scripts and frameworks",
          "Continuous integration and automated testing pipelines",
          "Regression testing for ongoing software updates",
          "Faster and more efficient testing cycles",
        ],
      },
      {
        heading: "Performance & Load Testing",
        items: [
          "Application performance evaluation under heavy usage",
          "Load testing for scalability and system stability",
          "Stress testing to identify system limits",
          "Optimization recommendations based on test results",
        ],
      },
      {
        heading: "Security & Vulnerability Testing",
        items: [
          "Identification of potential security vulnerabilities",
          "Penetration testing for application security",
          "Data protection and secure access validation",
          "Security compliance testing for industry standards",
        ],
      },
    ],
    techFocus: [],
    engagementModel: "",
  },
  "software-and-cyber-security": {
    title: "Software & Cyber Security",
    subtitle: "Security-first delivery without trade-offs",
    description:
      "As businesses increasingly rely on digital systems, protecting applications, data, and infrastructure from cyber threats has become essential. Our software and cybersecurity services focus on identifying vulnerabilities, strengthening system defenses, and implementing secure development practices. We help organizations build resilient systems that protect sensitive data, maintain compliance, and ensure business continuity.",
    outcomes: [],
    whoBenefits: [],
    blocks: [
      {
        heading: "Security Assessment & Auditing",
        items: [
          "Comprehensive vulnerability assessments",
          "Security audits of applications and infrastructure",
          "Identification of security gaps and risk areas",
          "Compliance checks for industry security standards",
        ],
      },
      {
        heading: "Application Security",
        items: [
          "Secure software development practices (Secure SDLC)",
          "Code review for security vulnerabilities",
          "Web and mobile application security testing",
          "Implementation of authentication and access control mechanisms",
        ],
      },
      {
        heading: "Network & Infrastructure Protection",
        items: [
          "Firewall configuration and network security setup",
          "Secure cloud infrastructure configuration",
          "Endpoint security solutions for devices and servers",
          "Identity and access management implementation",
        ],
      },
      {
        heading: "Threat Monitoring & Incident Response",
        items: [
          "Real-time monitoring for suspicious activities",
          "Security event analysis and threat detection",
          "Incident response planning and mitigation strategies",
          "Continuous security improvement and updates",
        ],
      },
    ],
    techFocus: [],
    engagementModel: "",
  },
  "product-engineering": {
    title: "Product Engineering",
    subtitle: "Reliable delivery from idea to scale",
    description:
      "Building successful digital products requires a combination of innovation, technical expertise, and a structured development process. Our product engineering services help businesses design, develop, and enhance products throughout their lifecycle. From idea validation and prototype creation to full-scale product development and continuous improvement, we support organizations in delivering reliable and scalable technology products.",
    outcomes: [],
    whoBenefits: [],
    blocks: [
      {
        heading: "Product Design & Architecture",
        items: [
          "Product requirement analysis and technical feasibility studies",
          "System architecture design for scalable products",
          "Technology stack selection and platform planning",
          "UI/UX design focused on product usability and engagement",
        ],
      },
      {
        heading: "Product Development",
        items: [
          "Agile-based product development processes",
          "Minimum Viable Product (MVP) development for early market validation",
          "Full lifecycle product development and deployment",
          "Cloud-native product development and microservices architecture",
        ],
      },
      {
        heading: "Product Modernization",
        items: [
          "Upgrading legacy products with modern technologies",
          "Performance optimization and scalability improvements",
          "Feature expansion based on user feedback and market needs",
          "Integration of new technologies into existing products",
        ],
      },
      {
        heading: "Product Maintenance & Support",
        items: [
          "Continuous product monitoring and support",
          "Bug fixes and stability improvements",
          "Security updates and compliance improvements",
          "Long-term product enhancement and lifecycle management",
        ],
      },
    ],
    techFocus: [],
    engagementModel: "",
  },
  "web-development": {
    title: "Web Development",
    subtitle: "High-performing digital platforms",
    description:
      "A strong web presence is essential for modern businesses to connect with customers, showcase services, and drive growth. Our web development services focus on building high-performance, responsive, and secure websites tailored to your business needs. We combine modern technologies with user-focused design to deliver websites that provide seamless experiences across devices while ensuring scalability and long-term maintainability.",
    outcomes: [],
    whoBenefits: [],
    blocks: [
      {
        heading: "Website Development",
        items: [
          "Custom website design and development tailored to business needs",
          "Responsive and mobile-first website development",
          "Corporate, portfolio, and business website creation",
          "Content Management System (CMS) based websites",
        ],
      },
      {
        heading: "Web Application Development",
        items: [
          "Development of dynamic and interactive web applications",
          "SaaS platform and business web portal development",
          "Admin dashboards and data management systems",
          "Progressive Web Applications (PWA) for enhanced user experience",
        ],
      },
      {
        heading: "E-Commerce Solutions",
        items: [
          "Development of secure online stores and e-commerce platforms",
          "Payment gateway integration and order management systems",
          "Product catalog and inventory management features",
          "Customer account and order tracking functionality",
        ],
      },
      {
        heading: "Website Optimization & Maintenance",
        items: [
          "Website performance optimization for faster loading",
          "SEO-friendly website structure and best practices",
          "Security enhancements and regular updates",
          "Continuous maintenance and technical support",
        ],
      },
    ],
    techFocus: [],
    engagementModel: "",
  },
  "mobile-application-development": {
    title: "Mobile Application Development",
    subtitle: "Secure and scalable mobile experiences",
    description:
      "Mobile applications play a critical role in helping businesses engage customers, streamline services, and expand their digital presence. Our mobile application development services focus on creating intuitive, secure, and high-performance mobile apps tailored to business needs. We develop scalable applications that provide seamless user experiences across devices while integrating efficiently with backend systems and business platforms.",
    outcomes: [],
    whoBenefits: [],
    blocks: [
      {
        heading: "Native Mobile Development",
        items: [
          "Android application development using modern frameworks and tools",
          "iOS application development optimized for Apple devices",
          "Platform-specific performance optimization and testing",
          "Native UI/UX design following platform guidelines",
        ],
      },
      {
        heading: "Cross-Platform Development",
        items: [
          "Hybrid mobile application development for multiple platforms",
          "Cross-platform frameworks such as React Native and Flutter",
          "Single codebase development for Android and iOS applications",
          "Faster development cycles with consistent performance",
        ],
      },
      {
        heading: "Mobile App Integration",
        items: [
          "Backend API integration for seamless data communication",
          "Integration with third-party services and payment systems",
          "Cloud service integration for scalability and reliability",
          "Secure authentication and data synchronization",
        ],
      },
      {
        heading: "App Maintenance & Optimization",
        items: [
          "Continuous monitoring and performance improvements",
          "Feature upgrades and functional enhancements",
          "Security updates and bug fixes",
          "App store deployment, updates, and version management",
        ],
      },
    ],
    techFocus: [],
    engagementModel: "",
  },
  erp: {
    title: "ERP",
    subtitle: "Modern enterprise workflow integration",
    description:
      "Enterprise Resource Planning (ERP) systems help organizations integrate and manage core business processes within a single unified platform. Our ERP services focus on implementing scalable solutions that streamline operations, improve data visibility, and enhance decision-making across departments such as finance, human resources, supply chain, and sales.",
    outcomes: [],
    whoBenefits: [],
    blocks: [
      {
        heading: "ERP Implementation",
        items: [
          "ERP platform selection based on business requirements",
          "End-to-end ERP system deployment and configuration",
          "Customization of ERP modules to match business workflows",
          "User role configuration and access management",
        ],
      },
      {
        heading: "Business Process Integration",
        items: [
          "Integration of finance and accounting operations",
          "Inventory and supply chain management systems",
          "HR, payroll, and workforce management integration",
          "Sales, procurement, and order management processes",
        ],
      },
      {
        heading: "Data Migration & System Upgrades",
        items: [
          "Migration of legacy system data into ERP platforms",
          "Database restructuring and data validation",
          "ERP version upgrades and system modernization",
          "Integration with existing business applications",
        ],
      },
      {
        heading: "ERP Support & Optimization",
        items: [
          "ERP system monitoring and performance optimization",
          "User training and operational guidance",
          "Troubleshooting and technical support services",
          "Continuous improvements and feature enhancements",
        ],
      },
    ],
    techFocus: [],
    engagementModel: "",
  },
};

const fallbackService: ServiceSection = {
  title: "Service details",
  subtitle: "Customizable service profile",
  description:
    "Explore this service area and request a tailored discussion aligned to your business context, growth goals, and operational priorities.",
  whoBenefits: ["Teams looking for practical transformation support"],
  outcomes: ["Clear ownership", "Measurable outcomes", "Repeatable delivery cadence"],
  blocks: [
    {
      heading: "Scope",
      items: ["Consultation and planning", "Execution planning and delivery", "Post-launch support"],
    },
    {
      heading: "What to expect",
      items: ["Clear recommendations", "Well-defined milestones", "Transparent communication"],
    },
    {
      heading: "Outcome focus",
      items: ["Measurable progress", "Faster execution", "Scalable operations"],
    },
  ],
  techFocus: ["Strategy", "Execution", "Governance"],
  engagementModel: "Flexible engagement model",
};

export default async function ServiceDetailPage({
  params,
}: {
  params: { slug?: string } | Promise<{ slug?: string }>;
}) {
  const { slug = "" } = await params;
  const service = serviceDetails[slug] ?? fallbackService;
  const contentSections = [
    ...service.blocks.map((block) => ({
      title: block.heading,
      items: block.items,
    })),
    ...(service.outcomes.length
      ? [
          {
            title: "Outcomes",
            items: service.outcomes,
          },
        ]
      : []),
    ...(service.whoBenefits.length
      ? [
          {
            title: "Who it benefits",
            items: service.whoBenefits,
          },
        ]
      : []),
  ];

  return (
    <DetailPageLayout
      kicker="Services"
      title={service.title}
      subtitle={service.subtitle}
      description={service.description}
      sections={contentSections}
      backHref="/#services"
      backLabel="Back to Services"
    />
  );
}
