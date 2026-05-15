import { HomeTemplate } from "@/components/templates";
import { getSortedPostsData } from "@/lib/blog";

export default async function Home() {
  const posts = await getSortedPostsData(true);
  
  return <HomeTemplate initialPosts={posts} />;
}

