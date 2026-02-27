"use client";

import {
  Navbar,
  HeroSection,
  StatsSection,
  ProjectsSection,
  TechStackSection,
  BlogSection,
  ContactSection,
  Footer,
} from "@/components/organisms";

export function HomeTemplate() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ProjectsSection limit={3} />
        <TechStackSection />
        <BlogSection limit={3} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
