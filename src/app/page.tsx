import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export const dynamic = "force-dynamic"; 

export default async function Home() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json", { cache: "no-store" });
  const data = await res.json();

  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <div className="text-center text-gray-500 p-6 hidden">
        <p>Current BTC rate (SSR example): {data.bpi.USD.rate}</p>
      </div>
      <Footer />
    </>
  );
}
