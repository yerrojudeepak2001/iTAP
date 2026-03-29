"use client";

import { motion } from "framer-motion";

import type { HTMLMotionProps } from "framer-motion";

type ServiceCardProps = {
  icon?: string;
  title: string;
  description: string;
  highlights?: string[];
} & HTMLMotionProps<"div">;

export default function ServiceCard({
  title,
  description,
  icon,
  highlights,
  ...motionProps
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        boxShadow: "0 18px 38px -22px rgba(31, 86, 179, 0.45)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="crm-card-surface group cursor-pointer rounded-xl p-6"
      {...motionProps}
    >
      <div className="crm-card-icon text-3xl text-[color:var(--brand-blue)] transition-colors duration-300">
        {icon}
      </div>
      <h3 className="crm-card-heading mt-4 text-xl font-semibold text-[color:var(--brand-blue)] transition-colors duration-300">
        {title}
      </h3>
      <p className="crm-card-body mt-3 text-base leading-relaxed text-slate-700 transition-colors duration-300">
        {description}
      </p>
      {!!highlights?.length && (
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 transition-colors duration-300">
          {highlights.map((item) => (
            <li key={item} className="crm-card-body flex items-start gap-2">
              <span className="crm-card-dot mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-blue)] transition-colors duration-300" />
              <span className="crm-card-body">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
