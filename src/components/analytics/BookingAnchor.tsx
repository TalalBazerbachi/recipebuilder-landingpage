"use client";

import type { ReactNode } from "react";
import { useBookingHref } from "@/components/analytics/useBookingHref";

/** A "Book a call" link for server components that don't know the page path. */
export default function BookingAnchor({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const href = useBookingHref();
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
