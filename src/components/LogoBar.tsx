"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  { name: "Carrefour", width: "w-28" },
  { name: "Ben's Farmhouse", width: "w-32" },
];

export default function LogoBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-12 bg-white border-b border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-sm text-text-light uppercase tracking-wider font-medium">
            Trusted by food businesses worldwide
          </p>
          <div className="flex items-center gap-10 sm:gap-16">
            {logos.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className={`${logo.width} h-10 flex items-center justify-center`}
              >
                <span className="text-lg sm:text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors select-none">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
