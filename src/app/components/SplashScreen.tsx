"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1.15, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-4"
      >
        <Image src="/itap-logo.png" alt="logo" width={180} height={180} />
        <p className="text-4xl font-bold leading-tight tracking-wide text-slate-900">
          <span className="bg-[linear-gradient(90deg,var(--brand-orange)_0%,var(--brand-red)_45%,var(--brand-blue)_100%)] bg-clip-text text-transparent">
            iTAP
          </span>
          <span className="ml-1 text-slate-700">Technologies</span>
        </p>
      </motion.div>
    </motion.div>
  );
}
