import Link from "next/link";
import React, { useEffect } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { usePathname } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from "next/router";

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
    <div className="w-8/12 lg:flex items-center justify-center gap-x-[25px] font-Barlow text-lg  leading-5 tracking-[1%] hidden ">
      <div className="">
        <Link
          className={`${
            pathname === "/" && "text-primary font-semibold"
          } text-lg   hover:text-primary `}
          href="/"
        >
          Home
        </Link>
      </div>
      <div className="">
        {" "}
        <Link
          className={`${
            pathname === "/about" && "text-primary font-semibold"
          } text-lg   hover:text-primary `}
          href="/about"
        >
          About Us
        </Link>
      </div>

      {/* <div className="">
        <Link
          className={`${pathname === "/services" && "text-primary font-semibold"} text-lg   hover:text-primary `}
          href="/services"
        >
          Services
        </Link>
      </div> */}

      <div className="w-24 relative group  bg-white">
        <div className="flex items-center hover:text-red-10 cursor-pointer">
          <p className="  mr-1">Services</p>
          <IoMdArrowDropdown />
        </div>
        
        <div className="w-44 absolute hidden bg-white border  p-2  group-hover:flex flex-col  space-y-3 divide-gray-400 pt-4">
          <Link href="/">
            <p className="hover:text-red-10 cursor-pointer">
              {" "}
              &nbsp;Member&apos;s&nbsp;Directory&nbsp;
            </p>
          </Link>

          <Link href="/practice-directory">
            <p className="hover:text-red-10 cursor-pointer">
              {" "}
              &nbsp;Practice&nbsp;Directory&nbsp;
            </p>
          </Link>
        </div>
      </div>

      <div className="">
        <Link
          className={`${
            pathname === "/blogs" && "text-primary font-semibold"
          } text-lg   hover:text-primary `}
          href="/blogs"
        >
          Blogs
        </Link>
      </div>

      <div className="">
        <Link
          className={`${
            pathname === "/projects" && "text-primary font-semibold"
          } text-lg   hover:text-primary `}
          href="/projects"
        >
          Project
        </Link>
      </div>

      <div className="">
        <Link
          className={`${
            pathname === "/contact-us" && "text-primary font-semibold"
          } text-lg   hover:text-primary `}
          href="/contact-us"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Links;
