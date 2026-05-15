import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { calculateReadTime } from "@/utils/blog";
import { type BlogPost } from "@/types";
import { type Language } from "@/config/translations";

const blogDirectory = path.join(process.cwd(), "content/blog");

export async function getSortedPostsData(lang: Language, includeContent: boolean = false): Promise<BlogPost[]> {
  const langDir = path.join(blogDirectory, lang);
  
  if (!fs.existsSync(langDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(langDir);
  const allPostsData = await Promise.all(fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(langDir, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      let contentHtml = "";
      if (includeContent) {
        const processedContent = await remark()
          .use(html)
          .process(content);
        contentHtml = processedContent.toString();
      }

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        readTime: calculateReadTime(content),
        image: data.image || null,
        content: contentHtml,
        language: lang,
      } as BlogPost;
    }));

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string, lang: Language): Promise<BlogPost | null> {
  const fullPath = path.join(blogDirectory, lang, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    readTime: calculateReadTime(content),
    image: data.image || null,
    content: contentHtml,
    language: lang,
  } as BlogPost;
}
