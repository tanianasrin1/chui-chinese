import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <header className="fixed w-full  top-0 z-40">
        <Navbar />
      </header>

      <main className="mt-6">{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
