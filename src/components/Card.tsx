"use client";
import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import grainImage from "@/assets/images/grain.jpg";

import { motion } from "framer-motion";

type CardProps = ComponentPropsWithRef<"div"> & {
  variants?: any;
  initial?: any;
  whileInView?: any;
  transition?: any;
};

export const Card = ({
  className,
  children,
  variants,
  initial,
  whileInView,
  transition,
  ...other
}: CardProps) => {
  return (
    <motion.div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative after:content-[''] z-0 after:z-10 overflow-hidden after:absolute after:inset-0 md:text-4xl after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
        className
      )}
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={{ once: false, amount: 0.3 }}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      />
      {children}
    </motion.div>
  );
};
