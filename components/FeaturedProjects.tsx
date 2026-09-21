"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const featured = [
  {
    title: "Bloomist",
    year: "2025",
    cover: "https://pub-4844509e4b6a42b0b241ac9656d88a95.r2.dev/images/graphisme/Bloomist.png",
    href: "/graphisme/bloomist",
    objectPosition: "center",
  },
  {
    title: "Inkverse",
    year: "2025",
    cover: "https://pub-4844509e4b6a42b0b241ac9656d88a95.r2.dev/images/graphisme/inkverse/5.png",
    href: "/graphisme/inkverse",
    objectPosition: "center",
  },
  {
    title: "Les saisons",
    year: "2026",
    cover: "https://pub-4844509e4b6a42b0b241ac9656d88a95.r2.dev/images/motion/Les-saisons_upscale.jpg",
    href: "/motion/les-saisons",
    objectPosition: "center",
  },
  {
    title: "Repli",
    year: "2026",
    cover: "https://pub-4844509e4b6a42b0b241ac9656d88a95.r2.dev/images/motion/REPLI/20.png",
    href: "/motion/repli",
    objectPosition: "center",
  },
  {
    title: "Tracks",
    year: "2026",
    cover: "https://pub-4844509e4b6a42b0b241ac9656d88a95.r2.dev/images/tracks.png",
    href: "/motion/tracks",
    objectPosition: "center",
  },
];

function ProjectCard({ project, index }: { project: (typeof featured)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
    >
      <Link href={project.href} className="group block" style={{ textDecoration: "none" }}>
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "3/4", backgroundColor: "#e2eabf" }}
        >
          <Image
            src={project.cover}
            alt={project.title}
            fill
            unoptimized
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: project.objectPosition }}
            sizes="(max-width: 768px) 50vw, 20vw"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ backgroundColor: "rgba(75,6,60,0.07)" }}
          />
        </div>
        <div className="flex justify-between items-baseline mt-2 px-0.5">
          <span style={{
            fontFamily: "var(--font-body)",
            fontStyle: "italic",
            fontSize: "0.75rem",
            color: "var(--body-text)",
          }}>
            {project.title}
          </span>
          <span style={{
            fontFamily: "var(--font-body)",
            fontStyle: "italic",
            fontSize: "0.62rem",
            color: "var(--muted)",
          }}>
            {project.year}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  return (
    <section className="px-8 md:px-14 py-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {featured.map((project, i) => (
          <ProjectCard key={project.href} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
