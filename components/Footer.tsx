import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1.3rem" }}>SK Baloch</div>
          <p>Premium website developer crafting digital experiences that convert and impress. Trusted by 50+ clients worldwide with a 4.9/5 trust score.</p>
        </div>
        <div className="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="https://wa.me/923046412577" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href="mailto:itxskbaloch@gmail.com">Email</a></li>
            <li><a href="#">Remote · Ohio · Worldwide</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 SK Baloch. All rights reserved.</span>
        <span style={{ color: "var(--a3)", fontSize: "0.77rem" }}>Built with ♥ &amp; Precision</span>
      </div>
    </footer>
  );
}
