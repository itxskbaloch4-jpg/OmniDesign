export default function Marquee() {
  const items = [
    "HTML5 / CSS3", "JavaScript", "React", "Next.js", "TailwindCSS",
    "GSAP Animations", "Three.js", "Node.js", "Supabase",
    "SEO Optimization", "UI/UX Design", "Multilingual",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="mdot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
