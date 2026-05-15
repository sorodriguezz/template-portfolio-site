import { Navbar, BlogSection, Footer } from "@/components/organisms";
import { getSortedPostsData } from "@/lib/blog";

export default async function BlogsPage() {
  const posts = await getSortedPostsData(true);
  
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <BlogSection showViewAll={false} initialPosts={posts} />
      </main>
      <Footer />
    </>
  );
}
