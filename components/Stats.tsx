"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { num: 20, suffix: "+", label: "Languages", sub: "Projects Delivered" },
  { num: 50, suffix: "+", label: "Satisfied Clients", sub: "Worldwide" },
  { num: 100, suffix: "%", label: "Responsive", sub: "Every Device" },
  { num: 4.9, suffix: "", label: "Trust Score", sub: "★★★★★", isRating: true },
];

function Counter({ target, suffix, isRating }: { target: number; suffix: string; isRating?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(isRating ? parseFloat(current.toFixed(1)) : Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target, isRating]);

  return <div ref={ref} className="stat-num">{isRating ? count.toFixed(1) : count}{suffix}</div>;
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ padding: "4rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}
          className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="glass stat-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Counter target={s.num} suffix={s.suffix} isRating={s.isRating} />
              <div className="stat-label">{s.label}</div>
              <div style={{ color: s.isRating ? "#FFB830" : "var(--a3)", fontSize: "0.73rem", marginTop: 4 }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
