"use client";

import { notFound } from "next/navigation";
import { use, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectsGraphisme } from "@/lib/projects-graphisme";

function GuidelinesLink({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--title)", border: "1px solid var(--title)", padding: "0.25rem 0.6rem", textDecoration: "none", transition: "opacity 0.2s", display: "inline-block" }}
      className="hover:opacity-60"
    >
      Voir la guideline →
    </a>
  );
}

function WebsiteLink({ url }: { url: string }) {
  const label = url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--title)", border: "1px solid var(--title)", padding: "0.25rem 0.6rem", textDecoration: "none", transition: "opacity 0.2s", display: "inline-block" }}
      className="hover:opacity-60"
    >
      {label} →
    </a>
  );
}

function isVideo(src: string) {
  return src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");
}

function Fade({ children, delay = 0, stretch = false }: { children: React.ReactNode; delay?: number; stretch?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.16,1,0.3,1], delay }}
      className="min-w-0"
      style={stretch ? { height: "100%", display: "flex", flexDirection: "column" } : {}}
    >
      {children}
    </motion.div>
  );
}

function Block({ src, alt, ratio = "4/3" }: { src: string; alt: string; ratio?: string }) {
  return (
    <div className="relative overflow-hidden w-full" style={{ aspectRatio: ratio }}>
      <MediaItem src={src} alt={alt} />
    </div>
  );
}

/* Image affichée dans son format d'origine, sans crop */
function NaturalImage({ src, alt }: { src: string; alt: string }) {
  if (isVideo(src)) {
    return (
      <video src={src} autoPlay loop muted playsInline
        style={{ width: "100%", height: "auto", display: "block" }} />
    );
  }
  return (
    <Image src={src} alt={alt} width={1200} height={900}
      style={{ width: "100%", height: "auto", display: "block" }}
      sizes="50vw" />
  );
}

function GalleryNuitIcart({ images, title }: { images: string[]; title: string }) {
  const m = (i: number) => images[i] ?? null;
  const alt = (i: number) => `${title} — ${i + 1}`;

  return (
    <div className="space-y-4">

      {/* 1 + 2 — même hauteur (3508×4961 / 3584×4608) */}
      <Fade><div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-auto" style={{ flexGrow: 3508/4961, flexShrink: 1, flexBasis: 0, minWidth: 0 }}><NaturalImage src={m(0)!} alt={alt(0)} /></div>
        <div className="w-full sm:w-auto" style={{ flexGrow: 3584/4608, flexShrink: 1, flexBasis: 0, minWidth: 0 }}><NaturalImage src={m(1)!} alt={alt(1)} /></div>
      </div></Fade>

      {/* 3 — pleine largeur */}
      {m(2) && <Fade><NaturalImage src={m(2)!} alt={alt(2)} /></Fade>}

      {/* 4 — pleine largeur */}
      {m(3) && <Fade><NaturalImage src={m(3)!} alt={alt(3)} /></Fade>}

      {/* 5 + 6 — même hauteur (3000×2250 / 1920×1080) */}
      <Fade><div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-auto" style={{ flexGrow: 3000/2250, flexShrink: 1, flexBasis: 0, minWidth: 0 }}><NaturalImage src={m(4)!} alt={alt(4)} /></div>
        <div className="w-full sm:w-auto" style={{ flexGrow: 1920/1080, flexShrink: 1, flexBasis: 0, minWidth: 0 }}><NaturalImage src={m(5)!} alt={alt(5)} /></div>
      </div></Fade>

      {/* 7 + 8 — même hauteur (4500×3000 / 1920×1080) */}
      <Fade><div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-auto" style={{ flexGrow: 4500/3000, flexShrink: 1, flexBasis: 0, minWidth: 0 }}><NaturalImage src={m(6)!} alt={alt(6)} /></div>
        <div className="w-full sm:w-auto" style={{ flexGrow: 1920/1080, flexShrink: 1, flexBasis: 0, minWidth: 0 }}><NaturalImage src={m(7)!} alt={alt(7)} /></div>
      </div></Fade>

      {/* 9 — pleine largeur */}
      {m(8) && <Fade><NaturalImage src={m(8)!} alt={alt(8)} /></Fade>}

    </div>
  );
}

