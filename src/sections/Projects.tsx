
"use client";

import { motion } from "framer-motion";
import {BackendProjects, FrontendProjects, WordPressProjects} from "@/components/ProjectStacks"
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";


export const ProjectsSection = () => {
  const [projectsClick, setProjectClick] = useState("frontend")

  const handleClick = (clicked: string) =>{
     setProjectClick(clicked)
    } 
  return (
     <motion.div className="pb-16" id="Projects">

           <div className="container">
            <SectionHeader title="Featured Projects" eyebrow="Real-World Results" description="See how i transfer concepts into engaging digital experiences. "/>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0}}
            transition={{
                ease: "easeInOut",
                duration: 1
                      }}
            viewport={{ once: false, amount: 0.1 }}
          > 
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
          </motion.div>
    </div>
    </motion.div>
  );
};
