import { HomeTemplate } from "@/components/templates";
import { getSortedPostsData } from "@/lib/blog";

export default async function Home() {
  const postsEs = await getSortedPostsData("es", true);
  const postsEn = await getSortedPostsData("en", true);
  
  const allPosts = {
    es: postsEs,
    en: postsEn,
  };

  return <HomeTemplate initialPosts={allPosts} />;
}

