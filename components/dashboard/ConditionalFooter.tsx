// app/components/ConditionalFooter.tsx
"use client"; // Required for usePathname

import { usePathname } from "next/navigation";
import Footer from "./Footer"; // Your actual Footer component

export default function ConditionalFooter() {
  const pathname = usePathname();

  // Add all routes where you want the footer to be HIDDEN
  const excludedRoutes = ["/biz/messages"];

  // If the current path is one of the excluded ones, render nothing
  if (excludedRoutes.includes(pathname)) {
    return null;
  }

  return <Footer />;
}
