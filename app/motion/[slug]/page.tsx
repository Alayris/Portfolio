"use client";

import { notFound } from "next/navigation";
import { use, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectsMotion } from "@/lib/projects-motion";

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

function PrototypeLink({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--title)", border: "1px solid var(--title)", padding: "0.25rem 0.6rem", textDecoration: "none", transition: "opacity 0.2s", display: "inline-block" }}
      className="hover:opacity-60"
    >
      Voir le prototype →
    </a>
  );
}

function isVideo(src: string) {
  return /\.(mp4|webm|mov|MOV)$/i.test(src);
}

function NaturalMedia({ src, alt }: { src: string; alt: string }) {
  if (isVideo(src)) {
    return <video src={src} autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block" }} />;
  }
  return <img src={src} alt={alt} style={{ width: "100%", height: "auto", display: "block" }} />;
}

function JustifiedRow({ items }: { items: { src: string; alt: string; w: number; h: number }[] }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4" style={{ alignItems: "flex-start" }}>
      {items.map(({ src, alt, w, h }, i) => (
        <div key={i} className="w-full sm:w-auto" style={{ flex: `${w / h}`, minWidth: 0 }}>
          <NaturalMedia src={src} alt={alt} />
        </div>
      ))}
    </div>
  );
}

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}>
      {children}
    </motion.div>
  );
}

function GalleryOdeVocabulaire({ images, title }: { images: string[]; title: string }) {
  const m = (i: number) => images[i] ?? null;
  const alt = (i: number) => `${title} — ${i + 1}`;

  return (
    <div className="space-y-4">
      {/* 5 + 4 — côte à côte */}
      {m(3) && m(2) && (
        <Fade>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:flex-1">
              <NaturalMedia src={m(3)!} alt={alt(3)} />
            </div>
            <div className="w-full sm:flex-1">
              <NaturalMedia src={m(2)!} alt={alt(2)} />
            </div>
          </div>
        </Fade>
      )}

      {/* 3 + 2 — côte à côte */}
      {m(1) && m(0) && (
        <Fade>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:flex-1">
              <NaturalMedia src={m(0)!} alt={alt(0)} />
            </div>
            <div className="w-full sm:flex-1">
              <NaturalMedia src={m(1)!} alt={alt(1)} />
            </div>
          </div>
        </Fade>
      )}
    </div>
  );
}

function GalleryRayquaza({ images, title }: { images: string[]; title: string }) {
  const m = (i: number) => images[i] ?? null;
  const alt = (i: number) => `${title} — ${i + 1}`;

  return (
    <div className="space-y-4">

      {/* 1 — vidéo pleine page */}
      {m(0) && <Fade><NaturalMedia src={m(0)!} alt={alt(0)} /></Fade>}

      {/* 2 — pleine page (1441×721) */}
      {m(1) && <Fade><NaturalMedia src={m(1)!} alt={alt(1)} /></Fade>}

      {/* 3 + 4 — même hauteur (3000×3000 / 3520×1980) */}
      <Fade><JustifiedRow items={[
        { src: m(2)!, alt: alt(2), w: 3000, h: 3000 },
        { src: m(3)!, alt: alt(3), w: 3520, h: 1980 },
      ]} /></Fade>

      {/* 5 + 6 — même hauteur (1080×1920 / 3024×4032) */}
      <Fade><JustifiedRow items={[
        { src: m(4)!, alt: alt(4), w: 1080, h: 1920 },
        { src: m(5)!, alt: alt(5), w: 3024, h: 4032 },
      ]} /></Fade>

      {/* 7 — vidéo pleine page */}
      {m(6) && <Fade><NaturalMedia src={m(6)!} alt={alt(6)} /></Fade>}

      {/* 8 + 9 — même hauteur (3000×3000 / 3520×1980) */}
      <Fade><JustifiedRow items={[
        { src: m(7)!, alt: alt(7), w: 3000, h: 3000 },
        { src: m(8)!, alt: alt(8), w: 3520, h: 1980 },
      ]} /></Fade>

      {/* 10 + 11 — même hauteur (4032×3024 / 4961×7016) */}
      <Fade><JustifiedRow items={[
        { src: m(9)!,  alt: alt(9),  w: 4032, h: 3024 },
        { src: m(10)!, alt: alt(10), w: 4961, h: 7016 },
      ]} /></Fade>

      {/* 12 — vidéo pleine page */}
      {m(11) && <Fade><NaturalMedia src={m(11)!} alt={alt(11)} /></Fade>}

      {/* 13 + 14 — même hauteur (3024×3110 / 3245×1749) */}
      <Fade><JustifiedRow items={[
        { src: m(12)!, alt: alt(12), w: 3024, h: 3110 },
        { src: m(13)!, alt: alt(13), w: 3245, h: 1749 },
      ]} /></Fade>

      {/* 15 — pleine page (3000×3000) */}
      {m(14) && <Fade><NaturalMedia src={m(14)!} alt={alt(14)} /></Fade>}

    </div>
  );
}

