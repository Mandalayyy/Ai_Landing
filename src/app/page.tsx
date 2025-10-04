import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export const dynamic = "force-dynamic"; // Активує SSR

// Імітаційна функція для навантаження
async function fetchMockData() {
  return Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);
}

export default async function Home() {
  const mockData = await fetchMockData();

  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />

      {/* Приховані дані для навантаження */}
      <div style={{ display: "none" }}>
        {mockData.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </>
  );
}
