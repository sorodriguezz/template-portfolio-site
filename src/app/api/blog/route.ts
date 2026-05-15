import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { calculateReadTime } from "@/utils/blog";

function getBlogDir(lang: string) {
  return path.join(process.cwd(), "content", "blog", lang);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang") || "es";

  const blogDir = getBlogDir(lang);

  if (!fs.existsSync(blogDir)) {
    return NextResponse.json([]);
  }

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      title: data.title || "",
      date: data.date || "",
      excerpt: data.excerpt || "",
      tags: data.tags || [],
      readTime: calculateReadTime(content),
      image: data.image || null,
      language: lang,
    };
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return NextResponse.json(posts);
}
