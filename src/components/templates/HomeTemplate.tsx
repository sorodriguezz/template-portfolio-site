import {
  Navbar,
  HeroSection,
  StatsSection,
  ProjectsSection,
  BlogSection,
  ContactSection,
  Footer,
} from "@/components/organisms";
import { type BlogPost } from "@/types";

interface HomeTemplateProps {
  initialPosts: BlogPost[];
}

export function HomeTemplate({ initialPosts }: HomeTemplateProps) {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ProjectsSection limit={3} />
        <BlogSection limit={3} initialPosts={initialPosts} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
