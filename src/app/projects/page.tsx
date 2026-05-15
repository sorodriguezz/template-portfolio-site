import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar, ProjectsSection, Footer } from "@/components/organisms";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:underline transition-all"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
        <ProjectsSection showViewAll={false} />
      </main>
      <Footer />
    </div>
  );
}
