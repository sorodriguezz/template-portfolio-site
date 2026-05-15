import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar, BlogSection, Footer } from "@/components/organisms";
import { getSortedPostsData } from "@/lib/blog";

export default async function BlogsPage() {
  const posts = await getSortedPostsData(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:underline transition-all"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
        <BlogSection showViewAll={false} initialPosts={posts} />
      </main>
      <Footer />
    </div>
  );
}
