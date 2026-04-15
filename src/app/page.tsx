"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";

import ServiceCard from "./components/ServiceCard";
import metaLogo from "./meta.png";
import verizonLogo from "./verizon logo.png";

const serviceCards = [
  {
    icon: "[Cloud]",
    title: "Cloud & Infrastructure",
    description:
      "Scalable, secure, and resilient cloud platforms for modern enterprises. We modernize your environment without breaking core business workflows.",
    highlights: [
      "Cloud migration planning",
      "Kubernetes and containerization",
      "Disaster recovery and DR drills",
      "Performance and cost optimization",
    ],
  },
  {
    icon: "[Digital]",
    title: "Digital Product Engineering",
    description:
      "Design and build resilient digital products across web, mobile, and backend stacks with measurable delivery speed and reliability.",
    highlights: [
      "Product architecture and roadmap",
      "Microservices and API-first design",
      "CI/CD and automated testing",
      "Monitoring and observability",
    ],
  },
  {
    icon: "[Shield]",
    title: "Security & Compliance",
    description:
      "Protect systems, data, and customer trust with policy-driven controls tuned to real operational risks, not theory.",
    highlights: [
      "Threat modeling and risk assessments",
      "Security operations readiness",
      "Identity and access controls",
      "Compliance documentation support",
    ],
  },
  {
    icon: "[Data]",
    title: "Data & AI",
    description:
      "Turn enterprise data into decisions with reliable pipelines and practical analytics use cases built for measurable business impact.",
    highlights: [
      "Data lake and warehouse design",
      "Automated analytics dashboards",
      "Machine-learning model deployment",
      "AI governance and MLOps readiness",
    ],
  },
  {
    icon: "[Systems]",
    title: "Enterprise Systems",
    description:
      "Integrate, automate, and connect core enterprise apps so teams can deliver faster with fewer manual handoffs.",
    highlights: [
      "ERP, CRM, and finance systems",
      "API integrations and middleware",
      "RPA workflows and process automation",
      "Legacy modernization strategy",
    ],
  },
  {
    icon: "[Strategy]",
    title: "IT Strategy & Managed Services",
    description:
      "Steer transformation with practical roadmaps, vendor-neutral decisions, and reliable ongoing support models.",
    highlights: [
      "Digital strategy workshops",
      "Team capability uplift and coaching",
      "SLA-backed managed operations",
      "24/7 platform and incident response",
    ],
  },
];

const whyCards = [
  {
    title: "Business-first delivery model",
    description:
      "We align technical work with business priorities so delivery stays practical, measurable, and relevant to real operating goals.",
  },
  {
    title: "Outcome-based architecture",
    description:
      "Our systems are shaped around reliability, scalability, and maintainability, not just feature delivery or short-term implementation speed.",
  },
  {
    title: "Continuous support and optimization",
    description:
      "We continue improving platforms after launch through support, refinement, and steady optimization as business needs evolve.",
  },
];

const deliveryOverview = [
  {
    title: "Specialization",
    description: "Business-centric digital services across cloud, products, data, and operations.",
  },
  {
    title: "Delivery",
    description: "Agile execution from strategy to launch with measurable milestones.",
  },
  {
    title: "Team",
    description: "Hands-on technical guidance focused on practical business outcomes.",
  },
];

type Capability = {
  title: string;
  category: string;
  description: string;
  logo: ReactNode;
  logoColorClassName: string;
  logoScaleClassName: string;
  logoSurfaceClassName: string;
  compactLogo?: boolean;
};

