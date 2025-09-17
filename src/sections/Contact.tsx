"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"

import { FaUser, FaEnvelope, FaRegCommentDots, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion"


export const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return <motion.div className="py-16 pt-12 lg:py-24 lg:pt-20" id="Contact"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                ease: "easeInOut",
                duration: 1
            }}
      >
    <div className=" container">
      <div className="border-2 border-emerald-300 border-r-sky-200 border-t-sky-200 text-gray-300 py-8 px-10 rounded-3xl text-center relative md:text-left overflow-hidden z-0">
        <div className="absolute inset-0 opacity-5 -z-10" style={{
          backgroundImage: `url(${grainImage})`
        }}></div>
        <div className="flex flex-col gap-8 md:gap-16 items-center md:flex-row">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">Let's create something amazing together</h2>
            <p className="text-sm md:text-base mt-2">
              Ready to bring your next project to life? Let's connect and discuss how i can help you achieve your goals.
            </p>
          </div>
          <div>
            <button className="text-white bg-gray-800 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900 hover:scale-110 duration-300 ease-in-out">
              <span className="font-semibold" onClick={() => setIsOpen(true)}>Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-xl w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <FaTimes size={20} />
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
            <p className="text-gray-400 text-sm mb-6">
              Have something to discuss? Send me a message and let’s talk.
            </p>

            {/* Form */}
            <form className="space-y-4">
              <div className="flex items-center bg-gray-800 rounded-lg px-3">
                <FaUser className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent px-2 py-3 focus:outline-none text-white"
                />
              </div>

              <div className="flex items-center bg-gray-800 rounded-lg px-3">
                <FaEnvelope className="text-gray-400" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent px-2 py-3 focus:outline-none text-white"
                />
              </div>

              <div className="flex items-start bg-gray-800 rounded-lg px-3">
                <FaRegCommentDots className="text-gray-400 mt-3" />
                <textarea
                  placeholder="Your Message"
                  className="w-full bg-transparent px-2 py-3 focus:outline-none text-white"
                  rows={4}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
              >
                ✉️ Send Message
              </button>
            </form>
          </div>
        </div>
      )}

  </motion.div>;
};
