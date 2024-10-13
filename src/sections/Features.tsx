'use client';

import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import productImage from "@/assets/product-image.png";
import {animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition} from 'framer-motion'
import { ComponentProps, ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (props: typeof tabs[number] & ComponentPropsWithoutRef<"div"> & {selected: boolean}) => {
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
  const tabRef = useRef<HTMLDivElement>(null);
  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;
    dotLottieRef.current?.seek(0);
    dotLottieRef.current?.play();
  }

  const xPersentage = useMotionValue(0);
  const yPersentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPersentage}% ${yPersentage}%, white, black, transparent)`

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    xPersentage.set(0);
    yPersentage.set(0);

    const {width, height} = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;


    const times = [0,width / circumference, (width + height) / circumference, (width * 2 + height) / circumference ,1]
    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop'
    }

    animate(xPersentage, [0, 100, 100, 0, 0], options)
    animate(yPersentage, [0, 0, 100, 100, 0], options)
  }, [props.selected]);

  return (
    <div 
    onClick={props.onClick}
    ref={tabRef}
    onMouseEnter={handleTabHover} 
    className="border border-white/15 flex p-2.5 rounded-lg gap-2.5 items-center lg:flex-1 relative"> 

      {props.selected && (
        <motion.div 
        style={{
          maskImage,
        }}
  
        className="absolute inset-0 -m-px border border-[#a369ff] rounded-xl"></motion.div>
      )}
      

      <div className="border h-12 w-12 border-white/15 rounded-lg inline-flex justify-center items-center">
        <DotLottiePlayer ref={dotLottieRef} src={props.icon} className="h-5 w-5" autoplay/>
      </div>
      <div className="font-medium ">
        {props.title}
      </div>
      {props.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">New</div>
      )}
    </div>
  )
}

export const Features = () => {

  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;
  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;

  const handleSelectedTab = (index: number) => {
    setSelectedTab(index);

    const animateOprions: ValueAnimationTransition = {
      duration: 2,
      ease: 'easeInOut',
    }

    animate(backgroundSizeX, [backgroundSizeX.get(),100,tabs[index].backgroundSizeX,], animateOprions);

    animate(backgroundPositionX, [backgroundPositionX.get(),tabs[index].backgroundPositionX,], animateOprions)

    animate(backgroundPositionY, [backgroundPositionY.get(),tabs[index].backgroundPositionY,], animateOprions)
  }

  return (
  <section className="py-20 md:py-24">
    <div className="container">
      <h2 className="section-title">Elevate your SEO efforts.</h2>
      <p className="section-description max-w-2xl mt-5">From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.</p>
      <div className="mt-10 flex flex-col lg:flex-row gap-3">
        {tabs.map((tab, index) => (
          <FeatureTab
          selected={selectedTab === index}
          key={index} 
          onClick={() => handleSelectedTab(index)} 
          {...tab} />
        ))}
      </div>
      <div className="border border-white/20 p-2.5 rounded-xl mt-3">
        <motion.div 

        
        className="aspect-video bg-cover border border-white/20 rounded-lg" 
        
        style={{
          backgroundPosition,
          backgroundSize,
          backgroundImage: `url(${productImage.src})`,
        }}></motion.div>
      </div>
     
    </div>
  </section>);
};
