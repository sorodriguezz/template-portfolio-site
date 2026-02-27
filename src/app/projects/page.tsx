"use client";

import { Navbar, ProjectsSection, Footer } from "@/components/organisms";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ProjectsSection showViewAll={false} />
      </main>
      <Footer />
    </>
  );
}
