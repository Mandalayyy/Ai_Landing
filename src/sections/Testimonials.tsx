"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
  <section className="py-20 md:py-24">
    <div className="container">
      <h2 className="section-title">Beyond Expectations.</h2>
      <p className="section-description max-w-sm mx-auto mt-5">Our revolutionary AI SEO tools have transformed our clients' strategies.</p>
      <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div 
        initial = {{
          translateX: "-50%"
        }}
        animate={{
          translateX: "0%"
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: 'linear',
        }}
        className="flex gap-5 pr-5 flex-none">
          {[...testimonials, ...testimonials].map(({text, name, title, avatarImg}, index) => (
            <div className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none" key={index}>
              <div className="text-lg md:text-2xl tracking-tight ">{text}</div>
              
              <div className="flex items-center gap-3 mt-5">
                <div className="relative avatar-overlay">
                  <Image src={avatarImg} alt={name} className="h-11 w-11 rounded-lg grayscale " width={avatarImg.width} height={avatarImg.height} />
                </div>
                
                <div className="">
                  <div >{name}</div>
                  <div className="text-white/50 text-sm ">{title}</div>
                </div>
              
              </div>
            
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>);
};
