"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';


export const SectionHeader = ({
    title,
    eyebrow,
    description
}: {
    title:string,
    eyebrow: string,
    description: string
}) => {

      return (
        <>
            <div className="flex justify-center">
                <motion.p 
                    className="font-semibold uppercase tracking-widest bg-gradient-to-r from-purple-300 to-sky-400 text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: 150, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 15,
                    }}
                    viewport={{ once: false, amount: 0.1 }}>

                    {eyebrow}

                </motion.p>
            </div>
                <motion.h2 className=" font-serif text-3xl text-center mt-6 md:text-5xl"
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{
                        ease: "easeInOut",
                        duration: 1
                    }}
                    viewport={{ once: false, amount: 0.1 }}> 
                    {title}

                </motion.h2>
                <motion.p 
                 className="text-white/60 mt-4 text-center md:text-lg max-w-md mx-auto lg:text-xl"
                  initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{
                        ease: "easeInOut",
                        duration: 1
                    }}
                    viewport={{ once: false, amount: 0.1 }}
                >
                  <TypeAnimation
                          sequence={[
                              description,
                              1500,
                          ]}
                          wrapper="span"
                          speed={50}
                          /> 
                </motion.p>
        </>
      )

};