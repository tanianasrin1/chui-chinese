import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Topheader from "./Navbar/Topheader";

const Layout = ({ children }) => {
  return (
    <>
      <header className="fixed w-full  top-0 z-40">
        <Topheader/>
        <Navbar />
      </header>

      <main className="mt-24">{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