function GalleryBloomist({ images, title }: { images: string[]; title: string }) {
  const m = (i: number) => images[i] ?? null;
  const alt = (i: number) => `${title} — ${i + 1}`;

  return (
    <div className="space-y-4">

      {/* 1 — Pleine largeur */}
      {m(0) && <Fade><Block src={m(0)!} alt={alt(0)} ratio="16/9" /></Fade>}

      {/* 2 + 3 — Côte à côte */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
        {m(1) && <Fade delay={0}><NaturalImage src={m(1)!} alt={alt(1)} /></Fade>}
        {m(2) && <Fade delay={0.07}><NaturalImage src={m(2)!} alt={alt(2)} /></Fade>}
      </div>

      {/* 4 — Pleine largeur */}
      {m(3) && <Fade><Block src={m(3)!} alt={alt(3)} ratio="16/9" /></Fade>}

      {/* 5 + 6 — Côte à côte */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
        {m(4) && <Fade delay={0}><NaturalImage src={m(4)!} alt={alt(4)} /></Fade>}
        {m(5) && <Fade delay={0.07}><NaturalImage src={m(5)!} alt={alt(5)} /></Fade>}
      </div>

      {/* 7 + 9 empilés à côté du 8 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
        <div className="flex flex-col gap-4 min-w-0">
          {m(6) && <Fade delay={0}><NaturalImage src={m(6)!} alt={alt(6)} /></Fade>}
          {m(8) && <Fade delay={0.07}><NaturalImage src={m(8)!} alt={alt(8)} /></Fade>}
        </div>
        {m(7) && (
          <Fade delay={0.05} stretch>
            <div className="relative overflow-hidden w-full flex-1" style={{ minHeight: "200px" }}>
              <MediaItem src={m(7)!} alt={alt(7)} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </Fade>
        )}
      </div>

      {/* 10 — Vidéo pleine largeur */}
      {m(9) && isVideo(m(9)!) && (
        <Fade>
          <video src={m(9)!} autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block" }} />
        </Fade>
      )}

    </div>
  );
}

function GalleryCera({ images, title }: { images: string[]; title: string }) {
  const m = (i: number) => images[i] ?? null;
  const alt = (i: number) => `${title} — ${i + 1}`;

  return (
    <div className="space-y-4">

      {/* 1 — Pleine largeur */}
      {m(0) && <Fade><NaturalImage src={m(0)!} alt={alt(0)} /></Fade>}

      {/* 2 + 3 — Colonnes proportionnelles (2≈4:3, 3≈16:9 → ratio 16:9 vs 4:3 → cols 16:12) */}
      <div className="grid grid-cols-1 sm:grid-cols-[16fr_12fr] gap-4" style={{ alignItems: "stretch" }}>
        {m(1) && (
          <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
            <img src={m(1)!} alt={alt(1)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        )}
        {m(2) && (
          <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
            <img src={m(2)!} alt={alt(2)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        )}
      </div>

      {/* 4 5 6 7 — 4 colonnes, format d'origine */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-start">
        {[3,4,5,6].map((i, j) => m(i) && (
          <Fade key={i} delay={j * 0.07}><NaturalImage src={m(i)!} alt={alt(i)} /></Fade>
        ))}
      </div>

      {/* 8 — Pleine largeur */}
      {m(7) && <Fade><NaturalImage src={m(7)!} alt={alt(7)} /></Fade>}

      {/* 9 — Pleine largeur */}
      {m(8) && <Fade><NaturalImage src={m(8)!} alt={alt(8)} /></Fade>}

      {/* 10 + 11 — Même hauteur (base = ratio 4:3 de l'image 10) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
        {m(9)  && <Fade delay={0}><Block src={m(9)!}  alt={alt(9)}  ratio="4/3" /></Fade>}
        {m(10) && <Fade delay={0.07}><Block src={m(10)!} alt={alt(10)} ratio="4/3" /></Fade>}
      </div>

      {/* 12 — Pleine largeur */}
      {m(11) && <Fade><NaturalImage src={m(11)!} alt={alt(11)} /></Fade>}

    </div>
  );
}

function GalleryInkverse({ images, title }: { images: string[]; title: string }) {
  const m = (i: number) => images[i] ?? null;
  const alt = (i: number) => `${title} — ${i + 1}`;

  return (
    <div className="space-y-4">

      {/* 1 — Pleine largeur */}
      {m(0) && <Fade><NaturalImage src={m(0)!} alt={alt(0)} /></Fade>}

      {/* 2 + 3 — Même hauteur, même ratio 3:2 → colonnes égales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {m(1) && (
          <div style={{ aspectRatio: "3/2", overflow: "hidden" }}>
            <img src={m(1)!} alt={alt(1)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        )}
        {m(2) && (
          <div style={{ aspectRatio: "3/2", overflow: "hidden" }}>
            <img src={m(2)!} alt={alt(2)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        )}
      </div>

      {/* 4 + 5 — Colonnes proportionnelles aux ratios (16:9 + 2:3)
          Calcul : même hauteur H → col1=H×16/9, col2=H×2/3 → ratio 16:6
          Résultat : image 5 s'affiche en entier sans crop */}
      <div className="grid grid-cols-1 sm:grid-cols-[16fr_6fr] gap-4" style={{ alignItems: "stretch" }}>
        {m(3) && (
          <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
            <img src={m(3)!} alt={alt(3)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        )}
        {m(4) && (
          <div style={{ aspectRatio: "2/3", overflow: "hidden" }}>
            <img src={m(4)!} alt={alt(4)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        )}
      </div>

      {/* 6 — Pleine largeur */}
      {m(5) && <Fade><NaturalImage src={m(5)!} alt={alt(5)} /></Fade>}

      {/* 7 + 8 + 9 — Même hauteur, même ratio 3:2 → 3 colonnes égales */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[6, 7, 8].map(i => m(i) && (
          <div key={i} style={{ aspectRatio: "3/2", overflow: "hidden" }}>
            <img src={m(i)!} alt={alt(i)} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        ))}
      </div>

      {/* 10 — Vidéo pleine largeur */}
      {m(9) && isVideo(m(9)!) && (
        <Fade>
          <video src={m(9)!} autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block" }} />
        </Fade>
      )}

    </div>
  );
}

/* Rendu naturel (sans crop) pour images ET vidéos dans les grilles */
function NaturalMedia({ src, alt }: { src: string; alt: string }) {
  if (isVideo(src)) {
    return <video src={src} autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block" }} />;
  }
  return <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />;
}

/* Rangée flex justifiée — même hauteur, ratio naturel, aucun recadrage.
   Chaque item est un div simple (pas motion.div) avec flex proportionnel au ratio. */
function JustifiedRow({ items, delay = 0 }: {
  items: { src: string; alt: string; w: number; h: number }[];
  delay?: number;
}) {
  return (
    <Fade delay={delay}>
      <div className="flex flex-col sm:flex-row gap-4" style={{ alignItems: "flex-start" }}>
        {items.map(({ src, alt, w, h }, i) => (
          <div key={i} className="w-full sm:w-auto" style={{ flex: `${w / h}`, minWidth: 0 }}>
            {isVideo(src)
              ? <video src={src} autoPlay loop muted playsInline style={{ width: "100%", display: "block" }} />
              : <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
            }
          </div>
        ))}
      </div>
    </Fade>
  );
}

function GalleryVera({ images, title }: { images: string[]; title: string }) {
  // index → fichier
  // 0:1.png 1:2.mp4 2:3.png 3:4.mp4 4:5.png 5:6.png 6:7.png 7:8.2.mp4
  // 8:8.png 9:9.png 10:10.png 11:11.png 12:12.png 13:12.2.png
  // 14:13.png 15:14.mp4 16:15.png 17:16.png 18:17.png 19:18.mp4
  const m = (i: number) => images[i] ?? null;
  const alt = (i: number) => `${title} — ${i + 1}`;

  return (
    <div className="space-y-4">

      {/* 1, 2, 3 — pleine largeur */}
      {m(0)  && <Fade><NaturalImage src={m(0)!}  alt={alt(0)}  /></Fade>}
      {m(1)  && <Fade><NaturalImage src={m(1)!}  alt={alt(1)}  /></Fade>}
      {m(2)  && <Fade><NaturalImage src={m(2)!}  alt={alt(2)}  /></Fade>}

      {/* 5 + 6 — même hauteur, pleine largeur (5:3841×2161 | 6:4500×3000) */}
      <JustifiedRow items={[
        { src: m(4)!, alt: alt(4), w: 3841, h: 2161 },
        { src: m(5)!, alt: alt(5), w: 4500, h: 3000 },
      ]} />

      {/* 7 — pleine largeur */}
      {m(6)  && <Fade><NaturalImage src={m(6)!}  alt={alt(6)}  /></Fade>}

      {/* 8.2 — pleine largeur */}
      {m(7)  && <Fade><NaturalImage src={m(7)!}  alt={alt(7)}  /></Fade>}

      {/* 8 + 11 — même hauteur, pleine largeur (8:4500×3000 | 11:4490×5612) */}
      <JustifiedRow items={[
        { src: m(8)!,  alt: alt(8),  w: 4500, h: 3000 },
        { src: m(11)!, alt: alt(11), w: 4490, h: 5612 },
      ]} />

      {/* 12.2 — pleine largeur */}
      {m(13) && <Fade><NaturalImage src={m(13)!} alt={alt(13)} /></Fade>}

      {/* 10 + 12 — même hauteur, pleine largeur (10:1920×1080 | 12:3841×2561) */}
      <JustifiedRow items={[
        { src: m(10)!, alt: alt(10), w: 1920, h: 1080 },
        { src: m(12)!, alt: alt(12), w: 3841, h: 2561 },
      ]} />

      {/* 15 + 13 — même hauteur, pleine largeur (15:2161×2701 | 13:3841×2561) */}
      <JustifiedRow items={[
        { src: m(16)!, alt: alt(16), w: 2161, h: 2701 },
        { src: m(14)!, alt: alt(14), w: 3841, h: 2561 },
      ]} />

      {/* 16 — pleine largeur */}
      {m(17) && <Fade><NaturalImage src={m(17)!} alt={alt(17)} /></Fade>}

      {/* 17 + 18 — même hauteur, pleine largeur (17:2161×2701 | 18:1920×1080) */}
      <JustifiedRow items={[
        { src: m(18)!, alt: alt(18), w: 2161, h: 2701 },
        { src: m(19)!, alt: alt(19), w: 1920, h: 1080 },
      ]} />

    </div>
  );
}

function GalleryGLM({ images, title }: { images: string[]; title: string }) {
  const m = (i: number) => images[i] ?? null;
  const alt = (i: number) => `${title} — ${i + 1}`;

  return (
    <div className="space-y-4">

      {/* 1 + 2 — même hauteur (1080x1080 / 4000x3000) */}
      <JustifiedRow items={[
        { src: m(0)!, alt: alt(0), w: 1080, h: 1080 },
        { src: m(1)!, alt: alt(1), w: 4000, h: 3000 },
      ]} />

      {/* 3 — pleine largeur */}
      {m(2) && <Fade><NaturalImage src={m(2)!} alt={alt(2)} /></Fade>}

      {/* 4 + 5 — même hauteur (1193x1686 / 4000x3000) */}
      <JustifiedRow items={[
        { src: m(3)!, alt: alt(3), w: 1193, h: 1686 },
        { src: m(4)!, alt: alt(4), w: 4000, h: 3000 },
      ]} />

      {/* 6 + 7 — même hauteur (1536x2048 / 1536x2048) */}
      <JustifiedRow items={[
        { src: m(5)!, alt: alt(5), w: 1536, h: 2048 },
        { src: m(6)!, alt: alt(6), w: 1536, h: 2048 },
      ]} />

      {/* 8 + 9 — même hauteur (1080x1080 / 4500x3002) */}
      <JustifiedRow items={[
        { src: m(7)!, alt: alt(7), w: 1080, h: 1080 },
        { src: m(8)!, alt: alt(8), w: 4500, h: 3002 },
      ]} />

      {/* 10 + 11 — même hauteur (4000x3000 / 1080x1080) */}
      <JustifiedRow items={[
        { src: m(9)!,  alt: alt(9),  w: 4000, h: 3000 },
        { src: m(10)!, alt: alt(10), w: 1080, h: 1080 },
      ]} />

      {/* 12 — pleine largeur */}
      {m(11) && <Fade><NaturalImage src={m(11)!} alt={alt(11)} /></Fade>}

      {/* 15 — pleine largeur (img natif car fichier > 8 Mo) */}
      {m(14) && (
        <Fade>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={m(14)!} alt={alt(14)} style={{ width: "100%", height: "auto", display: "block" }} />
        </Fade>
      )}

      {/* 13 + 14 — même hauteur (6780x4389 / 6780x4389) */}
      <JustifiedRow items={[
        { src: m(12)!, alt: alt(12), w: 6780, h: 4389 },
        { src: m(13)!, alt: alt(13), w: 6780, h: 4389 },
      ]} />

      {/* 16 — pleine largeur */}
      {m(15) && <Fade><NaturalImage src={m(15)!} alt={alt(15)} /></Fade>}

      {/* 17 + 18 — même hauteur (5472x3648 / 5472x3505) */}
      <JustifiedRow items={[
        { src: m(16)!, alt: alt(16), w: 5472, h: 3648 },
        { src: m(17)!, alt: alt(17), w: 5472, h: 3505 },
      ]} />

      {/* 19 — pleine largeur */}
      {m(18) && <Fade><NaturalImage src={m(18)!} alt={alt(18)} /></Fade>}

      {/* 21 — pleine largeur (vidéo) */}
      {m(20) && <Fade><NaturalImage src={m(20)!} alt={alt(20)} /></Fade>}

      {/* 22 — pleine largeur */}
      {m(21) && <Fade><NaturalImage src={m(21)!} alt={alt(21)} /></Fade>}

      {/* 23 + 24 — même hauteur (4987x3648 / 5472x2696) */}
      <JustifiedRow items={[
        { src: m(22)!, alt: alt(22), w: 4987, h: 3648 },
        { src: m(23)!, alt: alt(23), w: 5472, h: 2696 },
      ]} />

    </div>
  );
}

function GalleryAmorcita({ images, title }: { images: string[]; title: string }) {
  const m = (i: number) => images[i] ?? null;
  const alt = (i: number) => `${title} — ${i + 1}`;

  return (
    <div className="space-y-4">

      {/* 1 — Pleine largeur */}
      {m(0) && <Fade><NaturalImage src={m(0)!} alt={alt(0)} /></Fade>}

      {/* 2 + 3 — même hauteur (2164x2707 / 2161x2701) */}
      <JustifiedRow items={[
        { src: m(1)!, alt: alt(1), w: 2164, h: 2707 },
        { src: m(2)!, alt: alt(2), w: 2161, h: 2701 },
      ]} />

      {/* 4 + 5 — même hauteur (1224x875 / 1226x875) */}
      <JustifiedRow items={[
        { src: m(3)!, alt: alt(3), w: 1224, h: 875 },
        { src: m(4)!, alt: alt(4), w: 1226, h: 875 },
      ]} />

      {/* 6 + 7 — même hauteur (2166x2702 / 2161x2701) */}
      <JustifiedRow items={[
        { src: m(5)!, alt: alt(5), w: 2166, h: 2702 },
        { src: m(6)!, alt: alt(6), w: 2161, h: 2701 },
      ]} />

      {/* 8 — Pleine largeur */}
      {m(7) && <Fade><NaturalImage src={m(7)!} alt={alt(7)} /></Fade>}

      {/* 9 + 10 — même hauteur (2161x2707 / 2172x2746) */}
      <JustifiedRow items={[
        { src: m(8)!,  alt: alt(8),  w: 2161, h: 2707 },
        { src: m(9)!,  alt: alt(9),  w: 2172, h: 2746 },
      ]} />

      {/* 11 + 12 — même hauteur (5000x3750 / 2008x1299) */}
      <JustifiedRow items={[
        { src: m(10)!, alt: alt(10), w: 5000, h: 3750 },
        { src: m(11)!, alt: alt(11), w: 2008, h: 1299 },
      ]} />

      {/* 13 + 14 — même hauteur (3000x2250 / 2236x2709) */}
      <JustifiedRow items={[
        { src: m(12)!, alt: alt(12), w: 3000, h: 2250 },
        { src: m(13)!, alt: alt(13), w: 2236, h: 2709 },
      ]} />


    </div>
  );
}

function GalleryGreendex({ images, title }: { images: string[]; title: string }) {
  // 0:1.png  1:2.png  2:3.png  3:4.png  4:5.mp4
  // 5:6.png  6:7.png  7:8.mp4  8:9.png
  const m = (i: number) => images[i] ?? null;
  const alt = (i: number) => `${title} — ${i + 1}`;

  return (
    <div className="space-y-4">

      {/* 1 — pleine largeur */}
      {m(0) && <Fade><NaturalImage src={m(0)!} alt={alt(0)} /></Fade>}

      {/* 2 + 3 — même hauteur (3852×2160 / 3841×2169) */}
      <JustifiedRow items={[
        { src: m(1)!, alt: alt(1), w: 3852, h: 2160 },
        { src: m(2)!, alt: alt(2), w: 3841, h: 2169 },
      ]} />

      {/* 4 — pleine largeur */}
      {m(3) && <Fade><NaturalImage src={m(3)!} alt={alt(3)} /></Fade>}

      {/* 5 — vidéo pleine largeur */}
      {m(4) && <Fade><NaturalImage src={m(4)!} alt={alt(4)} /></Fade>}

      {/* 6 + 7 — même hauteur (6147×4221 / 4500×3000) */}
      <JustifiedRow items={[
        { src: m(5)!, alt: alt(5), w: 6147, h: 4221 },
        { src: m(6)!, alt: alt(6), w: 4500, h: 3000 },
      ]} />

      {/* 8 — vidéo pleine largeur, croppée de 3px sur tous les côtés */}
      {m(7) && (
        <Fade>
          <div style={{ overflow: "hidden" }}>
            <video src={m(7)!} autoPlay loop muted playsInline
              style={{ width: "calc(100% + 6px)", height: "auto", display: "block", margin: "-3px" }} />
          </div>
        </Fade>
      )}

      {/* 9 — pleine largeur */}
      {m(8) && <Fade><NaturalImage src={m(8)!} alt={alt(8)} /></Fade>}

    </div>
  );
}

function GalleryCasaTierra({ images, title }: { images: string[]; title: string }) {
  // 0:1.png  1:2.png  2:2.2.png  3:3.png  4:4.png  5:5.png
  // 6:6.png  7:7.jpg  8:8.png    9:9.png  10:10.png 11:11.png 12:12.png 13:13.png
  const m = (i: number) => images[i] ?? null;
  const alt = (i: number) => `${title} — ${i + 1}`;

  return (
    <div className="space-y-4">

      {/* 1 + 2 — même hauteur (3508×2480 / 3840×2652) */}
      <JustifiedRow items={[
        { src: m(0)!, alt: alt(0), w: 3508, h: 2480 },
        { src: m(1)!, alt: alt(1), w: 3840, h: 2652 },
      ]} />

      {/* 2.2 — pleine largeur */}
      {m(2) && <Fade><NaturalImage src={m(2)!} alt={alt(2)} /></Fade>}

      {/* 3 + 4 — même hauteur (3841×2562 / 3840×2560) */}
      <JustifiedRow items={[
        { src: m(3)!, alt: alt(3), w: 3841, h: 2562 },
        { src: m(4)!, alt: alt(4), w: 3840, h: 2560 },
      ]} />

      {/* 5 — pleine largeur */}
      {m(5) && <Fade><NaturalImage src={m(5)!} alt={alt(5)} /></Fade>}

      {/* 6 + 7 — même hauteur (4500×3000 / 5663×3775) */}
      <JustifiedRow items={[
        { src: m(6)!, alt: alt(6), w: 4500, h: 3000 },
        { src: m(7)!, alt: alt(7), w: 5663, h: 3775 },
      ]} />

      {/* 8 + 9 — même hauteur (3000×2250 / 3842×2560) */}
      <JustifiedRow items={[
        { src: m(8)!, alt: alt(8), w: 3000, h: 2250 },
        { src: m(9)!, alt: alt(9), w: 3842, h: 2560 },
      ]} />

      {/* 10 — pleine largeur */}
      {m(10) && <Fade><NaturalImage src={m(10)!} alt={alt(10)} /></Fade>}

      {/* 11 + 12 — même hauteur (3843×2559 / 3508×2480) */}
      <JustifiedRow items={[
        { src: m(11)!, alt: alt(11), w: 3843, h: 2559 },
        { src: m(12)!, alt: alt(12), w: 3508, h: 2480 },
      ]} />

      {/* 13 — pleine largeur */}
      {m(13) && <Fade><NaturalImage src={m(13)!} alt={alt(13)} /></Fade>}

    </div>
  );
}

function GalleryParatente({ images, title }: { images: string[]; title: string }) {
  const m = (i: number) => images[i] ?? null;
  const alt = (i: number) => `${title} — ${i + 1}`;

  return (
    <div className="space-y-4">

      {/* 1 — Pleine largeur */}
      {m(0) && <Fade><NaturalImage src={m(0)!} alt={alt(0)} /></Fade>}

      {/* 2 — Vidéo pleine largeur, format d'origine */}
      {m(1) && <Fade><NaturalImage src={m(1)!} alt={alt(1)} /></Fade>}

      {/* 3 + 4 — même hauteur, ratio naturel, pleine largeur */}
      <JustifiedRow items={[
        { src: m(2)!, alt: alt(2), w: 1351, h: 536  },
        { src: m(3)!, alt: alt(3), w: 2708, h: 4204 },
      ]} />

      {/* 5 + 8 — même hauteur, ratio naturel, pleine largeur */}
      <JustifiedRow items={[
        { src: m(4)!, alt: alt(4), w: 1426, h: 999  },
        { src: m(7)!, alt: alt(7), w: 1170, h: 1634 },
      ]} />

      {/* 6 — Vidéo pleine largeur, format d'origine */}
      {m(5) && <Fade><NaturalImage src={m(5)!} alt={alt(5)} /></Fade>}

      {/* 7 — Pleine largeur */}
      {m(6) && <Fade><NaturalImage src={m(6)!} alt={alt(6)} /></Fade>}

    </div>
  );
}

function GallerySense({ images, title }: { images: string[]; title: string }) {
  // 1:1920×1080  2:4000×3000  3:3508×4961  4:4500×3000  5:1920×1080  6:3000×2250  7:3000×2028
  const m = (i: number) => images[i] ?? null;
  const alt = (i: number) => `${title} — ${i + 1}`;

  return (
    <div className="space-y-4">

      {/* 1 — pleine largeur */}
      {m(0) && <Fade><NaturalImage src={m(0)!} alt={alt(0)} /></Fade>}

      {/* 2 — pleine largeur */}
      {m(1) && <Fade><NaturalImage src={m(1)!} alt={alt(1)} /></Fade>}

      {/* 6 + 3 — même hauteur */}
      <JustifiedRow items={[
        { src: m(5)!, alt: alt(5), w: 3000, h: 2250 },
        { src: m(2)!, alt: alt(2), w: 3508, h: 4961 },
      ]} />

      {/* 4 + 5 — même hauteur */}
      <JustifiedRow items={[
        { src: m(3)!, alt: alt(3), w: 4500, h: 3000 },
        { src: m(4)!, alt: alt(4), w: 1920, h: 1080 },
      ]} />

    </div>
  );
}

function Gallery({ images, title }: { images: string[]; title: string }) {
  const m = (i: number) => images[i] ?? null;
  const alt = (i: number) => `${title} — ${i + 1}`;

  return (
    <div className="space-y-4">

      {/* 1 + 2 — Côte à côte, 1 s'adapte à la hauteur de 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
        {m(0) && (
          <Fade delay={0} stretch>
            <div className="relative overflow-hidden w-full flex-1" style={{ minHeight: "200px" }}>
              <MediaItem src={m(0)!} alt={alt(0)} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </Fade>
        )}
        {m(1) && (
          <Fade delay={0.07}>
            <NaturalImage src={m(1)!} alt={alt(1)} />
          </Fade>
        )}
      </div>

      {/* 3 — Vidéo pleine largeur */}
      {m(2) && (
        <Fade>
          <Block src={m(2)!} alt={alt(2)} ratio="16/9" />
        </Fade>
      )}

      {/* 4 + 5 — Côte à côte */}
      {(m(3) || m(4)) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          {m(3) && <Fade delay={0}><NaturalImage src={m(3)!} alt={alt(3)} /></Fade>}
          {m(4) && <Fade delay={0.07}><NaturalImage src={m(4)!} alt={alt(4)} /></Fade>}
        </div>
      )}

      {/* 6 + 7 — Côte à côte, format d'origine */}
      {(m(5) || m(6)) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          {m(5) && <Fade delay={0}><NaturalImage src={m(5)!} alt={alt(5)} /></Fade>}
          {m(6) && <Fade delay={0.07}><NaturalImage src={m(6)!} alt={alt(6)} /></Fade>}
        </div>
      )}

      {/* 12 — Vidéo format d'origine 1500×400 */}
      {m(11) && (
        <Fade>
          <Block src={m(11)!} alt={alt(11)} ratio="15/4" />
        </Fade>
      )}

      {/* 8 — Pleine largeur */}
      {m(7) && (
        <Fade>
          <Block src={m(7)!} alt={alt(7)} ratio="4/3" />
        </Fade>
      )}

      {/* 9 + 10 — Côte à côte, format d'origine */}
      {(m(8) || m(9)) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          {m(8) && <Fade delay={0}><NaturalImage src={m(8)!} alt={alt(8)} /></Fade>}
          {m(9) && <Fade delay={0.07}><NaturalImage src={m(9)!} alt={alt(9)} /></Fade>}
        </div>
      )}

      {/* 11 — Vidéo pleine largeur */}
      {m(10) && (
        <Fade>
          <Block src={m(10)!} alt={alt(10)} ratio="16/9" />
        </Fade>
      )}

    </div>
  );
}

function MediaItem({ src, alt, className }: { src: string; alt: string; className?: string }) {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-full object-cover ${className ?? ""}`}
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover ${className ?? ""}`}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projectsGraphisme.find(p => p.slug === slug);
  if (!project) notFound();

  useEffect(() => {
    document.documentElement.classList.add("project-page");
    return () => { document.documentElement.classList.remove("project-page"); };
  }, []);

  const currentIndex = projectsGraphisme.findIndex(p => p.slug === slug);
  const prev = projectsGraphisme[currentIndex - 1] ?? null;
  const next = projectsGraphisme[currentIndex + 1] ?? null;

  const [first, ...rest] = project.images;

  return (
    <main style={{ backgroundColor: "var(--bg)", minHeight: "100vh" }}>

      {/* ── En-tête ── */}
      <section className="px-8 md:px-14 pt-36 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-2 mb-8" style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.68rem", color: "var(--muted)" }}>
            <Link href="/graphisme" className="hover:opacity-60 transition-opacity">Graphisme & D.A.</Link>
            <span>→</span>
            <span style={{ color: "var(--body-text)" }}>{project.title}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(2.5rem, 7vw, 7rem)", color: "var(--title)", lineHeight: 0.95 }}>
                {project.title}
              </h1>
              <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.75rem", color: "var(--body-text)", marginTop: "0.75rem" }}>
                {project.type} — {project.year}
              </p>
            </div>
            <div className="flex flex-col gap-3 items-end">
              <div className="flex flex-wrap gap-2 justify-end">
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--title)", border: "1px solid var(--title)", opacity: 0.5, padding: "0.2rem 0.6rem" }}>
                    {tag}
                  </span>
                ))}
              </div>
              {(project.websiteUrl || project.guidelinesUrl || project.instagramUrl) && (
                <div className="flex flex-wrap gap-2 justify-end">
                  {project.websiteUrl && <WebsiteLink url={project.websiteUrl} />}
                  {project.guidelinesUrl && <GuidelinesLink url={project.guidelinesUrl} />}
                  {project.instagramUrl && (
                    <a href={project.instagramUrl} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--title)", border: "1px solid var(--title)", padding: "0.25rem 0.6rem", textDecoration: "none", transition: "opacity 0.2s", display: "inline-block" }}
                      className="hover:opacity-60"
                    >
                      Instagram →
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.4 }}
          className="h-px mt-10" style={{ backgroundColor: "var(--title)", opacity: 0.15 }} />
      </section>

      {/* ── Description ── */}
      {project.description && project.description !== "À compléter." && (
        <motion.section
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="px-8 md:px-14 pb-14 max-w-3xl"
        >
          {project.description.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.8rem", color: "var(--body-text)", lineHeight: 1.85, marginBottom: "1rem" }}>
              {para}
            </p>
          ))}
          {(project.websiteUrl || project.guidelinesUrl || project.instagramUrl) && (
            <div className="mt-4 flex flex-wrap gap-3">
              {project.websiteUrl && <WebsiteLink url={project.websiteUrl} />}
              {project.guidelinesUrl && <GuidelinesLink url={project.guidelinesUrl} />}
              {project.instagramUrl && (
                <a href={project.instagramUrl} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--title)", border: "1px solid var(--title)", padding: "0.25rem 0.6rem", textDecoration: "none", transition: "opacity 0.2s", display: "inline-block" }}
                  className="hover:opacity-60"
                >Instagram →</a>
              )}
            </div>
          )}
        </motion.section>
      )}

      {/* ── Galerie ── */}
      <section className="px-8 md:px-14 pb-24">
        {project.images.length > 0 ? (
          slug === "greendex"    ? <GalleryGreendex   images={project.images} title={project.title} />
            : slug === "casa-tierra" ? <GalleryCasaTierra images={project.images} title={project.title} />
            : slug === "amorcita"  ? <GalleryAmorcita  images={project.images} title={project.title} />
            : slug === "glm"        ? <GalleryGLM       images={project.images} title={project.title} />
            : slug === "bloomist"   ? <GalleryBloomist  images={project.images} title={project.title} />
            : slug === "cera"      ? <GalleryCera      images={project.images} title={project.title} />
            : slug === "inkverse"  ? <GalleryInkverse  images={project.images} title={project.title} />
            : slug === "paratente" ? <GalleryParatente images={project.images} title={project.title} />
            : slug === "vera"      ? <GalleryVera      images={project.images} title={project.title} />
            : slug === "nuit-de-licart" ? <GalleryNuitIcart images={project.images} title={project.title} />
            : slug === "sense-2023"    ? <GallerySense     images={project.images} title={project.title} />
            : <Gallery images={project.images} title={project.title} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1,2,3,4].map(n => (
              <div key={n} className="flex items-center justify-center"
                style={{ backgroundColor: "#e2eabf", aspectRatio: "4/3", gridColumn: n === 1 ? "1/-1" : "auto" }}>
                <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--muted)" }}>
                  Visuel {n} — à venir
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── Liens bas de page ── */}
      {(project.websiteUrl || project.guidelinesUrl || project.instagramUrl) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="px-8 md:px-14 pb-16 flex flex-wrap gap-3"
        >
          {project.websiteUrl && <WebsiteLink url={project.websiteUrl} />}
          {project.guidelinesUrl && <GuidelinesLink url={project.guidelinesUrl} />}
          {project.instagramUrl && (
            <a href={project.instagramUrl} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--title)", border: "1px solid var(--title)", padding: "0.25rem 0.6rem", textDecoration: "none", transition: "opacity 0.2s", display: "inline-block" }}
              className="hover:opacity-60"
            >Instagram →</a>
          )}
        </motion.div>
      )}

      {/* ── Navigation ── */}
      <nav className="px-8 md:px-14 py-10 flex justify-between items-center"
        style={{ borderTop: "1px solid rgba(75,6,60,0.12)" }}>
        {prev ? (
          <Link href={`/graphisme/${prev.slug}`} className="group flex flex-col gap-1">
            <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--muted)" }}>← Projet précédent</span>
            <span className="group-hover:opacity-60 transition-opacity"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: "1.3rem", color: "var(--title)" }}>
              {prev.title}
            </span>
          </Link>
        ) : <div />}

        <Link href="/graphisme"
          style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.68rem", color: "var(--muted)" }}
          className="hover:opacity-60 transition-opacity">
          Tous les projets
        </Link>

        {next ? (
          <Link href={`/graphisme/${next.slug}`} className="group flex flex-col gap-1 text-right">
            <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--muted)" }}>Projet suivant →</span>
            <span className="group-hover:opacity-60 transition-opacity"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: "1.3rem", color: "var(--title)" }}>
              {next.title}
            </span>
          </Link>
        ) : <div />}
      </nav>

    </main>
  );
}
