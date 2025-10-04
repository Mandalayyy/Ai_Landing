"use client"; // Обов'язково для CSR!

import { useState, useEffect } from "react";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export default function Home() {
  const [mockData, setMockData] = useState<string[]>([]);

  useEffect(() => {
    // Імітація великого обсягу даних на клієнті
    const data = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);
    setMockData(data);
  }, []);

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
