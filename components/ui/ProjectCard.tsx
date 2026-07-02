"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  tags: string[];
  index: number;
  bgColor?: string;
  aspectRatio?: string;
}

export default function ProjectCard({
  title,
  category,
  year,
  tags,
  index,
  bgColor = "#d6e0b0",
  aspectRatio = "aspect-[4/3]",
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.15 }}
      className="group cursor-none"
      data-cursor-hover
    >
      <div className={`relative ${aspectRatio} overflow-hidden mb-4`} style={{ backgroundColor: bgColor }}>
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "4rem", color: "var(--title)" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundColor: "rgba(75,6,60,0.06)" }} />
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.68rem", color: "var(--title)" }}
            className="px-3 py-1.5" >
            Voir →
          </span>
        </div>
      </div>

      <div className="flex items-start justify-between">
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: "1.2rem", color: "var(--title)" }}
            className="group-hover:opacity-70 transition-opacity duration-300">
            {title}
          </h3>
          <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.68rem", color: "var(--body-text)", marginTop: "0.2rem" }}>
            {category}
          </p>
        </div>
        <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.68rem", color: "var(--muted)", marginTop: "0.2rem" }}>
          {year}
        </span>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span key={tag} style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.62rem", color: "var(--muted)" }}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
