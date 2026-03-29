"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import SplashScreen from "./SplashScreen";

export default function SplashGate({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return <>{children}</>;
}
