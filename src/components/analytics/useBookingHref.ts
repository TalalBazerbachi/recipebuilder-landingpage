"use client";

import { usePathname } from "next/navigation";
import { bookingHref } from "@/lib/booking";

/** The booking link stamped with the page the component is rendered on. */
export function useBookingHref(): string {
  return bookingHref(usePathname() || "/");
}
