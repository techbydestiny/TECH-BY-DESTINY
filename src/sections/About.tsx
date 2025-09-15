"use client";
import Image from "next/image";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeader } from "@/components/SectionHeader";

import JavascriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import ReactIcons from "@/assets/icons/react.svg"
import CssIcon from "@/assets/icons/css3.svg"
import GithubIcon from "@/assets/icons/github.svg"
import PythonIcon from "@/assets/icons/python.svg"
import Phpicon from "@/assets/icons/php.svg"
import TailwindCssIcon from "@/assets/icons/tailwindcss.svg"
import BoostrapIcon from "@/assets/icons/bootstrap.svg"
import NextIcon from "@/assets/icons/nextdotjs.svg"
import DjangoIcon from "@/assets/icons/django.svg"
import ExpressIcon from "@/assets/icons/express.svg"
import mapImage from "@/assets/images/map.png"
import smileImage from '@/assets/images/my-hero-image.png'
import { ToolBoxItems } from "@/components/ToolboxItems";
import {motion} from 'framer-motion'
import { useRef } from "react";



const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
     {
    title: "PHP",
    iconType: Phpicon,
  },
   {
    title: "CSS",
    iconType: CssIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindCssIcon,
  },
   {
    title: "Bootstrap",
    iconType: BoostrapIcon,
  },
   {
    title: "React",
    iconType: ReactIcons,
  },
   {
    title: "Next",
    iconType: NextIcon,
  },
   {
    title: "Django",
    iconType: DjangoIcon,
  },
   {
    title: "Appwrite",
    iconType: ExpressIcon,
  },
     {
    title: "Github",
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title : 'Drawing',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
    {
    title : 'Fashion',
    emoji: '👕',
    left: '50%',
    top: '5%',
  },
    {
    title : 'Sales',
    emoji: '💰',
    left: '10%',
    top: '35%',
  },
    {
    title : 'Gaming',
    emoji: '🎮',
    left: '35%',
    top: '40%',
  },
    {
    title : 'Philosophy',
    emoji: '🧐',
    left: '70%',
    top: '45%',
  },
    {
    title : 'Writing',
    emoji: '✍🏾',
    left: '5%',
    top: '65%',
  },
    {
    title : 'Music',
    emoji: '🎵',
    left: '45%',
    top: '70%',
  },
]

export const AboutSection = () => {

  const constraintRef = useRef(null)

  return(
  <div className="py-20 lg:py-28" id="About">
    <div className=" container">
      <SectionHeader
        eyebrow="About Me" 
        title="A Glimpse Into my World"
        description="Learn More About who I am, What I do, and What Inspires me"
      />

      <div className="mt-20 flex flex-col gap-8">
        <div className="md:grid md:grid-cols-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="h-[320px] col-span-3 lg:col-span-1">
           <CardHeader 
              title="What's the Idea?" 
              description="I am a results-driven web developer with a strong focus on digital marketing and SEO." 
            /> 

            <div className="w-72 mx-auto"> 
             <p>
                With expertise in <strong>SEO</strong> and <strong>digital marketing</strong>, 
                I design and develop websites that not only look great but are also 
                <strong>strategically optimized to drive traffic, boost engagement, and maximize conversions</strong>.
              </p>

            </div>
          </Card>
          <Card className="h-[320px] col-span-3 lg:col-span-2">
            <CardHeader
                title="My ToolBox"
                description="Explore the technologies and tools i use to create digital experiences."
                className=""
            />
            <ToolBoxItems toolboxItems={toolboxItems}
              className=""
              itemsWrapperClassName=" animate-move-left [animation-duration:30s]"
              />
            <ToolBoxItems toolboxItems={toolboxItems} className="mt-6"
            itemsWrapperClassName=" animate-move-right [animation-duration:15s]"
            />
          </Card>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
           <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the Code"
              description=" Explore my other interest beyond coding."
              className="px-6 py-6"/>
              <div className=" relative flex-1" ref={constraintRef}>
           
                    {hobbies.map((hobby) => (
                      <motion.div key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-200 py-1.5 rounded-full absolute"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints = {constraintRef}
                      >
                        <span className="font-sm text-gray-950"> {hobby.title} </span>
                        <span>{hobby.emoji}</span>
                      </motion.div>
                    ))}
              </div>
           </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1" >
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top"/>
              <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:rounded-full after:outline-offset-2 after:outline-gray-950/30">
                <div className=" absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className=" absolute inset-0 rounded-full  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileImage}
                alt="Smile image"
                className="size-20"/>
              </div>
            </Card>
         </div>
            </div>
      </div>
  </div>
  );
};
