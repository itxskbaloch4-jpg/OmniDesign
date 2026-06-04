"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  { icon: "🎨", title: "UI/UX Design", desc: "Pixel-perfect interfaces with stunning visual hierarchy, glassmorphism, and agency-level animations that leave lasting impressions." },
  { icon: "⚡", title: "Performance Websites", desc: "Lightning-fast, SEO-optimized websites built with clean code. 100/100 PageSpeed score as standard, not a bonus." },
  { icon: "📱", title: "Mobile-First Development", desc: "Every project is built mobile-first, ensuring flawless experience across all screen sizes and devices." },
  { icon: "🌍", title: "Multilingual Websites", desc: "Projects delivered in 20+ languages. Reach your global audience with professionally localized web experiences." },
  { icon: "🔒", title: "Secure & Scalable", desc: "Backend integrations, secure authentication, and scalable architecture that grows with your business needs." },
  { icon: "🚀", title: "Deployment & Support", desc: "End-to-end deployment on Vercel, Netlify, or your preferred host — with ongoing support and maintenance." },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ padding: "5rem 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 3.5rem" }}>
          <motion.div className="section-label" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
            WHAT WE OFFER
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
            Full-Stack Services in <span className="grad">Web Development</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.7 }}>
            From sleek landing pages to complex web apps — built with precision and performance.
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="glass service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, borderColor: "rgba(79,138,255,0.3)" }}
            >
              <span className="service-icon">{s.icon}</span>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{s.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
