"use client";
import { FaYoutube, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const footerLinks = [
  {
    title: "YouTube",
    link: "https://www.youtube.com/techbydestiny",
    icon: <FaYoutube className="size-5" />,
  },
  {
    title: "Twitter",
    link: "#",
    icon: <FaTwitter className="size-5" />,
  },
  {
    title: "Instagram",
    link: "#",
    icon: <FaInstagram className="size-5" />,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/techbydestiny",
    icon: <FaLinkedin className="size-5" />,
  },
  {
    title: "GitHub",
    link: "https://github.com/techbydestiny",
    icon: <FaGithub className="size-5" />,
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      {/* Background glow */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-6">
          
          {/* Copyright - dynamic year */}
          <div className="text-white/40 text-center md:text-left">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </div>

          {/* Footer navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.title}
                className="flex items-center gap-2 text-white/70 hover:text-emerald-400 transition-colors"
              >
                {link.icon}
                <span className="hidden sm:inline font-medium">{link.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

