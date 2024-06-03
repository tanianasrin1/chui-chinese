import Link from "next/link";
import React, { useEffect } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const Links = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname()
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };



  const router = useRouter();
 

  useEffect(() => {
  setTimeout(()=>{
  // Check if the URL contains the parameter #request_callback
    if (router.asPath.includes('#about')) {
      // Scroll to the element with the id "request_callback"
      const element = document.getElementById('about')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
 },[300])
  }, [router.asPath]);

  return (
    <div className="w-8/12 lg:flex items-center justify-center gap-x-[25px] font-Barlow text-lg  leading-5 tracking-[1%] hidden ">
      <div className="">
        <Link className={`${pathname === "/" && "text-primary font-semibold"} text-lg   hover:text-primary `} href="/">
          Home
        </Link>
      </div>
      <div className="">
        {" "}
        <Link
          className={`${pathname === "/about" && "text-primary font-semibold"} text-lg   hover:text-primary `}
          href="/about"
        >
          About Us
        </Link>
      </div>

     
      <div className="">
        <Link
          className={`${pathname === "/services" && "text-primary font-semibold"} text-lg   hover:text-primary `}
          href="/services"
        >
          Services
        </Link>
      </div>

      <div className="">
        <Link
          className={`${pathname === "/blogs" && "text-primary font-semibold"} text-lg   hover:text-primary `}
          href="/blogs"
        >
          Blogs 
        </Link>
      </div>

      <div className="">
        <Link
          className={`${pathname === "/projects" && "text-primary font-semibold"} text-lg   hover:text-primary `}
          href="/projects"
        >
          Project
        </Link>
      </div>
      
      <div className="">
        <Link
          className={`${pathname === "/contact-us" && "text-primary font-semibold"} text-lg   hover:text-primary `}
          href="/contact-us"
        >
          Contact us
        </Link>
      </div>
      
      

    </div>
  );
};

export default Links;
