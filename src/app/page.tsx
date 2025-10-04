import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

async function getMockData() {
  return Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);
}

export default async function Home() {
  const mockData = await getMockData();

  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />

      {/* Додаємо дані для метрик, але не показуємо */}
      <div style={{ display: "none" }}>
        {mockData.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
    </>
  );
}
