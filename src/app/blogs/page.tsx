import { Navbar, BlogSection, Footer } from "@/components/organisms";
import { getSortedPostsData } from "@/lib/blog";

export default async function BlogsPage() {
  const postsEs = await getSortedPostsData("es", true);
  const postsEn = await getSortedPostsData("en", true);
  
  const allPosts = {
    es: postsEs,
    en: postsEn,
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <BlogSection showViewAll={false} initialPosts={allPosts} />
      </main>
      <Footer />
    </>
  );
}
