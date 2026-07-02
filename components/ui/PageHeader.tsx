"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ number, title, subtitle }: PageHeaderProps) {
  return (
    <section className="px-8 md:px-16 lg:px-24 pt-40 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.7rem", color: "var(--muted)" }}
          className="block"
        >
          {number}
        </motion.span>

        <div className="overflow-hidden mt-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(3rem, 8vw, 8rem)",
              color: "var(--title)",
              lineHeight: 1,
            }}
          >
            {title}
          </motion.h1>
        </div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.75rem", color: "var(--body-text)", marginTop: "1.5rem", maxWidth: "28rem", lineHeight: 1.7 }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          className="h-px mt-10"
          style={{ backgroundColor: "var(--title)", opacity: 0.25 }}
        />
      </div>
    </section>
  );
}
