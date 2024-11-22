import Link from "next/link";
import React, { useEffect } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { usePathname } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

const Links = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // Check if the URL contains the parameter #request_callback
      if (router.asPath.includes("#about")) {
        // Scroll to the element with the id "request_callback"
        const element = document.getElementById("about");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [300]);
  }, [router.asPath]);

  return (
    <div className="w-8/12 lg:flex items-center text-secondary justify-center gap-x-[15px] font-Barlow  text-sm lg:text-base  leading-5 tracking-[1%] hidden ">
      
      <Link href="/">
        <Button className={`w-max ${router.pathname == "/" && 'font-bold'} text-secondary text-sm lg:text-base   capitalize`}>Home</Button>
      </Link>
      <Link href="/about">
        <Button className={`w-max ${router.pathname == "/about" && 'font-bold'} text-secondary text-sm lg:text-base   capitalize`}>About Us</Button>
      </Link>
      <Link href="/">
        <Button className={`w-max ${router.pathname == "/about-us" && 'font-bold'} text-secondary text-sm lg:text-base   capitalize`}>Our Menu</Button>
      </Link>
      <Link href="/">
        <Button className={`w-max ${router.pathname == "/about-us" && 'font-bold'} text-secondary text-sm lg:text-base   capitalize`}>Offer</Button>
      </Link>
      <Link href="/contact-us">
        <Button className={`w-max ${router.pathname == "/contact-us" && 'font-bold'} text-secondary text-sm lg:text-base   capitalize`}>Contact Us</Button>
      </Link>
      
      
      

    </div>
  );
};

export default Links;
