"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const navMenuConfig = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    items: [
      "IT Strategy",
      "Outsourcing",
      "CRM",
      "Custom Application Development",
      "Testing",
      "Software & Cyber Security",
      "Product Engineering",
      "Web Development",
      "Mobile Application Development",
      "ERP",
    ],
  },
  {
    href: "/solutions",
    label: "Solutions",
    items: [
      "Cloud Migration",
      "Data Engineering",
      "AI & Analytics",
      "DevOps Automation",
      "API Management",
      "Application Modernization",
      "QA Automation",
      "Observability & Monitoring",
    ],
  },
  {
    href: "/industries",
    label: "Industries",
    items: [
      "Automotive",
      "Advertising & Event Management",
      "Retail",
      "Healthcare",
      "Finance",
      "Insurance",
      "Manufacturing",
      "Telecom",
      "Media & Communication",
      "Education",
      "Logistics",
      "Mortgage & Investment Banking",
      "Professional Services",
      "Real Estate",
      "Travel & Tourism",
    ],
  },
  {
    href: "/company",
    label: "Company",
    items: ["About Us", "Leadership", "Why iTAP", "Partners", "Case Studies", "Blog"],
  },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

type MenuEntry = (typeof navMenuConfig)[number];
type MenuEntryWithItems = Extract<MenuEntry, { items: readonly string[] }>;
type DropdownLink = MenuEntryWithItems["href"];

const navLinks = navMenuConfig.map(({ href, label }) => ({ href, label }));

const columnsCount = 4;

function hasItems(link: MenuEntry): link is MenuEntryWithItems {
  return "items" in link;
}

const dropdownData = navMenuConfig.reduce((acc, link) => {
  if (hasItems(link)) {
    acc[link.href] = link.items;
  }
  return acc;
}, {} as Record<DropdownLink, readonly string[]>);

function toColumns(items: readonly string[], count: number) {
  const cols = Array.from({ length: count }, () => [] as string[]);
  items.forEach((item, i) => cols[i % count].push(item));
  return cols;
}

function getDropdownColumns(section: DropdownLink) {
  return toColumns(dropdownData[section], columnsCount);
}

function isDropdownLink(href: string): href is DropdownLink {
  return href in dropdownData;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildDropdownItemHref(section: DropdownLink, item: string) {
  if (section === "/services" && item === "IT Strategy") {
    return "/services/it-consulting";
  }

  return `${section}/${slugify(item)}`;
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<DropdownLink | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const isDropdownOpen = activeDropdown !== null;
  const isHeaderElevated = isScrolled || isDropdownOpen;
  const defaultHeaderBackground = "linear-gradient(135deg, #f7faff 0%, #d7e6ff 34%, #efe2d4 66%, #c5d8fb 100%)";
  const darkChromeBackground = "#000000";
  const isDarkChrome = isScrolled || isDropdownOpen;
  const headerBackground = isDarkChrome ? darkChromeBackground : defaultHeaderBackground;
  const navTextColor = isDarkChrome ? "#f8fafc" : "#000000";
  const dropdownBackground = darkChromeBackground;
  const dropdownTextColor = "#e5e7eb";

  const closeDropdown = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }

    closeTimeout.current = setTimeout(() => {
      setHoveredLink(null);
      setActiveDropdown(null);
    }, 150);
  };

  const cancelClose = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="sticky top-0 z-50 overflow-visible relative py-4 transition-[box-shadow,border-color] duration-300"
      style={{
        background: headerBackground,
        color: navTextColor,
        boxShadow: isHeaderElevated
          ? isDropdownOpen
            ? "none"
            : "0 14px 28px -24px rgba(31, 86, 179, 0.45)"
          : "none",
        borderBottom: isHeaderElevated
          ? isDropdownOpen
            ? "1px solid rgba(255, 255, 255, 0.14)"
            : "1px solid rgba(31, 86, 179, 0.12)"
          : "1px solid transparent",
      }}
      onMouseLeave={closeDropdown}
    >
      <nav className="relative z-50 mx-auto flex max-w-6xl items-center justify-between px-3">
        <motion.div>
            <Link
              href="/"
              className="flex items-center gap-3 font-bold leading-none transform transition-transform duration-300 hover:scale-110"
              onMouseEnter={closeDropdown}
            >
            <Image
              src="/iTAP final logo.png"
              alt="iTAP logo"
              width={68}
              height={68}
              className="h-14 w-14 shrink-0 object-contain md:h-16 md:w-16"
              priority
            />
            <span className="text-2xl tracking-wide md:text-4xl">
              <span className="bg-[linear-gradient(90deg,var(--brand-orange)_0%,var(--brand-red)_45%,var(--brand-blue)_100%)] bg-clip-text text-transparent">
                iTAP
              </span>
            <span className="ml-1 text-base md:text-2xl" style={{ color: navTextColor }}>
              Technologies
            </span>
            </span>
          </Link>
        </motion.div>

        <div className="ml-auto flex items-center gap-4 pl-5 text-base md:text-lg">
          {navLinks.map((link) => {
                const isActive = isActivePath(pathname, link.href);
                const isHovered = hoveredLink === link.href;
                const useOrange = isHovered || link.href === activeDropdown;
                const baseTextColor = navTextColor;

            if (isDropdownLink(link.href)) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    setHoveredLink(link.href);
                    setActiveDropdown(link.href as DropdownLink);
                  }}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    style={{
                      color: useOrange ? "var(--brand-red)" : baseTextColor,
                      fontWeight: 400,
                      cursor: "pointer",
                      background: "transparent",
                      border: "none",
                      padding: 0,
                    }}
                    className="transition-all duration-200 hover:scale-105"
                    onMouseEnter={() => {
                      cancelClose();
                      setHoveredLink(link.href);
                      setActiveDropdown(link.href as DropdownLink);
                    }}
                  >
                    {link.label}
                  </button>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onMouseEnter={() => {
                  setHoveredLink(link.href);
                  setActiveDropdown(null);
                }}
                style={{
                  color: useOrange ? "var(--brand-red)" : baseTextColor,
                  fontWeight: 400,
                }}
                className="transition-all duration-200 hover:scale-105"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "20px",
          top: "100%",
        }}
      />

      {activeDropdown && (
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={closeDropdown}
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            top: "70px",
            paddingTop: "10px",
            zIndex: 10,
            background: dropdownBackground,
            borderTop: "none",
            boxShadow: "0 18px 32px -24px rgba(0, 0, 0, 0.65)",
          }}
        >
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "40px 48px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                columnGap: 80,
              }}
            >
              {getDropdownColumns(activeDropdown).map((col, colIndex) => (
                <ul
                  key={colIndex}
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 28,
                  }}
                >
                  {col.map((item) => (
                    <li
                      key={item}
                      style={{
                        color: dropdownTextColor,
                        listStyle: "none",
                      }}
                    >
                      <Link
                        onClick={closeDropdown}
                        href={buildDropdownItemHref(activeDropdown, item)}
                        style={{
                          color: "inherit",
                          fontSize: 16,
                          fontWeight: 400,
                          textDecoration: "none",
                          display: "block",
                          transformOrigin: "left center",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "var(--brand-red)";
                          e.currentTarget.style.transform = "scale(1.08)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = dropdownTextColor;
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                        className="origin-left transition-all duration-150"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
