"use client";

import { Navbar, BlogSection, Footer } from "@/components/organisms";

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <BlogSection showViewAll={false} />
      </main>
      <Footer />
    </>
  );
}
