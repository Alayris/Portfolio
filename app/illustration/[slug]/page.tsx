"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { illustrations } from "@/lib/projects-illustration";

function isVideo(src: string) {
  const lower = src.toLowerCase();
  return lower.endsWith(".mp4") || lower.endsWith(".webm") || lower.endsWith(".mov");
}

function MediaBlock({ src, alt }: { src: string; alt: string }) {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "auto", display: "block" }}
    />
  );
}

export default function IllustrationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const illus = illustrations.find(i => i.slug === slug);
  if (!illus) notFound();

  const currentIndex = illustrations.findIndex(i => i.slug === slug);
  const prev = illustrations[currentIndex - 1] ?? null;
  const next = illustrations[currentIndex + 1] ?? null;

  return (
    <main style={{ backgroundColor: "var(--bg)", minHeight: "100vh" }}>

      {/* ── En-tête ── */}
      <section className="px-8 md:px-14 pt-36 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div
            className="flex items-center gap-2 mb-8"
            style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.68rem", color: "var(--muted)" }}
          >
            <Link href="/illustration" className="hover:opacity-60 transition-opacity">Illustration</Link>
            <span>→</span>
            <span style={{ color: "var(--body-text)" }}>
              {String(illus.index).padStart(2, "0")}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 7vw, 7rem)",
              color: "var(--title)",
              lineHeight: 0.95,
            }}
          >
            {String(illus.index).padStart(2, "0")}
          </h1>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-px mt-10"
          style={{ backgroundColor: "var(--title)", opacity: 0.15 }}
        />
      </section>

      {/* ── Galerie ── */}
      <section className="px-8 md:px-14 pb-24">

        {/* Layout spécifique illustration 9 : 3 vidéos côte à côte */}
        {illus.slug === "illustration-9" ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {illus.images.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
              >
                <MediaBlock src={src} alt={`Illustration ${illus.index} — ${i + 1}`} />
              </motion.div>
            ))}
          </div>

        ) : illus.slug === "illustration-2" ? (
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <MediaBlock src={illus.images[0]} alt={`Illustration ${illus.index} — 1`} />
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {illus.images.slice(1).map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                >
                  <MediaBlock src={src} alt={`Illustration ${illus.index} — ${i + 2}`} />
                </motion.div>
              ))}
            </div>
          </div>

        ) : illus.slug === "illustration-3" ? (
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <MediaBlock src={illus.images[0]} alt={`Illustration ${illus.index} — 1`} />
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {illus.images.slice(1).map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                >
                  <MediaBlock src={src} alt={`Illustration ${illus.index} — ${i + 2}`} />
                </motion.div>
              ))}
            </div>
          </div>

        ) : (
          /* Layout par défaut : tout en pleine largeur empilé */
          <div className="space-y-4">
            {illus.images.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
              >
                <MediaBlock src={src} alt={`Illustration ${illus.index} — ${i + 1}`} />
              </motion.div>
            ))}
          </div>
        )}

      </section>

      {/* ── Navigation ── */}
      <nav
        className="px-8 md:px-14 py-10 flex justify-between items-center"
        style={{ borderTop: "1px solid rgba(75,6,60,0.12)" }}
      >
        {prev ? (
          <Link href={`/illustration/${prev.slug}`} className="group flex flex-col gap-1">
            <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--muted)" }}>
              ← Précédente
            </span>
            <span
              className="group-hover:opacity-60 transition-opacity"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: "1.3rem", color: "var(--title)" }}
            >
              {String(prev.index).padStart(2, "0")}
            </span>
          </Link>
        ) : <div />}

        <Link
          href="/illustration"
          style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.68rem", color: "var(--muted)" }}
          className="hover:opacity-60 transition-opacity"
        >
          Toutes les illustrations
        </Link>

        {next ? (
          <Link href={`/illustration/${next.slug}`} className="group flex flex-col gap-1 text-right">
            <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--muted)" }}>
              Suivante →
            </span>
            <span
              className="group-hover:opacity-60 transition-opacity"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: "1.3rem", color: "var(--title)" }}
            >
              {String(next.index).padStart(2, "0")}
            </span>
          </Link>
        ) : <div />}
      </nav>

    </main>
  );
}
