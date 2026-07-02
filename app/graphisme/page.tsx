"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projectsGraphisme } from "@/lib/projects-graphisme";

/* ── Carte projet ─────────────────────────────────────── */
function ProjectCard({
  slug, title, year, type, tags, cover, featured, index,
}: {
  slug: string; title: string; year: string; type: string;
  tags: string[]; cover: string; featured?: boolean; index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.1 }}
      className={featured ? "md:col-span-2" : ""}
    >
      <Link href={`/graphisme/${slug}`} className="group block">

        {/* Visuel */}
        <div
          className="relative overflow-hidden mb-4"
          style={{
            backgroundColor: "#e2eabf",
            aspectRatio: featured ? "4/3" : "16/9",
          }}
        >
          {cover ? (
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            /* Placeholder avec initiales */
            <div className="absolute inset-0 flex items-end justify-between p-5">
              <span style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "var(--title)",
                opacity: 0.15,
                lineHeight: 1,
              }}>
                {title}
              </span>
              <span style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                fontSize: "0.65rem",
                color: "var(--muted)",
              }}>
                {year}
              </span>
            </div>
          )}

          {/* Overlay hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
            style={{ backgroundColor: "rgba(75,6,60,0.07)" }}
          >
            <span style={{
              fontFamily: "var(--font-body)",
              fontStyle: "italic",
              fontSize: "0.7rem",
              color: "#ffffff",
            }}>
              Voir le projet →
            </span>
          </div>
        </div>

        {/* Infos */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              className="group-hover:opacity-60 transition-opacity duration-300"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                color: "var(--title)",
                lineHeight: 1.1,
              }}
            >
              {title}
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.68rem", color: "var(--body-text)", marginTop: "0.25rem" }}>
              {type}
            </p>
          </div>
          <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.68rem", color: "var(--muted)", whiteSpace: "nowrap", paddingTop: "0.2rem" }}>
            {year}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-2">
          {tags.map(tag => (
            <span key={tag} style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.6rem", color: "var(--muted)" }}>
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────── */
export default function GraphismePage() {
  return (
    <main style={{ backgroundColor: "var(--bg)", minHeight: "100vh" }}>

      {/* En-tête */}
      <section className="px-8 md:px-14 pt-36 pb-12">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.68rem", color: "var(--muted)" }}
        >
          02
        </motion.span>

        <div className="overflow-hidden mt-3">
          <motion.h1
            initial={{ y: "100%" }} animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(3rem, 8vw, 8rem)",
              color: "var(--title)",
              lineHeight: 1,
            }}
          >
            Graphisme &amp; D.A.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.75rem", color: "var(--body-text)", marginTop: "1.2rem", maxWidth: "34rem", lineHeight: 1.75 }}
        >
          Direction artistique, identités visuelles et design éditorial. Une approche singulière au croisement du concept et de l&apos;esthétique.
        </motion.p>

        {/* Compteur */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          className="flex items-center gap-3 mt-6"
        >
          <div className="h-px flex-1" style={{ backgroundColor: "var(--title)", opacity: 0.15 }} />
          <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--muted)" }}>
            {projectsGraphisme.length} projets
          </span>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          GRILLE ÉDITORIALE
          Grand projet + 2 petits empilés verticalement
          Rangées alternent gauche / droite
      ══════════════════════════════════════════════════ */}
      <section className="px-8 md:px-14 pb-32">

        {/* Rangée 1 — Amorcita (grand gauche) | Paratente + Kizuna (empilés droite) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="min-w-0"><ProjectCard {...projectsGraphisme.find(p => p.slug === "amorcita")!} index={0} /></div>
          <div className="flex flex-col gap-4 min-w-0">
            <ProjectCard {...projectsGraphisme.find(p => p.slug === "paratente")!} index={1} />
            <ProjectCard {...projectsGraphisme.find(p => p.slug === "kizuna")!} index={2} />
          </div>
        </div>

        {/* Rangée 2 — GLM + Casa Tierra (empilés gauche) | Bloomist (grand droite) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="flex flex-col gap-4 min-w-0">
            <ProjectCard {...projectsGraphisme.find(p => p.slug === "glm")!} index={3} />
            <ProjectCard {...projectsGraphisme.find(p => p.slug === "casa-tierra")!} index={4} />
          </div>
          <div className="min-w-0"><ProjectCard {...projectsGraphisme.find(p => p.slug === "bloomist")!} index={5} /></div>
        </div>

        {/* Rangée 3 — Cëra (grand gauche) | Inkverse + Greendex (empilés droite) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="min-w-0"><ProjectCard {...projectsGraphisme.find(p => p.slug === "cera")!} index={6} /></div>
          <div className="flex flex-col gap-4 min-w-0">
            <ProjectCard {...projectsGraphisme.find(p => p.slug === "inkverse")!} index={7} />
            <ProjectCard {...projectsGraphisme.find(p => p.slug === "greendex")!} index={8} />
          </div>
        </div>

        {/* Rangée 4 — Nuit de l'Icart + Sense (empilés gauche) | Vera (droite) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="flex flex-col gap-4 min-w-0">
            <ProjectCard {...projectsGraphisme.find(p => p.slug === "nuit-de-licart")!} index={9} />
            <ProjectCard {...projectsGraphisme.find(p => p.slug === "sense-2023")!} index={11} />
          </div>
          <div className="min-w-0"><ProjectCard {...projectsGraphisme.find(p => p.slug === "vera")!} index={10} /></div>
        </div>

      </section>
    </main>
  );
}
