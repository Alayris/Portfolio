"use client";

import Image from "next/image";

export default function AboutPage() {

  return (
    <main style={{
      position: "relative",
      margin: 0,
      padding: 0,
      backgroundImage: "url('https://res.cloudinary.com/kust8hzr/image/upload/v1782983074/portfolio/images/about/about_me4_tdqvgp.png')",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      paddingTop: "198.87%",
    }}>

      {/* ── CARTE DE VISITE ── */}
      <div
        className="hidden md:block"
        style={{
          position: "absolute",
          left: "-2.6%",
          top: "14.4%",
          transform: "translateY(-50%) rotate(-7deg)",
          width: "clamp(360px, 40vw, 540px)",
          zIndex: 20,
        }}
      >
        <Image
          src="https://res.cloudinary.com/kust8hzr/image/upload/v1782957679/portfolio/images/about/CARTE_DE_VISITE3_dpq9ga.png"
          alt="Carte de visite Amaris Menou"
          width={600}
          height={420}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* ── (Amaris* Menou) — haut droite ── */}
      <div
        className="hidden md:block"
        style={{
          position: "absolute",
          top: "2.6%",
          right: "2.6%",
          zIndex: 20,
          textAlign: "right",
          pointerEvents: "none",
        }}
      >
        <p style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontStyle: "italic",
          fontSize: "clamp(2.2rem, 5vw, 5rem)",
          color: "#3b0001",
          lineHeight: 0.95,
        }}>
          (Amaris*<br /><span style={{ position: "relative", top: "-10px", display: "block" }}>Menou)</span>
        </p>
      </div>

    </main>
  );
}
