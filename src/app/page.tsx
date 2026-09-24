import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyQAWorkflow } from "@/components/WhyQAWorkflow";
import { ProjectsAndCases } from "@/components/ProjectsAndCases";
import { TechStack } from "@/components/TechStack";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Certifications } from "@/components/Certifications";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <WhyQAWorkflow />
        <ProjectsAndCases />
        <TechStack />
        <ExperienceTimeline />
        <Certifications />
      </main>
      <ContactFooter />
    </>
  );
}
