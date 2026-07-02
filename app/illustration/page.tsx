"use client";

import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { illustrations, Illustration } from "@/lib/projects-illustration";

/* ── Helpers ── */
function isVideo(src: string) {
  const lower = src.toLowerCase();
  return lower.endsWith(".mp4") || lower.endsWith(".webm") || lower.endsWith(".mov");
}

/* Affichage pleine largeur — pour les grilles multi-images */
function MediaBlock({ src, alt }: { src: string; alt: string }) {
  if (isVideo(src)) {
    return (
      <video src={src} autoPlay loop muted playsInline
        style={{ width: "100%", height: "auto", display: "block" }} />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} style={{ width: "100%", height: "auto", display: "block" }} />
  );
}

/* Affichage contraint par la hauteur de la box — pour les images seules */
const FIT_MAX_H = "calc(95vh - 130px)";
function FitMedia({ src, alt }: { src: string; alt: string }) {
  if (isVideo(src)) {
    return (
      <video src={src} autoPlay loop muted playsInline style={{
        maxWidth: "100%", maxHeight: FIT_MAX_H, width: "auto", height: "auto",
        display: "block", margin: "0 auto",
      }} />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} style={{
      maxWidth: "100%", maxHeight: FIT_MAX_H, width: "auto", height: "auto",
      display: "block", margin: "0 auto",
    }} />
  );
}

/* ── Galerie avec layouts spécifiques ── */
function IllusGallery({ illus }: { illus: Illustration }) {

  /* illustration 9 — 3 vidéos côte à côte */
  if (illus.slug === "illustration-9") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {illus.images.map((src, i) => (
          <MediaBlock key={i} src={src} alt={`Illustration ${illus.index} — ${i + 1}`} />
        ))}
      </div>
    );
  }

  /* illustration 2 — image principale contrainte + 2 côte à côte */
  if (illus.slug === "illustration-2") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <FitMedia src={illus.images[0]} alt={`Illustration ${illus.index} — 1`} />
        <div className="grid grid-cols-2 gap-3">
          {illus.images.slice(1).map((src, i) => (
            <MediaBlock key={i} src={src} alt={`Illustration ${illus.index} — ${i + 2}`} />
          ))}
        </div>
      </div>
    );
  }

  /* illustration 3 — vidéo pleine largeur + 3 images côte à côte */
  if (illus.slug === "illustration-3") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <MediaBlock src={illus.images[0]} alt={`Illustration ${illus.index} — 1`} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {illus.images.slice(1).map((src, i) => (
            <MediaBlock key={i} src={src} alt={`Illustration ${illus.index} — ${i + 2}`} />
          ))}
        </div>
      </div>
    );
  }

  /* illustration 12 — 2 images côte à côte, même hauteur (12.png:3840×4160 / 00000001:1728×2208) */
  if (illus.slug === "illustration-12") {
    return (
      <div>
        <FitMedia src={illus.images[0]} alt={`Illustration ${illus.index} — 1`} />
      </div>
    );
  }

  /* illustration 8 — 4 images en grille 2×2 */
  if (illus.slug === "illustration-8") {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
        {illus.images.map((src, i) => (
          <MediaBlock key={i} src={src} alt={`Illustration ${illus.index} — ${i + 1}`} />
        ))}
      </div>
    );
  }

  /* layout par défaut — image unique contrainte à la hauteur de la box */
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <FitMedia src={illus.images[0]} alt={`Illustration ${illus.index} — 1`} />
    </div>
  );
}

