"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  useEffect(() => {
    let rafId: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animateTrail = () => {
      setTrail((prev) => ({
        x: lerp(prev.x, pos.x, 0.1),
        y: lerp(prev.y, pos.y, 0.1),
      }));
      rafId = requestAnimationFrame(animateTrail);
    };
    rafId = requestAnimationFrame(animateTrail);
    return () => cancelAnimationFrame(rafId);
  }, [pos]);

  return (
    <>
      {/* Astérisque instantané (suit la souris directement) */}
      <motion.div
        className="fixed z-[9999] pointer-events-none select-none"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          fontFamily: "'Averia Serif Libre', serif",
          fontWeight: 700,
          fontSize: "1.1rem",
          color: "#3b0001",
          lineHeight: 1,
        }}
        animate={{ scale: isHovering ? 1.8 : 1, opacity: isHovering ? 0.4 : 1 }}
        transition={{ duration: 0.2 }}
      >
        *
      </motion.div>
      {/* Astérisque en lag (suit avec délai) */}
      <motion.div
        className="fixed z-[9998] pointer-events-none select-none"
        style={{
          left: trail.x,
          top: trail.y,
          transform: "translate(-50%, -50%)",
          fontFamily: "'Averia Serif Libre', serif",
          fontWeight: 700,
          fontSize: "1.6rem",
          color: "#3b0001",
          lineHeight: 1,
          opacity: 0.25,
        }}
        animate={{ scale: isHovering ? 2.2 : 1 }}
        transition={{ duration: 0.3 }}
      >
        *
      </motion.div>
    </>
  );
}
