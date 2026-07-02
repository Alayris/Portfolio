"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import FeaturedProjects from "@/components/FeaturedProjects";
import { ConfettiHover } from "@/components/ui/ConfettiHover";

const navLinks = [
  { href: "/motion",       label: "Motion Design" },
  { href: "/graphisme",    label: "Graphisme & D.A." },
  { href: "/illustration", label: "Illustration" },
  { href: "/about",        label: "À propos" },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const textY  = useTransform(scrollY, [0, 600], [0, -80]);
  const imageY = useTransform(scrollY, [0, 600], [0, 40]);

  return (
    <main
      ref={containerRef}
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "var(--bg)", color: "var(--body-text)", fontFamily: "var(--font-body)" }}
    >
      {/* ── NAV ── */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between md:grid md:grid-cols-3 px-7 pt-6"
      >
        <ConfettiHover style={{ display: "inline-block", width: "fit-content" }}>
          <Link href="/">
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontStyle: "italic", color: "var(--title)", display: "block", lineHeight: 1 }}>
              <span style={{ fontSize: "1.15rem", display: "block" }}>Amaris</span>
              <span style={{ fontSize: "1.15rem", display: "block", marginTop: "-0.35em", paddingLeft: "0.9em" }}>Menou</span>
            </span>
          </Link>
        </ConfettiHover>

        <nav className="hidden md:flex md:flex-col items-center gap-0.5">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}
              style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", fontStyle: "italic", color: "var(--body-text)" }}
              className="hover:opacity-70 transition-opacity duration-200 leading-snug"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex justify-end">
          <a href="mailto:amarismenou@gmail.com"
            style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", fontStyle: "italic", color: "var(--body-text)" }}
            className="hover:opacity-70 transition-opacity duration-200 text-right"
          >
            amarismenou@gmail.com
          </a>
        </div>
      </motion.header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen pt-24 pb-10 overflow-hidden">

        {/* Showreel — droite, derrière le texte */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="absolute top-24 md:top-[174px] right-0 w-[62vw] sm:w-[57vw] max-w-[750px] z-10"
        >
          <div className="relative overflow-hidden" style={{ aspectRatio: "7/5" }}>
            <video
              src="https://res.cloudinary.com/kust8hzr/video/upload/v1782957670/portfolio/images/SHOWREEL_web_z8qtgs.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <Link href="/showreel" className="flex items-center gap-2 mt-3 justify-start hover:opacity-60 transition-opacity duration-200" style={{ position: "relative", zIndex: 50 }}>
            <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.75rem", color: "var(--body-text)" }}>
              showreel
            </span>
            <span style={{ color: "var(--body-text)", fontSize: "0.75rem" }}>→</span>
          </Link>
          <p className="text-right pr-7 leading-none" style={{ marginTop: "clamp(-80px, -10vw, -40px)", position: "relative", zIndex: 10,
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(2rem, 4vw, 4rem)",
            color: "var(--title)",
          }}>
            Menou
          </p>
          <p className="text-right pr-7 leading-none xl:hidden" style={{ marginTop: "0px", position: "relative", zIndex: 30,
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(1.6rem, 3.2vw, 3rem)",
            color: "var(--title)",
          }}>
            Amaris*
          </p>
        </motion.div>

        {/* Titre principal */}
        <motion.div style={{ y: textY }} className="relative z-20 px-7 pt-[260px] md:pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="leading-[0.88]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(4rem, 10vw, 11rem)",
              maxWidth: "90vw",
              color: "var(--title)",
            }}
          >
            SO MANY<br />
            WAYS TO<br />
            TELL A<br />
            STORY*
          </motion.h1>
        </motion.div>

        {/* Amaris* bas droite */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="absolute bottom-14 right-7 hidden xl:block z-30"
        >
          <span style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(2.5rem, 5vw, 5rem)",
            color: "var(--title)",
          }}>
            Amaris*
          </span>
        </motion.div>
      </section>

      {/* ── CATÉGORIES ── */}
      <section className="px-7" style={{ borderTop: "1px solid rgba(75,6,60,0.12)" }}>
        {[
          { href: "/motion",       num: "01", label: "Motion Design",       sub: "Animation 2D · Brand in motion · Expérimentation" },
          { href: "/graphisme",    num: "02", label: "Graphisme & D.A.",     sub: "Branding · Direction artistique · Éditorial" },
          { href: "/illustration", num: "03", label: "Illustration",         sub: "Digitale & traditionnelle" },
          { href: "/about",        num: "04", label: "À propos & Contact",   sub: "Parcours & approche" },
        ].map((cat, i) => (
          <Link key={cat.href} href={cat.href}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group flex items-center justify-between py-6 hover:pl-3 transition-all duration-400"
              style={{ borderBottom: "1px solid rgba(75,6,60,0.12)" }}
            >
              <div className="flex items-baseline gap-6">
                <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.7rem", color: "var(--muted)" }}>
                  {cat.num}
                </span>
                <span
                  className="group-hover:opacity-60 transition-opacity duration-300"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontStyle: "italic",
                    fontSize: "clamp(1.4rem, 3vw, 2.8rem)",
                    color: "var(--title)",
                  }}
                >
                  {cat.label}
                </span>
              </div>
              <div className="flex items-center gap-6">
                <span className="hidden md:block" style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--muted)" }}>
                  {cat.sub}
                </span>
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300"
                  style={{ color: "var(--body-text)" }}>→</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </section>

      <FeaturedProjects />

    </main>
  );
}
