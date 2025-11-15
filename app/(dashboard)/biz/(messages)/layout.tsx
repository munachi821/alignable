import React from "react";
import "../../../globals.css";
import Navbar from "@/components/dashboard/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
export default layout;
