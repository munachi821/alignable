import React from "react";
import "../globals.css";
import Navbar from "@/components/dashboard/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
export default layout;
