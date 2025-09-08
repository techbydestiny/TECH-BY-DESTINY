
"use client";

import Image from "next/image"
import {BackendProjects, FrontendProjects, WordPressProjects} from "@/components/ProjectStacks"
import { useState } from "react";


export const ProjectsSection = () => {
  const [projectsClick, setProjectClick] = useState("frontend")

  const handleClick = (clicked: string) =>{
     setProjectClick(clicked)
    } 
  return (
     <section className="pb-16">
           <div className="">
             <div className="flex justify-center">
               <p className="font-semibold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Real-World Results</p>
             </div>
             <h2 className=" font-serif text-3xl text-center mt-6 md:text-5xl"> Featured Projects</h2>
             <p className="text-white/60 mt-4 text-center md:text-lg max-w-md mx-auto lg:text-xl">See how i transfer concepts into engaging digital experiences. </p>
            <div className="flex justify-center items-center w-full z-50 mt-5">
              <nav className="flex gap-1 p-0.5 text-sm md:text-base border border-white/15 rounded-full bg-white/10 backdrop:blur">
                <a className={`nav-item cursor-pointer ${
                                  projectsClick === 'frontend'
                                    ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
                                    : ''
                                }`} onClick={() => handleClick('frontend')}>Frontend </a>
                <a className={`nav-item cursor-pointer ${
                                    projectsClick === 'backend'
                                      ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
                                      : ''
                                  }`} onClick={() => handleClick('backend')}>Backend </a>
                <a className={`nav-item cursor-pointer ${
                      projectsClick === 'wordpress'
                        ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
                        : ''
                    }`} onClick={() => handleClick('wordpress')}>WordPress</a>
              </nav>
          </div>
          <div className="container">
            {projectsClick == 'frontend' ? <FrontendProjects/> : null }
            {projectsClick == 'backend' ? <BackendProjects/> : null }
            {projectsClick == 'wordpress' ? <WordPressProjects/> : null }
          </div>
    </div>
    </section>
  );
};
