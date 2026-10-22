"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
}

// Distance from the viewport top at which a heading counts as "current";
// sits just below the fixed navbar.
const ACTIVE_OFFSET = 140;

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = headings[0]?.id ?? "";
      for (const h of headings) {
        const el = document.getElementById(h.id);
        if (el && el.getBoundingClientRect().top <= ACTIVE_OFFSET) current = h.id;
      }
      setActiveId(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [headings]);

  return (
    <nav aria-label="Table of contents">
      <p className="text-xs font-bold uppercase tracking-wider text-text-light mb-3">
        On this page
      </p>
      <ol className="space-y-0.5 border-l border-border">
        {headings.map((h) => {
          const active = h.id === activeId;
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                aria-current={active ? "location" : undefined}
                className={`block -ml-px border-l-2 py-1.5 pl-3 text-[13px] leading-snug transition-colors ${
                  active
                    ? "border-primary text-primary-dark font-medium"
                    : "border-transparent text-text-light hover:text-foreground hover:border-border"
                }`}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
