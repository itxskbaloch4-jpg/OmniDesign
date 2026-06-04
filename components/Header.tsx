"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Progress bar */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* Custom cursor */}
      <CursorFollower />

      <header
        className="site-header"
        style={{ background: scrolled ? undefined : "transparent", borderBottomColor: scrolled ? undefined : "transparent" }}
      >
        <Link href="/" className="header-logo" style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1.3rem", textDecoration: "none", color: "var(--text)" }}>
          SK Baloch
        </Link>

        <nav className="site-nav" style={{ display: "flex", gap: "2rem" }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{ color: "var(--muted)", textDecoration: "none", fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: "0.9rem", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >{l.label}</Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button onClick={toggleTheme} className="theme-btn" aria-label="Toggle theme"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)", width: 38, height: 38, borderRadius: "50%", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: "5px", padding: "4px" }}
          >
            <span style={{ width: 22, height: 2, background: "var(--text)", display: "block", transition: "transform 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ width: 22, height: 2, background: "var(--text)", display: "block", opacity: menuOpen ? 0 : 1, transition: "opacity 0.3s" }} />
            <span style={{ width: 22, height: 2, background: "var(--text)", display: "block", transition: "transform 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>
      </header>

      <style>{`
        @media (max-width: 768px) {
          .site-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>

      {/* Mobile nav */}
      <nav className={`mobile-nav${menuOpen ? " open" : ""}`}>
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
            style={{ color: "var(--text)", textDecoration: "none", fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
            {l.label}
          </Link>
        ))}
      </nav>
    </>
  );
}

function CursorFollower() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; dot.style.left = mx + "px"; dot.style.top = my + "px"; };
    window.addEventListener("mousemove", onMove);
    const animate = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      requestAnimationFrame(animate);
    };
    animate();
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  );
}
