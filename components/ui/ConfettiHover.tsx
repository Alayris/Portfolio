"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  angle: (i / 20) * 360 + Math.random() * 18,
  distance: 90 + Math.random() * 65,
  size: 0.8 + Math.random() * 1.8,
  delay: Math.random() * 0.25,
}));

export function ConfettiHover({ children, className, style }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ position: "relative", display: "inline-block", ...style }}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && PARTICLES.map((p) => {
          const rad = (p.angle * Math.PI) / 180;
          const tx = Math.cos(rad) * p.distance;
          const ty = Math.sin(rad) * p.distance;
          return (
            <motion.span
              key={p.id}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 1, 0], x: tx, y: ty, scale: p.size }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, delay: p.delay, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                pointerEvents: "none",
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "1.7rem",
                color: "var(--title)",
                transform: "translate(-50%, -50%)",
                userSelect: "none",
                zIndex: 50,
              }}
            >
              *
            </motion.span>
          );
        })}
      </AnimatePresence>
      {children}
    </div>
  );
}
