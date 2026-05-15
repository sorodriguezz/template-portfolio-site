import {
  Navbar,
  HeroSection,
  StatsSection,
  ProjectsSection,
  BlogSection,
  ContactSection,
  Footer,
} from "@/components/organisms";
import { BackToTop } from "@/components/molecules";
import { type BlogPost } from "@/types";

interface HomeTemplateProps {
  initialPosts: BlogPost[];
}

export function HomeTemplate({ initialPosts }: HomeTemplateProps) {
  return (
    <>
      <Navbar />
      <main className="snap-container h-screen overflow-y-auto">
        <HeroSection />
        <StatsSection />
        <ProjectsSection limit={3} centered />
        <BlogSection limit={6} initialPosts={initialPosts} centered />
        <div id="contacto" className="snap-section min-h-screen flex flex-col relative">
          <div className="flex-1 flex flex-col justify-center">
            <ContactSection />
          </div>
          <Footer />
        </div>
      </main>
      <BackToTop />
    </>
  );
}
