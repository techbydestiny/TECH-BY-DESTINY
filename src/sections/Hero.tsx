"use client";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation'


import heroimage from '@/assets/images/my-hero-image.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'

export const HeroSection = () => {

  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}>
      </div>
     <div className="w-[120px] h-[120px] md:w-[620px] md:h-[620px] hero-ring"></div>
      <div className="w-[220px] h-[220px] md:w-[820px] md:h-[820px] hero-ring"></div>
      <div className="w-[420px] h-[420px] md:w-[1020px] md:h-[1020px] hero-ring"></div>
      <div className="w-[520px] h-[520px] md:w-[1220px] md:h-[1220px] hero-ring"></div>
      <div className='container'>
        <div className="flex flex-col items-center">
          <Image src={heroimage} alt='heroimg' className="size-[100px]"/>
          <div className="bg-gray-950  border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg ">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
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
            <p className="text-center mt-4 text-white/60 md:text-lg">
                Full-Stack Developer and Digital Marketer with 5+ years of experience building sleek websites,
                mobile apps, and e-commerce solutions. I specialize in React, Next.js, TailwindCSS, Django, REST APIs, Shopify, and WordPress.
                With expertise in SEO and Social Media Marketing, I help businesses and startups grow their online presence through modern design,
                optimized performance, and results-driven strategies.
            </p>
         </div>
        <div className="flex flex-col md:flex-row items-center mt-8 gap-4 justify-center">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Exporle My Work</span>
            <ArrowDown />
          </button>
           <button className="inline-flex items-center border border-white text-gray-900 gap-3 h-12 px-6 bg-white rounded-xl">
            <span>👋🏽</span>
            <span className="font-semibold">Let's Connect</span>
           </button>
        </div>
      </div>

    </div>
  )
};
