"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { rbPageView } from "@/lib/rb-analytics";

// Sends a page view on first load and on every client-side navigation.
// Runs beside Google Tag Manager and does not touch it.
export default function FirstPartyAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) rbPageView(pathname);
  }, [pathname]);

  return null;
}
