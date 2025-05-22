"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { useBlogData } from "@/components/Blog/BlogDataContext";

import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(BLOG_LIST);

  useEffect(() => {
    const filtered = BLOG_LIST.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.paragraph.toLowerCase().includes(search.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    );
    setFilteredBlogs(filtered);
  }, [search]);
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers allData={{filteredBlogs : filteredBlogs}}>
          <Header search={search} setSearch={setSearch}/>
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import { useEffect, useState } from "react";
import { BLOG_LIST } from "@/public/global-utility";
