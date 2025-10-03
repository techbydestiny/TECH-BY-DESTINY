import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import Header  from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { ServicesSection } from "@/sections/Services";

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      <ServicesSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
