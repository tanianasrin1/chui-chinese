import Link from "next/link";
import React, { useEffect } from "react";
import "react-modern-drawer/dist/index.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";


const Links = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const router = useRouter();



  return (
    <div className="w-8/12 lg:flex items-center text-secondary justify-center gap-x-[25px] font-Barlow  text-sm lg:text-base  leading-5 tracking-[1%] hidden ">
      
      <Link href="/">
        <button className={`w-max ${router.pathname == "/" && 'font-bold'} text-secondary text-sm lg:text-base   capitalize`}>Home</button>
      </Link>
      <Link href="/about">
        <button className={`w-max ${router.pathname == "/about" && 'font-bold'} text-secondary text-sm lg:text-base   capitalize`}>About Us</button>
      </Link>
      <Link href="/our-menu">
        <button className={`w-max ${router.pathname == "/our-menu" && 'font-bold'} text-secondary text-sm lg:text-base   capitalize`}>Our Menu</button>
      </Link>
      <Link href="/offer">
        <button className={`w-max ${router.pathname == "/offer" && 'font-bold'} text-secondary text-sm lg:text-base   capitalize`}>Offer</button>
      </Link>
      <Link href="/contact-us">
        <button className={`w-max ${router.pathname == "/contact-us" && 'font-bold'} text-secondary text-sm lg:text-base   capitalize`}>Contact Us</button>
      </Link>
      
      
      

    </div>
  );
};

export default Links;
