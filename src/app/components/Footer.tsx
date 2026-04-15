import Link from "next/link";

import type { ReactNode } from "react";

const companyLinks = [
  { label: "About iTAP", href: "/#about" },
  { label: "Why Choose Us?", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

const importantLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
];

const serviceLinks = [
  { label: "IT Strategy", href: "/services/it-consulting" },
  { label: "Custom Application Development", href: `/services/${slugify("Custom Application Development")}` },
  { label: "Product Engineering", href: `/services/${slugify("Product Engineering")}` },
  { label: "Web Development", href: `/services/${slugify("Web Development")}` },
  { label: "Software & Cyber Security", href: `/services/${slugify("Software & Cyber Security")}` },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function FooterTitle({ children }: { children: string }) {
  return (
    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-cyan)]">
      {children}
    </h3>
  );
}

function FooterLinkList({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <ul className="mt-5 space-y-3 text-sm text-slate-300">
      {items.map((item) => (
        <li key={item.label}>
          <Link href={item.href} className="transition hover:text-white">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[color:var(--brand-cyan)]" aria-hidden="true">
      <path
        d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" fill="currentColor" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[color:var(--brand-cyan)]" aria-hidden="true">
      <path
        d="M4 6h16v12H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m5 7 7 6 7-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[color:var(--brand-cyan)]" aria-hidden="true">
      <path
        d="M6.6 3.5h3.1l1.1 5-2 1.7a16.4 16.4 0 0 0 5 5l1.7-2 5 1.1v3.1a1.8 1.8 0 0 1-2 1.8A16.5 16.5 0 0 1 4.8 5.5a1.8 1.8 0 0 1 1.8-2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactItem({
  icon,
  value,
}: {
  icon: ReactNode;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 text-sm text-slate-300">
      <span className="mt-0.5">{icon}</span>
      <span className="leading-6">{value}</span>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#08111f] text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 xl:grid-cols-[0.95fr_0.95fr_1fr_1.1fr]">
          <div>
            <FooterTitle>Company</FooterTitle>
            <FooterLinkList items={companyLinks} />
          </div>

          <div>
            <FooterTitle>Explore</FooterTitle>
            <FooterLinkList items={importantLinks} />
          </div>

          <div>
            <FooterTitle>Services</FooterTitle>
            <FooterLinkList items={serviceLinks} />
          </div>

          <div>
            <FooterTitle>Get In Touch</FooterTitle>
            <div className="mt-5 space-y-4">
              <ContactItem icon={<LocationIcon />} value="abc 123" />
              <ContactItem icon={<MailIcon />} value="itap@gmail.com" />
              <ContactItem icon={<PhoneIcon />} value="9876543210" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} All rights reserved.</p>
          <div className="flex flex-wrap gap-5 text-sm text-slate-300">
            <a href="#" className="transition hover:text-white">
              Facebook
            </a>
            <a href="#" className="transition hover:text-white">
              Twitter
            </a>
            <a href="#" className="transition hover:text-white">
              YouTube
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