function MediaItem({ src, alt, full = false }: { src: string; alt: string; full?: boolean }) {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "auto", display: "block", aspectRatio: "16/9", objectFit: "cover" }}
      />
    );
  }
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        className="object-cover"
        sizes={full ? "100vw" : "50vw"}
      />
    </div>
  );
}

export default function MotionProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projectsMotion.find(p => p.slug === slug);
  if (!project) notFound();

  useEffect(() => {
    document.documentElement.classList.add("project-page");
    return () => { document.documentElement.classList.remove("project-page"); };
  }, []);

  const currentIndex = projectsMotion.findIndex(p => p.slug === slug);
  const prev = projectsMotion[currentIndex - 1] ?? null;
  const next = projectsMotion[currentIndex + 1] ?? null;

  return (
    <main style={{ backgroundColor: "var(--bg)", minHeight: "100vh" }}>

      {/* En-tête */}
      <section className="px-8 md:px-14 pt-36 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-2 mb-8" style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.68rem", color: "var(--muted)" }}>
            <Link href="/motion" className="hover:opacity-60 transition-opacity">Motion Design</Link>
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
                  <span key={tag} style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--title)", border: "1px solid var(--title)", opacity: 0.6, padding: "0.25rem 0.6rem" }}>
                    {tag}
                  </span>
                ))}
              </div>
              {project.prototypeUrl && (
                <a
                  href={project.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--title)", border: "1px solid var(--title)", padding: "0.25rem 0.6rem", textDecoration: "none", transition: "opacity 0.2s" }}
                  className="hover:opacity-60"
                >
                  Voir le prototype →
                </a>
              )}
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.4 }}
          className="h-px mt-10" style={{ backgroundColor: "var(--title)", opacity: 0.15 }} />
      </section>

      {/* Description */}
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
          {(project.prototypeUrl || project.guidelinesUrl) && (
            <div className="mt-4 flex flex-wrap gap-3">
              {project.prototypeUrl && <PrototypeLink url={project.prototypeUrl} />}
              {project.guidelinesUrl && <GuidelinesLink url={project.guidelinesUrl} />}
            </div>
          )}
          {project.links && project.links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--title)", border: "1px solid var(--title)", padding: "0.25rem 0.6rem", textDecoration: "none", transition: "opacity 0.2s", display: "inline-block" }}
                  className="hover:opacity-60"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          )}
        </motion.section>
      )}

      {/* YouTube — position haute (projets non-Repli) */}
      {project.youtubeId && slug !== "repli" && (
        <motion.section
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="px-8 md:px-14 pb-14"
        >
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </motion.section>
      )}

      {/* Galerie */}
      {(project.images.length > 0 || !project.youtubeId) && <section className="px-8 md:px-14 pb-20">
        {project.images.length > 0 ? (
          slug === "rayquaza" ? <GalleryRayquaza images={project.images} title={project.title} /> :
          slug === "ode-au-vocabulaire" ? <GalleryOdeVocabulaire images={project.images} title={project.title} /> : (
          <div className="space-y-4">
            <MediaItem src={project.images[0]} alt={`${project.title} — visuel 1`} full />
            {project.images.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.slice(1).map((src, i) => (
                  <MediaItem key={src} src={src} alt={`${project.title} — visuel ${i + 2}`} />
                ))}
              </div>
            )}
          </div>)
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="flex items-center justify-center"
                style={{ backgroundColor: "#e2eabf", aspectRatio: n === 1 ? "16/9" : "16/9", gridColumn: n === 1 ? "1 / -1" : "auto" }}>
                <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--muted)" }}>
                  Visuel {n} — à venir
                </span>
              </div>
            ))}
          </div>
        )}
      </section>}

      {/* Description 2 */}
      {project.description2 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="px-8 md:px-14 pb-14 max-w-3xl"
        >
          {project.description2.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.8rem", color: "var(--body-text)", lineHeight: 1.85, marginBottom: "1rem" }}>
              {para}
            </p>
          ))}
        </motion.section>
      )}

      {/* Galerie 2 */}
      {project.images2 && project.images2.length > 0 && (
        <section className="px-8 md:px-14 pb-20">
          <div className="space-y-4">
            {project.images2.length === 3 ? (
              /* 3 items : grille 3 colonnes égales */
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.images2.map((src, i) => (
                  <MediaItem key={src} src={src} alt={`${project.title} — visuel ${i + 2}`} />
                ))}
              </div>
            ) : (
              /* Cas général : premier pleine largeur, reste en 2 colonnes */
              <>
                <MediaItem src={project.images2[0]} alt={`${project.title} — visuel 10`} full />
                {project.images2.length > 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.images2.slice(1).map((src, i) => (
                      <MediaItem key={src} src={src} alt={`${project.title} — visuel ${i + 11}`} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      )}

      {/* Description 4 — Le jean */}
      {project.description4 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="px-8 md:px-14 pb-14 max-w-3xl"
        >
          {project.description4.split("\n").map((para, i) => (
            <p key={i} style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.8rem", color: "var(--body-text)", lineHeight: 1.85, marginBottom: "1rem" }}>
              {para}
            </p>
          ))}
        </motion.section>
      )}

      {/* Embed YouTube — position Repli uniquement */}
      {project.youtubeId && slug === "repli" && (
        <motion.section
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="px-8 md:px-14 pb-14"
        >
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </motion.section>
      )}

      {/* Description 3 — Les prints */}
      {project.description3 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="px-8 md:px-14 pb-14 max-w-3xl"
        >
          {project.description3.split("\n").map((para, i) => (
            <p key={i} style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.8rem", color: "var(--body-text)", lineHeight: 1.85, marginBottom: "1rem" }}>
              {para}
            </p>
          ))}
        </motion.section>
      )}

      {/* Galerie 3 */}
      {project.images3 && project.images3.length > 0 && (
        <section className="px-8 md:px-14 pb-20">
          {slug === "repli" ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MediaItem src={project.images3[0]} alt={`${project.title} — 18`} />
                <MediaItem src={project.images3[1]} alt={`${project.title} — 19`} />
              </div>
              <MediaItem src={project.images3[2]} alt={`${project.title} — 20`} full />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <MediaItem src={project.images3[3]} alt={`${project.title} — 21`} />
                <MediaItem src={project.images3[4]} alt={`${project.title} — 22`} />
                <MediaItem src={project.images3[5]} alt={`${project.title} — 23`} />
              </div>
              <MediaItem src={project.images3[6]} alt={`${project.title} — 24`} full />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <MediaItem src={project.images3[7]} alt={`${project.title} — 25`} />
                <MediaItem src={project.images3[8]} alt={`${project.title} — 26`} />
                <MediaItem src={project.images3[9]} alt={`${project.title} — 27`} />
              </div>
              <MediaItem src={project.images3[10]} alt={`${project.title} — 28`} full />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MediaItem src={project.images3[11]} alt={`${project.title} — 29`} />
                <MediaItem src={project.images3[12]} alt={`${project.title} — 30`} />
              </div>
            </div>
          ) : (
            /* Grille générique 2 colonnes */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images3.map((src, i) => (
                <MediaItem key={src} src={src} alt={`${project.title} — ${i + 1}`} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Description 5 — Podcast */}
      {project.description5 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="px-8 md:px-14 pb-14 max-w-3xl"
        >
          {project.description5.split("\n").map((para, i) => (
            <p key={i} style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.8rem", color: "var(--body-text)", lineHeight: 1.85, marginBottom: "1rem" }}>
              {para}
            </p>
          ))}
        </motion.section>
      )}

      {/* Galerie 4 — 31 à 34 */}
      {project.images4 && project.images4.length > 0 && (
        <section className="px-8 md:px-14 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images4.map((src, i) => (
              <MediaItem key={src} src={src} alt={`${project.title} — ${i + 31}`} />
            ))}
          </div>
        </section>
      )}

      {/* Description 6 — DA */}
      {project.description6 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="px-8 md:px-14 pb-14 max-w-3xl"
        >
          {project.description6.split("\n\n").map((block, i) => (
            <div key={i} style={{ marginBottom: "1.5rem" }}>
              {block.split("\n").map((para, j) => (
                <p key={j} style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.8rem", color: "var(--body-text)", lineHeight: 1.85, marginBottom: "0.5rem" }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
          {project.guidelinesUrl && (
            <div className="mt-4">
              <GuidelinesLink url={project.guidelinesUrl} />
            </div>
          )}
        </motion.section>
      )}

      {/* Galerie 5 — 35 à 42 */}
      {project.images5 && project.images5.length > 0 && (
        <section className="px-8 md:px-14 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images5.map((src, i) => (
              <MediaItem key={src} src={src} alt={`${project.title} — ${i + 35}`} />
            ))}
          </div>
        </section>
      )}

      {/* Liens bas de page */}
      {(project.prototypeUrl || project.guidelinesUrl) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="px-8 md:px-14 pb-16 flex flex-wrap gap-3"
        >
          {project.prototypeUrl && <PrototypeLink url={project.prototypeUrl} />}
          {project.guidelinesUrl && <GuidelinesLink url={project.guidelinesUrl} />}
        </motion.div>
      )}

      {/* Navigation */}
      <nav className="px-8 md:px-14 py-10 flex justify-between items-center" style={{ borderTop: "1px solid rgba(75,6,60,0.12)" }}>
        {prev ? (
          <Link href={`/motion/${prev.slug}`} className="group flex flex-col gap-1">
            <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--muted)" }}>← Projet précédent</span>
            <span className="group-hover:opacity-60 transition-opacity" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: "1.3rem", color: "var(--title)" }}>
              {prev.title}
            </span>
          </Link>
        ) : <div />}
        <Link href="/motion" style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.68rem", color: "var(--muted)" }} className="hover:opacity-60 transition-opacity">
          Tous les projets
        </Link>
        {next ? (
          <Link href={`/motion/${next.slug}`} className="group flex flex-col gap-1 text-right">
            <span style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "0.65rem", color: "var(--muted)" }}>Projet suivant →</span>
            <span className="group-hover:opacity-60 transition-opacity" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: "1.3rem", color: "var(--title)" }}>
              {next.title}
            </span>
          </Link>
        ) : <div />}
      </nav>

    </main>
  );
}
