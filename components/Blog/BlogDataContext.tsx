// components/Blog/BlogDataContext.tsx
"use client";

import React, { createContext, useContext } from "react";

export const BlogDataContext = createContext<any>(null);

export const useBlogData = () => useContext(BlogDataContext);

export const BlogDataProvider = ({
  children,
  allData,
}: {
  children: React.ReactNode;
  allData: any;
}) => {
  return (
    <BlogDataContext.Provider value={allData}>
      {children}
    </BlogDataContext.Provider>
  );
};
