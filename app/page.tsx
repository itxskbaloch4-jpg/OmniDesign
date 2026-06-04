import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import FloatBtns from "@/components/FloatBtns";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--a1), var(--a2), var(--a3), transparent)", opacity: 0.3 }} />
        <Services />
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--a1), var(--a2), var(--a3), transparent)", opacity: 0.3 }} />
        <WhyUs />
      </main>
      <Footer />
      <FloatBtns />
    </>
  );
}
