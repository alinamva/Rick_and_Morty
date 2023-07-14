import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Master(params) {
  return (
    <div className="b-yellow-500">
      <Header />
      {params.children}
      <Footer />
    </div>
  );
}
