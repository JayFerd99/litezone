import React from "react";
import Navbar from "../Navbar/Index";
      
export default function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <Navbar />
      {children}
    </div>
  );
}
