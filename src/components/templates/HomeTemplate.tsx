"use client";

import {
  Navbar,
  HeroSection,
  StatsSection,
  ProjectsSection,
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
        <BlogSection limit={3} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