const capabilities: Capability[] = [
  {
    title: "Meta",
    category: "Social platforms",
    description: "Consumer-scale feeds, experimentation loops, and platform engineering patterns.",
    logoColorClassName: "",
    logoScaleClassName: "h-[84%] w-[84%]",
    logoSurfaceClassName: "bg-[#eef4ff] ring-1 ring-[#0866ff]/12",
    compactLogo: true,
    logo: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src={metaLogo}
          alt="Meta"
          className="h-full w-full object-contain"
          draggable={false}
        />
      </div>
    ),
  },
  {
    title: "Yahoo",
    category: "Consumer internet",
    description: "High-scale content, advertising, and engagement systems shaped for digital audiences.",
    logoColorClassName: "",
    logoScaleClassName: "h-[30%] w-[58%]",
    logoSurfaceClassName: "bg-[#6501d7] ring-1 ring-[#6501d7]/18",
    compactLogo: true,
    logo: (
      <div className="flex h-full w-full items-center justify-center leading-none">
        <span className="block -translate-y-[0.04em] whitespace-nowrap text-center text-[0.76rem] font-black lowercase tracking-[-0.03em] text-white">
          yahoo!
        </span>
      </div>
    ),
  },
  {
    title: "Mastercard",
    category: "Payments and fintech",
    description: "Secure transaction systems, payment network reliability, and data-driven customer experiences.",
    logoColorClassName: "",
    logoScaleClassName: "h-[68%] w-[88%]",
    logoSurfaceClassName: "bg-[#fff4ef] ring-1 ring-[#eb001b]/15",
    compactLogo: true,
    logo: (
      <div className="flex h-full w-full items-center justify-center">
        <svg viewBox="0 0 64 40" className="h-full w-full" aria-hidden="true">
          <circle cx="24" cy="20" r="12" fill="#EB001B" />
          <circle cx="40" cy="20" r="12" fill="#F79E1B" />
          <path
            d="M32 10.5a12.1 12.1 0 0 0 0 19 12.1 12.1 0 0 0 0-19Z"
            fill="#FF5F00"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "Apple",
    category: "Product ecosystem",
    description: "Hardware-software integration with a strong quality bar and polished UX execution.",
    logoColorClassName: "text-black",
    logoScaleClassName: "h-[76%] w-[76%]",
    logoSurfaceClassName: "bg-white ring-1 ring-[#e8e8ea]",
    compactLogo: true,
    logo: (
      <div className="flex h-full w-full items-center justify-center">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full" aria-hidden="true">
          <path
            d="M16.365 1.43c0 1.14-.418 2.193-1.244 3.16-.994 1.17-2.2 1.85-3.474 1.75-.02-.13-.03-.27-.03-.42 0-1.1.48-2.27 1.31-3.23.42-.49.95-.9 1.59-1.22.64-.32 1.25-.5 1.83-.54.02.16.03.32.03.5zm3.08 15.19c-.26.6-.57 1.18-.92 1.73-.47.73-.85 1.24-1.15 1.52-.45.44-.93.67-1.44.69-.37.02-.82-.1-1.34-.3-.53-.2-1.02-.3-1.47-.3-.48 0-.99.1-1.52.3-.53.2-.96.3-1.28.31-.5.02-.98-.2-1.43-.66-.33-.34-.71-.87-1.14-1.61-.46-.78-.84-1.69-1.13-2.73-.31-1.1-.47-2.16-.47-3.18 0-1.17.25-2.18.75-3.03.4-.68.94-1.22 1.63-1.62.69-.4 1.43-.6 2.22-.6.39 0 .91.12 1.56.35.65.23 1.06.35 1.23.35.13 0 .57-.14 1.32-.41.71-.25 1.3-.36 1.78-.33 1.3.1 2.28.62 2.95 1.55-1.16.7-1.73 1.68-1.72 2.93.01.97.35 1.78 1.02 2.43.31.3.66.53 1.05.7-.08.24-.17.48-.27.71z"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "LPL Financial",
    category: "Wealth management",
    description: "Advisor platforms, financial data workflows, and secure digital experiences for investment services.",
    logoColorClassName: "",
    logoScaleClassName: "h-[80%] w-[80%]",
    logoSurfaceClassName: "bg-white ring-1 ring-[#102a67]/15",
    compactLogo: true,
    logo: (
      <div className="flex h-full w-full items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full text-[#102a67]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18 12h56v56H62V24H18V12Z" />
          <path d="M18 36h34v32H40V48H18V36Z" />
          <path d="M18 58h14v14H18V58Z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Edward Jones",
    category: "Financial advisory",
    description: "Client advisory platforms, portfolio workflows, and trusted digital experiences for wealth planning.",
    logoColorClassName: "",
    logoScaleClassName: "h-[50%] w-[76%]",
    logoSurfaceClassName: "bg-[#f6c31c] ring-1 ring-[#1f2430]/10",
    compactLogo: true,
    logo: (
      <div className="flex h-full w-full flex-col items-center justify-center leading-none text-[#111827]">
        <span className="font-serif text-[0.85rem] tracking-[-0.05em]">
          Edward
        </span>
        <span className="-mt-0.5 text-[0.92rem] font-black tracking-[-0.07em]">
          Jones
        </span>
      </div>
    ),
  },
  {
    title: "Intuit",
    category: "Fintech platforms",
    description: "Tax, accounting, and financial workflow systems built for reliability, trust, and product clarity.",
    logoColorClassName: "",
    logoScaleClassName: "h-[42%] w-[76%]",
    logoSurfaceClassName: "bg-[#f2f7ff] ring-1 ring-[#236CFF]/14",
    compactLogo: true,
    logo: (
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-sm font-semibold tracking-[-0.04em] text-[#236CFF]">intuit</span>
      </div>
    ),
  },
  {
    title: "Verizon",
    category: "Telecom platforms",
    description: "Network-scale systems, customer operations, and resilient digital services for connected experiences.",
    logoColorClassName: "",
    logoScaleClassName: "h-[72%] w-[98%]",
    logoSurfaceClassName: "bg-white ring-1 ring-slate-200",
    compactLogo: true,
    logo: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src={verizonLogo}
          alt="Verizon"
          className="h-full w-full object-contain"
          draggable={false}
        />
      </div>
    ),
  },
  {
    title: "Optum",
    category: "Healthcare platforms",
    description: "Care delivery systems, health data workflows, and secure digital experiences across modern healthcare operations.",
    logoColorClassName: "",
    logoScaleClassName: "h-[66%] w-[66%]",
    logoSurfaceClassName: "bg-[#fff7f0] ring-1 ring-[#f28c28]/14",
    compactLogo: true,
    logo: (
      <div className="flex h-full w-full items-center justify-center">
        <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
          <circle cx="50" cy="50" r="34" fill="none" stroke="#ff642b" strokeWidth="20" />
        </svg>
      </div>
    ),
  },
];

const slidingCapabilities = [...capabilities, ...capabilities];

const valueHighlights = [
  {
    title: "Business-aligned delivery",
    description:
      "Every engagement is shaped around business priorities, delivery goals, and practical outcomes instead of unnecessary complexity.",
  },
  {
    title: "Flexible engagement models",
    description:
      "We support clients through dedicated teams, project-based work, long-term service partnerships, and evolving product initiatives.",
  },
  {
    title: "Long-term value creation",
    description:
      "Our focus stays on systems, products, and platforms that continue to create value after launch through support, improvement, and growth.",
  },
];

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.99 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: index * 0.08,
      ease: "easeOut" as const,
    },
  }),
};

