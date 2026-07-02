"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const YOUTUBE_ID = "ZhK2VeArwPY";

export default function ShowreelPage() {
  return (
    <main
      style={{ backgroundColor: "var(--bg)", minHeight: "100vh", color: "var(--body-text)", fontFamily: "var(--font-body)" }}
    >
      {/* ── EN-TÊTE ── */}
      <section className="px-8 md:px-14 pt-36 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-2 mb-8" style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.68rem", color: "var(--muted)" }}>
            <Link href="/" className="hover:opacity-60 transition-opacity">Accueil</Link>
            <span>→</span>
            <span style={{ color: "var(--body-text)" }}>Showreel</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(2.5rem, 7vw, 7rem)", color: "var(--title)", lineHeight: 0.95 }}>
                Showreel
              </h1>
              <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.75rem", color: "var(--body-text)", marginTop: "0.75rem" }}>
                Motion Design — 2026
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.4 }}
          className="h-px mt-10" style={{ backgroundColor: "var(--title)", opacity: 0.15 }} />
      </section>

      {/* ── VIDÉO ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="px-8 md:px-14 pb-20"
      >
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
            title="Showreel Amaris Menou 2026"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
        </div>
      </motion.section>
    </main>
  );
}