/* ── Lightbox ── */
function Lightbox({ openIndex, setOpenIndex, onClose }: {
  openIndex: number;
  setOpenIndex: (i: number) => void;
  onClose: () => void;
}) {
  const illus = illustrations[openIndex];
  const hasPrev = openIndex > 0;
  const hasNext = openIndex < illustrations.length - 1;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")      onClose();
      if (e.key === "ArrowLeft"  && hasPrev) setOpenIndex(openIndex - 1);
      if (e.key === "ArrowRight" && hasNext) setOpenIndex(openIndex + 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, openIndex, setOpenIndex, hasPrev, hasNext]);

  /* Bloquer le scroll de la page derrière sans bloquer celui de la box */
  useEffect(() => {
    const preventWheel = (e: WheelEvent) => { e.preventDefault(); };
    window.addEventListener("wheel", preventWheel, { passive: false });
    return () => { window.removeEventListener("wheel", preventWheel); };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        backgroundColor: "rgba(235, 232, 220, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.75rem",
      }}
    >
      {/* Box principale */}
      <motion.div
        key={openIndex}
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        onClick={e => e.stopPropagation()}
        style={{
          backgroundColor: "var(--bg)",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "1400px",
          maxHeight: "95vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 40px 100px rgba(0,0,0,0.16), 0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        {/* En-tête */}
        <div className="px-4 py-3 sm:px-7 sm:py-5" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(75,6,60,0.08)",
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
            <span style={{
              fontFamily: "var(--font-display)", fontStyle: "italic",
              fontWeight: 700, fontSize: "1.5rem", color: "var(--title)",
            }}>
              {String(illus.index).padStart(2, "0")}
            </span>
          </div>

          <div className="gap-3 sm:gap-6" style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={() => hasPrev && setOpenIndex(openIndex - 1)}
              disabled={!hasPrev}
              className="text-[0.6rem] sm:text-[0.65rem]"
              style={{
                fontFamily: "var(--font-body)", fontStyle: "italic",
                color: "var(--title)", opacity: hasPrev ? 0.5 : 0.18,
                background: "none", border: "none",
                cursor: hasPrev ? "pointer" : "default",
                transition: "opacity 0.2s",
                padding: 0,
              }}
            >← précédente</button>
            <button
              onClick={() => hasNext && setOpenIndex(openIndex + 1)}
              disabled={!hasNext}
              className="text-[0.6rem] sm:text-[0.65rem]"
              style={{
                fontFamily: "var(--font-body)", fontStyle: "italic",
                color: "var(--title)", opacity: hasNext ? 0.5 : 0.18,
                background: "none", border: "none",
                cursor: hasNext ? "pointer" : "default",
                transition: "opacity 0.2s",
                padding: 0,
              }}
            >suivante →</button>
          </div>
        </div>

        {/* Contenu scrollable — seule cette zone défile */}
        <div
          onWheel={e => e.stopPropagation()}
          className="lightbox-scroll p-4 sm:p-7"
          style={{ overflowY: "scroll", maxHeight: "calc(95vh - 68px)", minHeight: 0 }}
        >
          <IllusGallery illus={illus} />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Carte de la grille ── */
function IllustrationCard({ illus, index, onClick }: {
  illus: Illustration;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (index % 4) * 0.07 }}
      className="group"
    >
      <button
        onClick={onClick}
        style={{ display: "block", width: "100%", background: "none", border: "none", padding: 0, cursor: "pointer" }}
      >
        <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: "#e2eabf" }}>
          {illus.cover && (
            <Image
              src={illus.cover}
              alt={`Illustration ${illus.index}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          )}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ backgroundColor: "rgba(75,6,60,0.07)" }}
          />
        </div>
      </button>
    </motion.div>
  );
}

/* ── Page principale ── */
export default function IllustrationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleClose = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    document.documentElement.classList.add("project-page");
    return () => { document.documentElement.classList.remove("project-page"); };
  }, []);

  return (
    <main style={{ backgroundColor: "var(--bg)", minHeight: "100vh" }}>

      {/* En-tête */}
      <section className="px-8 md:px-14 pt-36 pb-12">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.68rem", color: "var(--muted)" }}
        >
          03
        </motion.span>
        <div className="overflow-hidden mt-3">
          <motion.h1
            initial={{ y: "100%" }} animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(3rem, 8vw, 8rem)", color: "var(--title)", lineHeight: 1 }}
          >
            Illustration
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          className="flex items-center gap-3 mt-6"
        >
          <div className="h-px flex-1" style={{ backgroundColor: "var(--title)", opacity: 0.15 }} />
          <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--muted)" }}>
            {illustrations.length} œuvres
          </span>
        </motion.div>
      </section>

      {/* Grille */}
      <section className="px-8 md:px-14 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {illustrations.map((illus, i) => (
            <IllustrationCard
              key={illus.slug}
              illus={illus}
              index={i}
              onClick={() => setOpenIndex(i)}
            />
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>

    </main>
  );
}
