import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
const footerLinks = [
  {
    title: 'YouTube',
    links: 'https://www.youtube.com/techbydestiny',
  },
   {
    title: 'Twitter',
    links: '#',
  },
   {
    title: 'Instagram',
    links: '#',
  },
   {
    title: 'LinkedIn',
    links: 'https://www.linkedin.com/in/techbydestiny',
  },
   {
    title: 'Github',
    links: 'https://github.com/techbydestiny',
  },
]
export const Footer = () => {
  return (
     <footer className="relative overflow-x-clip">
      {/* Background glow */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          
          {/* Copyright - dynamic year */}
          <div className="text-white/40">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </div>

          {/* Footer navigation */}
          <nav className="flex flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.links}
                aria-label={link.title}
                className="inline-flex gap-1.5 items-center hover:text-emerald-400 transition-colors"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>);
};
