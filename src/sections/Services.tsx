"use client";
import Image from "next/image";

import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";


import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import { motion } from "framer-motion";


const services = [
  {
    name: "Web & Mobile Development",
    position: "Responsive Websites & Apps",
    text: "Building sleek, responsive websites with React, TailwindCSS, and Appwrite, plus intuitive mobile apps using React Native. Designed to perform flawlessly across devices.",
    avatar: memojiAvatar1,
  },
  {
    name: "Shopify and Wordpress Development",
    position: "Custom E-Commerce Solutions",
    text: "From custom Shopify store design to product management, app integrations, and performance optimization—I create high-performing e-commerce stores that drive sales.",
    avatar: memojiAvatar2,
  },
  {
    name: "SEO Optimization",
    position: "Boost Your Online Presence",
    text: "Implementing proven SEO strategies to improve visibility, increase traffic, and help your business rank higher on Google for long-term results.",
    avatar: memojiAvatar3,
  },
  {
    name: "Branding & Digital Marketing",
    position: "Creative & Data-Driven Strategies",
    text: "Designing strong brand identities and running targeted ad campaigns across social platforms to help small businesses stand out and grow.",
    avatar: memojiAvatar4,
  },
  {
    name: "Project Management",
    position: "Full-Cycle Development",
    text: "From wireframes to final demos, I manage projects with clear communication, fast turnaround, and tailored solutions aligned with your business goals.",
    avatar: memojiAvatar5,
  },
];


export const ServicesSection = () => {
  return <div className="py-16 lg:py-24">
    <div className="container">
      <SectionHeader
     title="Services Designed for Your Growth"
eyebrow="My Expertise"
description="I specialize in web and mobile development, Shopify solutions, SEO, and branding strategies—crafted to help small businesses and e-commerce brands thrive." 
/>
    </div>
    <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
        <motion.div className="flex gap-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]"
         initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0}}
            transition={{
                ease: "easeInOut",
                duration: 1
                      }}
            viewport={{ once: false, amount: 0.1 }}
          >
          {[...new Array(2)].fill(0).map((_, index)=> (
            <Fragment key={index}>
                  {services.map(service => (
                <Card key={service.name } className="max-w-xs md:p-8 p-6 md:max-w-md hover:rotate-3 transition duration-300">
                  <div className="flex gap-4 items-center">
                    <div className="inline-flex  items-center justify-center size-14 rounded-full flex-shrink-0">
                      <Image src={service.avatar} alt={service.name} className="max-h-full"/>
                    </div>
                    <div>
                      <div className="font-semibold"> {service.name} </div>
                      <div className="text-sm text-white/40"> {service.position} </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm md:text-base md:mt-6"> {service.text} </p>
                </Card>
        
              ))}
            </Fragment>
          ))}
        
        </motion.div>
    </div>
  </div>;
};
