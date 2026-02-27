import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang") || "es";

  const filePath = path.join(process.cwd(), "content", "blog", lang, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return NextResponse.json({
    slug,
    title: data.title || "",
    date: data.date || "",
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    readTime: data.readTime || 5,
    image: data.image || null,
    content: contentHtml,
    language: lang,
  });
}
