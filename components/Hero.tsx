"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { gsap } from "gsap";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bubbles = Array.from({ length: 18 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 60 + 20,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach((b) => {
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, "rgba(79,138,255,0.08)");
        grad.addColorStop(1, "rgba(180,89,255,0.01)");
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        b.x += b.dx; b.y += b.dy;
        if (b.x < -b.r) b.x = canvas.width + b.r;
        if (b.x > canvas.width + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = canvas.height + b.r;
        if (b.y > canvas.height + b.r) b.y = -b.r;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  // GSAP orbit rings
  useEffect(() => {
    gsap.to(".ring-1", { rotation: 360, duration: 20, repeat: -1, ease: "none", transformOrigin: "50% 50%" });
    gsap.to(".ring-2", { rotation: -360, duration: 30, repeat: -1, ease: "none", transformOrigin: "50% 50%" });
    gsap.to(".ring-3", { rotation: 360, duration: 45, repeat: -1, ease: "none", transformOrigin: "50% 50%" });
  }, []);

  return (
    <section className="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: "90px" }}>
      <canvas ref={canvasRef} id="bubble-canvas" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      <div className="nebula-orb orb-1" />
      <div className="nebula-orb orb-2" />
      <div className="nebula-orb orb-3" />
      <div className="dot-grid" />

      <div className="container" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
          className="hero-two-col">

          <div>
            <motion.div className="hero-badge" {...fadeUp(0.1)}>
              Available for Projects Worldwide
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              <span>Crafting Digital</span><br />
              <span className="grad">Experiences That</span><br />
              <span>Convert &amp; Impress</span>
            </motion.h1>

            <motion.p {...fadeUp(0.35)} style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 480 }}>
              Expert in premium web development. Modern, fast, and fully custom websites built to grow your business and captivate your audience worldwide.
            </motion.p>

            <motion.div {...fadeUp(0.5)} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <Link href="/contact" className="btn btn-water">✦ Get a Quote</Link>
              <Link href="/projects" className="btn btn-outline">View Projects →</Link>
            </motion.div>

            <motion.div {...fadeUp(0.65)} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ display: "flex" }}>
                {[
                  { initials: "JM", bg: "linear-gradient(135deg,#4F8AFF,#B459FF)" },
                  { initials: "LR", bg: "linear-gradient(135deg,#00F5C8,#4F8AFF)" },
                  { initials: "KA", bg: "linear-gradient(135deg,#FF5EA0,#FFB830)" },
                  { initials: "+", bg: "linear-gradient(135deg,#B459FF,#00F5C8)" },
                ].map((av) => (
                  <div key={av.initials} className="trust-av" style={{ background: av.bg }}>{av.initials}</div>
                ))}
              </div>
              <div>
                <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>
                  <strong>50+ Clients</strong> trust SK Baloch worldwide
                </div>
                <div style={{ color: "#FFB830", fontSize: "0.74rem", marginTop: 2 }}>★★★★★ 4.9/5</div>
              </div>
            </motion.div>
          </div>

          {/* Right side */}
          <motion.div {...fadeUp(0.3)} style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 400 }}>
            <div className="hero-laptop-img" style={{ position: "relative", zIndex: 2, width: "100%" }}>
              <Image src="/laptop.jpg" alt="SK Baloch projects preview" width={600} height={400} style={{ width: "100%", height: "auto", borderRadius: 20, display: "block" }} priority />
            </div>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 300, height: 300, borderRadius: "50%", background: "var(--a1)", filter: "blur(80px)", opacity: 0.07, pointerEvents: "none" }} />
            <div className="orbit-ring ring-1" style={{ position: "absolute" }} />
            <div className="orbit-ring ring-2" style={{ position: "absolute" }} />
            <div className="orbit-ring ring-3" style={{ position: "absolute" }} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-ind">
        SCROLL
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-two-col { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .orbit-ring { display: none; }
        }
      `}</style>
    </section>
  );
}
