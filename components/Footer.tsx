"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ConfettiHover } from "@/components/ui/ConfettiHover";

function ConfettiButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <ConfettiHover>
      <motion.a
        href={href}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: "inline-block",
          padding: "0.55rem 1.4rem",
          border: "1px solid var(--title)",
          borderRadius: "999px",
          fontStyle: "italic",
          fontSize: "1.05rem",
          color: "var(--title)",
          textDecoration: "none",
          transition: "background 0.2s, color 0.2s",
          position: "relative",
          zIndex: 1,
        }}
        className="hover:bg-[var(--body-text)] hover:text-[var(--bg)] hover:border-[var(--body-text)]"
      >
        {children}
      </motion.a>
    </ConfettiHover>
  );
}

const navLinks = [
  { href: "/motion",       label: "Motion Design" },
  { href: "/graphisme",    label: "Graphisme & D.A." },
  { href: "/illustration", label: "Illustration" },
  { href: "/about",        label: "À propos" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/amaris_menou/?hl=fr",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "https://www.behance.net/amarismenou",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 10.5c.97 0 1.75-.78 1.75-1.75S8.47 7 7.5 7H3v3.5h4.5zm.25 2.5H3V17h5c1.1 0 2-.9 2-2s-.9-2-2-2zm7.75-5h4.5v1H15.5V8zM16 11c-1.66 0-3 1.34-3 3s1.34 3 3 3c1.12 0 2.1-.62 2.62-1.53h-1.74c-.22.33-.58.53-1 .53-.76 0-1.38-.56-1.48-1.3H19c.03-.23.03-.46 0-.7C18.88 12.27 17.6 11 16 11zm-1.2 2.5c.15-.63.72-1.1 1.35-1.1s1.2.47 1.35 1.1h-2.7z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amaris-menou-a2533b252/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@amarismenou",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.8 8s-.2-1.4-.8-2c-.77-.8-1.63-.81-2.02-.86C16.24 5 12 5 12 5s-4.24 0-6.98.14c-.4.05-1.25.06-2.02.86-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.77.8 1.78.77 2.23.85C6.6 18.92 12 19 12 19s4.24 0 6.98-.16c.4-.05 1.25-.06 2.02-.86.6-.6.8-2 .8-2S22 14.3 22 12.7v-1.5C22 9.6 21.8 8 21.8 8zM9.75 14.85v-5.7l6.5 2.86-6.5 2.84z"/>
      </svg>
    ),
  },
];

const EMAIL = "amarismenou@gmail.com";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        backgroundImage: "url('https://res.cloudinary.com/kust8hzr/image/upload/v1782957731/portfolio/images/footer2_us1cgh.jpg')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        fontFamily: "var(--font-body)",
        color: "var(--body-text)",
      }}
    >
      {/* ── Ligne principale ── */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3 items-start px-8 md:px-14 py-16 gap-10 sm:gap-12"
      >
        {/* Gauche — navigation */}
        <nav className="flex flex-col gap-1.5">
          <span
            style={{
              fontStyle: "italic",
              fontSize: "0.75rem",
              color: "var(--muted)",
              letterSpacing: "0.06em",
              marginBottom: "0.5rem",
            }}
          >
            Navigation
          </span>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: "var(--body-text)",
              }}
              className="hover:opacity-60 transition-opacity duration-200 leading-snug"
            >
              {l.label}
            </Link>
          ))}

          <div style={{ marginTop: "1.5rem" }}>
            <span style={{
              fontStyle: "italic",
              fontSize: "0.75rem",
              color: "var(--muted)",
              letterSpacing: "0.06em",
              display: "block",
              marginBottom: "0.5rem",
            }}>
              Ma playlist
            </span>
            <div className="flex flex-col gap-1 items-start">
              <ConfettiHover style={{ width: "fit-content" }}>
                <a
                  href="https://open.spotify.com/playlist/7t9tjSnYR6WqloZhenMiLT?si=8Fgdr1PQTua81CwV_BAoyw"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "1.1rem",
                    fontStyle: "italic",
                    color: "var(--body-text)",
                    textDecoration: "none",
                  }}
                  className="hover:opacity-60 transition-opacity duration-200"
                >
                  Sur Spotify
                </a>
              </ConfettiHover>
              <ConfettiHover style={{ width: "fit-content" }}>
                <a
                  href="https://music.apple.com/fr/playlist/get-to-know-me/pl.u-2aoqP56TNW11d6V"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "1.1rem",
                    fontStyle: "italic",
                    color: "var(--body-text)",
                    textDecoration: "none",
                  }}
                  className="hover:opacity-60 transition-opacity duration-200"
                >
                  Sur Apple Music
                </a>
              </ConfettiHover>
            </div>
          </div>
        </nav>

        {/* Centre — accroche + bouton */}
        <div className="flex flex-col items-center gap-5 text-center">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(1.7rem, 3vw, 2.5rem)",
              color: "var(--title)",
              lineHeight: 1.2,
            }}
          >
            Partant pour<br />travailler ensemble ?
          </p>
          <ConfettiButton href={`mailto:${EMAIL}`}>
            On discute ?
          </ConfettiButton>
        </div>

        {/* Droite — réseaux */}
        <div className="flex flex-col items-end gap-3">
          <span
            style={{
              fontStyle: "italic",
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              marginBottom: "0.25rem",
            }}
            className="text-[#faffe6] sm:text-[var(--muted)]"
          >
            Réseaux
          </span>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1.05rem",
                fontStyle: "italic",
                textDecoration: "none",
              }}
              className="text-[#faffe6] sm:text-[var(--body-text)] hover:opacity-60 transition-opacity duration-200"
            >
              {s.label}
              <span className="opacity-70 text-[#faffe6] sm:text-[var(--muted)]">{s.icon}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ── Email pleine largeur ── */}
      <div>
        <motion.a
          href={`mailto:${EMAIL}`}
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.2 }}
          className="px-4 md:px-8"
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            textDecoration: "none",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(1.4rem, 6vw, 7.5rem)",
            color: "#e2fd8b",
            lineHeight: 1,
            paddingTop: "0.6rem",
            paddingBottom: "0.4rem",
            letterSpacing: "-0.01em",
            wordBreak: "break-word",
          }}
        >
          {EMAIL}
        </motion.a>
      </div>

      {/* ── Mini-footer ── */}
      <div className="px-8 md:px-14 py-5">
        <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.68rem", color: "var(--muted)" }}>
          Nantes — {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
