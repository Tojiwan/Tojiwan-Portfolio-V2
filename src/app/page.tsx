import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main id="main" className="mx-auto w-full max-w-[1280px] flex-1 px-4 sm:px-6">
      <div className="py-8 sm:py-12">
        <HeroSection />
      </div>
      <div className="border-t-2 border-black py-10 sm:py-14">
        <AboutSection />
      </div>
      <div className="border-t-2 border-black py-10 sm:py-14">
        <ProjectsSection />
      </div>
      <div className="border-t-2 border-black py-10 sm:py-14">
        <TechStackSection />
      </div>
      <div className="border-t-2 border-black py-10 sm:py-14">
        <ExperienceSection />
      </div>
      <div className="border-t-2 border-black py-10 sm:py-14">
        <ServicesSection />
      </div>
      <div className="border-t-2 border-black py-10 sm:py-14">
        <ContactSection />
      </div>
    </main>
  );
}
