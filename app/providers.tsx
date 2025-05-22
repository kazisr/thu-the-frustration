// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { BlogDataProvider } from "@/components/Blog/BlogDataContext";

export function Providers({
                            children,
                            allData,
                          }: {
  children: React.ReactNode;
  allData: any;
}) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <BlogDataProvider allData={allData}>
        {children}
      </BlogDataProvider>
    </ThemeProvider>
  );
}
