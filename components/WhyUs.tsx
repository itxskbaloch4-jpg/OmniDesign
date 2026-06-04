"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const reasons = [
  { icon: "⚡", title: "Blazing Fast Delivery", desc: "Most projects completed within 3–7 days. We value your time, without cutting corners on quality." },
  { icon: "🎯", title: "Results-Driven Approach", desc: "Every design decision is backed by conversion strategy. We build sites that work, not just look good." },
  { icon: "💬", title: "Clear Communication", desc: "Daily updates, clear milestones, and a dedicated channel so you're never left wondering." },
  { icon: "🛡️", title: "Post-Launch Support", desc: "30-day free support after delivery. Updates, fixes, and guidance included — your investment protected." },
];

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "5rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 3.5rem" }}>
          <motion.div className="section-label" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
            WHY US
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", lineHeight: 1.2 }}>
            The <span className="grad">Right Choice</span> For You
          </motion.h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }} className="whyus-grid">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="glass whyus-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 4 }}
            >
              <div className="whyus-icon">{r.icon}</div>
              <div>
                <h4 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, marginBottom: "0.5rem", fontSize: "1rem" }}>{r.title}</h4>
                <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ textAlign: "center", marginTop: "4rem" }}
        >
          <Link href="/contact" className="btn btn-water" style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}>
            ✦ Start Your Project Today
          </Link>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .whyus-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