export default function Home() {
  const capabilitiesTrackRef = useRef<HTMLDivElement | null>(null);
  const capabilitiesPausedRef = useRef(false);
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState<number | null>(null);

  useEffect(() => {
    const track = capabilitiesTrackRef.current;
    if (!track) return;

    let frameId = 0;
    let lastTimestamp = 0;
    const scrollSpeed = 0.1;
    let currentScroll = track.scrollLeft;

    const pause = () => {
      capabilitiesPausedRef.current = true;
    };

    const resume = () => {
      capabilitiesPausedRef.current = false;
    };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    const step = (timestamp: number) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!capabilitiesPausedRef.current) {
        currentScroll += delta * scrollSpeed;
      }

      if (currentScroll >= track.scrollWidth / 2) {
        currentScroll = 0;
      }

      track.scrollLeft = currentScroll;
      frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);

    return () => {
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <main
      className="relative min-h-screen overflow-hidden text-slate-900"
      style={{
        background: "linear-gradient(135deg, #f7faff 0%, #d7e6ff 44%, #c5d8fb 100%)",
      }}
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[color:var(--brand-orange)]/28 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-8 h-72 w-72 rounded-full bg-[color:var(--brand-blue)]/28 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_50%_100%,rgba(31,86,179,0.24),transparent_72%)]" />
      <div id="solutions" className="h-0 w-0" />
      <div id="industries" className="h-0 w-0" />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="relative mx-auto max-w-6xl overflow-visible px-6 pt-16 pb-8"
      >
        <motion.p
          variants={heroItemVariants}
          className="relative text-base font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]"
        >
          iTAP Technologies
        </motion.p>
        <motion.h1
          variants={heroItemVariants}
          className="relative mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl"
        >
          Building a better digital future with smarter, secure IT systems
        </motion.h1>
        <motion.p
          variants={heroItemVariants}
          className="relative mt-7 max-w-2xl text-lg text-[color:var(--text-muted)]"
        >
          We partner with enterprises and growth-stage teams to launch secure,
          scalable, and cost-aware digital products that move business outcomes.
        </motion.p>
        <div className="relative mt-6 flex flex-wrap items-center gap-4">
          <motion.a
            href="#services"
            variants={heroItemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="brand-button rounded-xl px-6 py-3 font-semibold transition hover:opacity-90"
          >
            Explore Services
          </motion.a>
          <motion.div
            variants={heroItemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <Link
              href="/contact"
              prefetch
              className="inline-block rounded-xl border border-[color:var(--brand-blue)] bg-white px-6 py-3 font-semibold text-[color:var(--brand-blue)] transition hover:bg-[color:var(--brand-blue)] hover:text-white"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>

        <div className="relative mt-8">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]">Core capabilities</p>
          <p className="mt-3 max-w-3xl text-lg text-slate-700">
            We build with patterns proven by the world&apos;s most demanding product and
            platform companies, then adapt them to practical enterprise delivery.
          </p>
          <div className="relative mt-5 pt-5 pb-3">
            <div
              ref={capabilitiesTrackRef}
              className="overflow-x-hidden pt-4 pb-4"
            >
              <div className="flex w-max items-start gap-5 pb-1">
                {slidingCapabilities.map((capability, index) => {
                  const isActive = activeCapabilityIndex === index;

                  return (
                    <motion.article
                      key={`${capability.title}-${index}`}
                      variants={cardVariants}
                      custom={index % capabilities.length}
                      whileHover={{
                        scale: 1.06,
                        y: 0,
                        boxShadow: "0 24px 48px rgba(15,23,42,0.22)",
                      }}
                      onHoverStart={() => setActiveCapabilityIndex(index)}
                      onHoverEnd={() => setActiveCapabilityIndex(null)}
                      transition={{ type: "spring", stiffness: 240, damping: 20 }}
                      style={{ transformOrigin: "center top" }}
                      className={`crm-card-surface relative z-0 flex w-[12.5rem] flex-none self-start flex-col overflow-visible rounded-[1.35rem] border border-transparent px-4 py-3 transition-all duration-300 md:w-[13.5rem] hover:z-20 ${
                        isActive
                          ? "min-h-[12rem] border-[color:var(--brand-blue)]/20 bg-white/95"
                          : "min-h-[9.75rem]"
                      }`}
                    >
                      <div className="pointer-events-none absolute inset-x-6 top-0 h-20 bg-[radial-gradient(circle_at_top,rgba(31,86,179,0.08),transparent_72%)]" />
                      <div className="relative flex min-h-[4rem] w-full flex-col items-center justify-start">
                        {capability.compactLogo ? (
                          <div
                            className={`mx-auto flex flex-col items-center justify-center rounded-xl transition-all duration-300 ease-in-out ${
                              isActive ? "p-3.5 scale-100" : "p-2 scale-95"
                            }`}
                          >
                            <div
                              className={`flex items-center justify-center rounded-[1.15rem] shadow-[0_8px_18px_rgba(15,23,42,0.06)] transition-all duration-300 ${
                                isActive ? "h-[3.85rem] w-[3.85rem]" : "h-[3.05rem] w-[3.05rem]"
                              } ${capability.logoSurfaceClassName}`}
                            >
                              <div
                                className={`flex items-center justify-center ${capability.logoScaleClassName} ${capability.logoColorClassName}`}
                              >
                                {capability.logo}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            className={`flex h-12 min-w-[7.75rem] items-center rounded-2xl px-3 ${
                              capability.title === "Meta" ? "justify-center" : "justify-start"
                            } ${capability.logoSurfaceClassName}`}
                          >
                            <div className={capability.logoColorClassName}>{capability.logo}</div>
                          </div>
                        )}
                        <span
                          className={`mt-2 inline-flex min-h-10 items-center justify-center rounded-full border px-4 py-1.5 text-center text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.18em] backdrop-blur-sm transition-all duration-300 ${
                            isActive
                              ? "max-w-full border-[color:var(--brand-blue)]/35 bg-white/80 text-[color:var(--brand-blue)]"
                              : "max-w-[8.75rem] border-slate-200/80 bg-white/80 text-slate-500"
                          }`}
                        >
                          {capability.category}
                        </span>
                      </div>
                      <div
                        className={`relative overflow-hidden transition-all duration-300 ${
                          isActive ? "mt-3 max-h-32 opacity-100" : "mt-0 max-h-0 opacity-0"
                        }`}
                      >
                        <h3 className="crm-card-heading text-base font-semibold text-[color:var(--brand-blue)] transition-colors duration-300">
                          {capability.title}
                        </h3>
                        <p className="crm-card-body mt-1.5 text-xs leading-5 text-slate-600 transition-colors duration-300">
                          {capability.description}
                        </p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </motion.section>

      <motion.section
        id="services"
        className="mx-auto grid max-w-6xl gap-5 px-6 pb-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={heroItemVariants}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]">Services</p>
            <h2 className="mt-2 text-3xl font-bold">What we deliver today</h2>
          </div>
          <a href="#services" className="text-sm font-semibold text-[color:var(--brand-blue)]">
            View all services -&gt;
          </a>
        </motion.div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {deliveryOverview.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              custom={index}
              className="crm-card-surface group rounded-xl p-5"
            >
              <h3 className="crm-card-heading text-xl font-semibold text-[color:var(--brand-blue)] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="crm-card-body mt-2 text-base leading-relaxed text-slate-700 transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={card.title}
              icon={card.icon}
              variants={cardVariants}
              custom={index}
              title={card.title}
              description={card.description}
              highlights={card.highlights}
            />
          ))}
        </div>
      </motion.section>

      <section id="technology" className="mx-auto max-w-6xl px-6 pb-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]">What We Bring</p>
          <h2 className="mt-2 text-3xl font-bold">A stronger foundation for long-term growth</h2>
          <p className="mt-3 max-w-3xl text-[color:var(--text-muted)]">
            We work with organizations that need more than one-time execution, building a stronger base for delivery, operations, and future product growth.
          </p>
        </motion.div>
        <motion.div
          className="mt-6 grid gap-4 md:grid-cols-3"
          variants={staggerContainer}
          initial="visible"
          animate="visible"
        >
          {valueHighlights.map((principle, index) => (
              <motion.div
                key={principle.title}
                variants={cardVariants}
                custom={index}
              className="crm-card-surface group rounded-xl p-5"
            >
              <h3 className="crm-card-heading text-xl font-semibold text-[color:var(--brand-blue)] transition-colors duration-300">
                {principle.title}
              </h3>
              <p className="crm-card-body mt-3 text-base leading-relaxed text-slate-700 transition-colors duration-300">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-6 pb-12">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          Why choose iTAP
        </motion.h2>
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-4 grid gap-3 text-[color:var(--text-muted)] md:grid-cols-3"
        >
          {whyCards.map((point, index) => (
            <motion.li
              key={point.title}
              variants={cardVariants}
              custom={index}
              className="group relative h-24 overflow-visible"
            >
              <div className="crm-card-surface absolute inset-0 rounded-xl px-4 py-3 text-center text-[color:var(--text-muted)] transition-all duration-300 group-hover:z-10 group-hover:-translate-y-2 group-hover:scale-[1.05] group-hover:shadow-[0_22px_42px_rgba(31,86,179,0.16)] group-hover:min-h-[8.5rem]">
                <div className="flex h-full flex-col items-center justify-center group-hover:justify-start">
                  <h3 className="crm-card-heading text-lg font-bold leading-snug text-[color:var(--brand-blue)] transition-all duration-300">
                    {point.title}
                  </h3>
                  <p className="crm-card-body mt-0 max-h-0 overflow-hidden text-center text-sm leading-6 text-slate-800 opacity-0 transition-all duration-300 group-hover:mt-2 group-hover:max-h-24 group-hover:opacity-100">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 pb-12">
        <div id="company" className="h-0 w-0" />
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          About iTAP Technologies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 max-w-3xl text-[color:var(--text-muted)]"
        >
          We are a technology and engineering company focused on helping organizations modernize their digital ecosystems and build scalable, resilient platforms. Our work spans cloud transformation, data engineering, AI-driven analytics, modern application architectures, and product delivery that helps businesses move faster and operate more efficiently.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-3xl text-[color:var(--text-muted)]"
        >
          In an increasingly digital world, organizations must continuously evolve their technology foundations to remain competitive. We partner with enterprises to design, build, and optimize digital platforms that support operational agility, data-driven decision making, long-term business growth, and dependable service delivery.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 max-w-3xl text-[color:var(--text-muted)]"
        >
          Alongside client work, we also invest in our own internal products and platform ideas, giving our teams hands-on experience building, shipping, and improving technology in real operating environments.
        </motion.p>
      </section>

    </main>
  );
}


