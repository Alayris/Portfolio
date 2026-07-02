"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ConfettiHover } from "@/components/ui/ConfettiHover";

const links = [
  { href: "/",            label: "Accueil" },
  { href: "/motion",      label: "Motion" },
  { href: "/graphisme",   label: "Graphisme" },
  { href: "/illustration",label: "Illustration" },
  { href: "/about",       label: "À propos" },
];

export default function Navigation() {
  const pathname  = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // La page d'accueil a sa propre nav intégrée
  if (pathname === "/" && !menuOpen) return null;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-16 lg:px-24 py-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "backdrop-blur-sm" : "bg-transparent"
        }`}
        style={{ backgroundColor: scrolled ? "rgba(250,255,230,0.9)" : "transparent" }}
      >
        <ConfettiHover style={{ display: "inline-block", width: "fit-content" }}>
          <Link href="/" className="group">
            <span style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontStyle: "italic",
              color: "var(--title)",
              display: "block",
              lineHeight: 1,
            }}>
              <span style={{ fontSize: "1.15rem", display: "block" }}>Amaris</span>
              <span style={{ fontSize: "1.15rem", display: "block", marginTop: "-0.35em", paddingLeft: "0.9em" }}>Menou</span>
            </span>
          </Link>
        </ConfettiHover>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="relative group">
              <span style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.72rem",
                fontStyle: "italic",
                color: pathname === link.href ? "var(--title)" : "var(--body-text)",
              }}>
                {link.label}
              </span>
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ backgroundColor: "var(--title)" }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Burger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-6"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {[0,1,2].map(i => (
            <motion.span
              key={i}
              animate={
                i === 0 ? (menuOpen ? { rotate: 45,  y: 8  } : { rotate: 0, y: 0 }) :
                i === 1 ? (menuOpen ? { opacity: 0 } : { opacity: 1 }) :
                           (menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 })
              }
              className="block h-px w-full"
              style={{ backgroundColor: "var(--title)" }}
            />
          ))}
        </button>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-10"
            style={{ backgroundColor: "var(--bg)" }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
              >
                <Link href={link.href}>
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 8vw, 3.5rem)",
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: pathname === link.href ? "var(--title)" : "var(--body-text)",
                  }}>
                    {link.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
