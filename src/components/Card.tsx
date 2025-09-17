"use client";
import { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import grainImage from "@/assets/images/grain.jpg";

import { motion, HTMLMotionProps } from "framer-motion";

type CardProps = HTMLMotionProps<"div"> & {
    children ?: ReactNode;
    className ?: string;
};

export const Card = ({
  className,
  children,
  ...other
}: CardProps) => {
  return (
    <motion.div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative after:content-[''] z-0 after:z-10 overflow-hidden after:absolute after:inset-0 md:text-4xl after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
        className
      )}
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
