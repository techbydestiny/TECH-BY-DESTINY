import React from 'react'

import cgpaAppImage from "@/assets/images/cgpa-app-image.png"
import restaurantLandingPageImage from "@/assets/images/restaurantLandingPageImage.png"
import appleWebsiteImage from "@/assets/images/appleWebsiteImage.png"
import shareItImage from "@/assets/images/shareItImage.png"
import pubbleStoreImage from "@/assets/images/pubbleStoreImage.png"
import coffaWebsiteImage from "@/assets/images/coffaWebsiteImage.png"
import reactTailwindLandingImage from "@/assets/images/reactTailwindLandingImage.png"

import Image from 'next/image'


import ClickCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"


const frontendProjects = [
  {
    company: "Personal Project",
    year: "2025",
    title: "CGPA Calculator App",
    results: [
      { title: "Built with HTML, CSS and JavaScript for fast and interactive UI" },
      { title: "Helps students easily calculate and track CGPA" },
      { title: "Responsive design optimized for mobile & desktop" },
    ],
    link: "https://cgpa-seven.vercel.app",
    image: cgpaAppImage,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Restaurant Landing Page",
    results: [
      { title: "Modern responsive landing page built with React Js, Gsap, and Tailwind CSS" },
      { title: "Showcases menu, offers, and reservations section" },
      { title: "Optimized for smooth animations and fast load times" },
    ],
    link: "https://name-restaurant-landing-page.vercel.app",
    image: restaurantLandingPageImage,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Apple Website Clone",
    results: [
      { title: "Recreated Apple’s modern homepage design using React JS, 3d JS, Gsap and Tailwind CSS" },
      { title: "Pixel-perfect layout with responsive UI" },
      { title: "Demonstrates mastery of frontend development" },
    ],
    link: "https://apple-website-nine-kappa.vercel.app",
    image: appleWebsiteImage,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "ShareIt File Sharing App (Frontend)",
    results: [
      { title: "Frontend for a file sharing platform built with Bootstrap JS" },
      { title: "Clean UI for uploading and managing shared files" },
      { title: "Fast and responsive design" },
    ],
    link: "https://github.com/techbydestiny/SHARE-IT",
    image: shareItImage,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Coffa Coffee Shop Website",
    results: [
      { title: "Stylish and responsive landing page for a coffee shop brand" },
      { title: "Built with React.js, Tailwind CSS, and GSAP for smooth animations" },
      { title: "Includes hero, menu, about, and contact sections—fully customizable" },
    ],
    link: "https://coffa-website.vercel.app",
    image: coffaWebsiteImage,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "React Tailwind Landing Page Template",
    results: [
      { title: "Simple, clean landing page built with React JS and Tailwind CSS" },
      { title: "Lightweight, fast, and easy to customize for any portfolio or business" },
      { title: "Reusable components and responsive layout" },
    ],
    link: "https://react-tailwind-three-hazel.vercel.app",
    image: reactTailwindLandingImage,
  },
];


const backendProjects = [
    {
    company: "Personal Project",
    year: "2025",
    title: "Pubblle Multi-Vendor Store",
    results: [
      { title: "Full-stack multi-vendor e-commerce platform built using HTML, Tailwind CSS and Django" },
      { title: "Developed product, cart, and checkout features" },
      { title: "Supports multiple sellers with scalable architecture" },
    ],
    link: "https://github.com/techbydestiny/PUBBLE-MULTIVENDOR-STORE",
    image: pubbleStoreImage,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Share-It Django Version",
    results: [
      { title: "Message-sharing app built with HTML, Bootstrap and Django" },
      { title: "Implemented authentication & secure uploads, messages" },
      { title: "Clean UI and scalable backend structure" },
    ],
    link: "https://github.com/techbydestiny/SHARE-IT-DJANGO-VERSION",
    image: shareItImage,
  },
]


export const FrontendProjects = () => {
  return (
    
             <div className="flex flex-col mt-10 md:mt-20 gap-16">
               {frontendProjects.map(project  => (
                 <div key={project.title} className="bg-gray-800 rounded-3xl relative after:content-[''] z-0 after:z-10 overflow-hidden after:absolute after:inset-0 md:text-4xl  after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl  after:outline-white/20 md:pt-12 md:px-10 px-8 pt-8 after:pointer-events-none">
                   <div className="absolute inset-0 -z-10 opacity-5" style={{
                     backgroundImage: `url(${grainImage.src})`,
                   }}></div>
                   <div className="lg:grid lg:grid-cols-2">
                       <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                           <span>{project.company}</span>
                           <span>{project.year}</span>
                       </div>
                       <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                       <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                       <ul className="flex flex-col mt-4 md:mt-5 gap-4">
                         {project.results.map( result => (
                           <li className="flex gap-2 text-sm md:text-base text-white/50">
                             <ClickCircleIcon className="size-5" />
                             <span>{result.title}</span>
                           </li>
                         ))}
                       </ul>
                       <a href={project.link}>
                         <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center gap-2 justify-center mt-8">
                           <span className="text-sm">View Live Site</span>
                           <ArrowUpRightIcon className="size-4"/>
                         </button>
                       </a>
                       <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0" />
                   </div>
                 </div>
               )
               )}
             </div>
  );
};

export const BackendProjects = () => {
  return (
        <div className="flex flex-col mt-10 md:mt-20 gap-16">
               {backendProjects.map(project  => (
                 <div key={project.title} className="bg-gray-800 rounded-3xl relative after:content-[''] z-0 after:z-10 overflow-hidden after:absolute after:inset-0 md:text-4xl  after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl  after:outline-white/20 md:pt-12 md:px-10 px-8 pt-8 after:pointer-events-none">
                   <div className="absolute inset-0 -z-10 opacity-5" style={{
                     backgroundImage: `url(${grainImage.src})`,
                   }}></div>
                   <div className="lg:grid lg:grid-cols-2">
                       <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                           <span>{project.company}</span>
                           <span>{project.year}</span>
                       </div>
                       <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                       <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                       <ul className="flex flex-col mt-4 md:mt-5 gap-4">
                         {project.results.map( result => (
                           <li className="flex gap-2 text-sm md:text-base text-white/50">
                             <ClickCircleIcon className="size-5" />
                             <span>{result.title}</span>
                           </li>
                         ))}
                       </ul>
                       <a href={project.link}>
                         <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center gap-2 justify-center mt-8">
                           <span className="text-sm">View Live Site</span>
                           <ArrowUpRightIcon className="size-4"/>
                         </button>
                       </a>
                       <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0" />
                   </div>
                 </div>
               )
               )}
             </div>
  );
};


export const WordPressProjects = () => {
  return (
    <div>
      {/* Add WordPress projects here */}
    </div>
  );
};
