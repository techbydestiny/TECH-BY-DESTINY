"use client";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion";


import heroimage from '@/assets/images/my-hero-image.png'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from "@/assets/icons/sparkle.svg"

import { HeroOrbit } from "@/components/HeroOrbit";
import { BsArrowRight } from "react-icons/bs";

export const HeroSection = () => {

  const containers = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duratation: 1,
      staggerChildren: 0.1, 
      delayChildren: 0.2,  
    },
  },
};

const showitem = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}>
        </div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className='size-8 text-purple-300/20'/>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className='size-5 text-purple-300/20'/>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="3s">
          <SparkleIcon className='size-10 text-purple-300/20'/>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="6s">
          <StarIcon className='size-12 text-purple-300'/>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className='size-8 text-purple-300'/>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="40s">
          <div className='size-2 rounded-full bg-purple-300/20'/>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className='size-2 rounded-full bg-purple-300/20'/>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className='size-14 text-purple-300/20'/>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className='size-3 rounded-full bg-purple-300/20'/>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className='size-28 text-purple-300'/>
        </HeroOrbit>
      </div>
      <div className='container'>
        <div className="flex flex-col items-center">
          <Image src={heroimage} alt='heroimg' className="size-[100px]"/>
          <div className="bg-gray-950  border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg ">
            <div className="bg-purple-500 size-2.5 rounded-full relative">
              <div className="bg-purple-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Available for new project</div>
          </div>
        </div>

         <div className="max-w-lg mx-auto">
           <h1 className='text-3xl md:text-5xl text-center mt-8 font-serif'> Hello, I'm </h1>
            <h2 className='text-sm md:text-xl text-center mt-4 font-serif'>
              <TypeAnimation
                          sequence={[
                              'Destiny',
                              1000,
                              'A WP / Shopify Designer',
                              1000,
                              'A Django Developer',
                              1000,
                              'A PHP / JS Developer',
                              1000,
                              1000,
                              'A Digital Marketer',
                               1000,
                              'A SEO Expert',
                              1000
           
                          ]}
                          wrapper="span"
                          speed={50}
                          style={{ fontSize: '2em', display: 'inline-block' }}
                          repeat={Infinity}
                          />
            </h2>
            <motion.p 
            className="text-center mt-4 text-white/60 md:text-lg"
            initial={{ opacity: 0, y: 100,  visibility: "hidden"}}
            whileInView={{ opacity: 1, y: 0,  visibility: "visible"}}
            transition={{
                        ease: "easeInOut",
                        duration: 1,
                    }}
            viewport={{ once: false, amount: 0.1 }}
              >
                Full-Stack Developer, Digital Marketer and E-commerce Developer In Nigeria with 4+ years of experience building sleek websites,
                mobile apps, and e-commerce solutions. I specialize in React, Next.js, TailwindCSS, Django, REST APIs, Shopify, and WordPress.
                With expertise in SEO and Social Media Marketing, I help businesses and startups grow their online presence through modern design,
                optimized performance, and results-driven strategies.
            </motion.p>
         </div>
        <motion.div 
          className="flex flex-col md:flex-row items-center mt-8 gap-4 justify-center z-10"
          variants={containers}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
         <motion.a  
            href="https://www.behance.net/techbydestiny" 
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer font-semibold"
            variants={showitem}
          >
              Explore My Ecom Work
              <BsArrowRight />
         </motion.a>

          <motion.a 
              href="/dennisdestiny-fullstactdevcv.docx" 
              download 
              className="inline-flex items-center border border-white text-gray-900 gap-3 h-12 px-6 bg-white rounded-xl hover:scale-105 hover:bg-gray-950 hover:border-gray-950 hover:text-white duration-500 ease-in-out"
              variants={showitem}
            >
              <FiDownload className="text-xl" />
              <span className="font-semibold">Download CV</span>
          </motion.a>
        </motion.div>
      </div>

    </div>
  )
};
