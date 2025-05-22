import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import { COMPANY_NAME } from "@/public/global-utility";

export const metadata: Metadata = {
  title: COMPANY_NAME,
  description: "This is Home for" + COMPANY_NAME,
  // other metadata
};

export default function Home() {
  return (
    <>
      <Blog />
    </>
  );
}
