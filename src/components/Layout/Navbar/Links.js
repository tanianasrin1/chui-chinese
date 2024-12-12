import Link from "next/link";
import React, { useEffect } from "react";
import "react-modern-drawer/dist/index.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { IoMdArrowDropdown } from "react-icons/io";

const Links = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const router = useRouter();

  return (
    <div className="w-8/12 lg:flex items-center text-primary justify-center gap-x-[25px] font-Barlow  text-sm lg:text-base  leading-5 tracking-[1%] hidden ">
      <Link href="/">
        <button
          className={`w-max ${
            router.pathname == "/" && "font-bold"
          } text-primary text-sm lg:text-base   capitalize`}
        >
          Home
        </button>
      </Link>
      <Link href="/about">
        <button
          className={`w-max ${
            router.pathname == "/about" && "font-bold"
          } text-primary text-sm lg:text-base   capitalize`}
        >
          About Us
        </button>
      </Link>
      {/* <Link href="/our-menu">
        <button
          className={`w-max ${
            router.pathname == "/our-menu" && "font-bold"
          } text-primary text-sm lg:text-base   capitalize`}
        >
          Our Menu
        </button>
      </Link> */}

      <div className=" relative group ">
        <div className="flex items-center cursor-pointer">
          <p className="  mr-1"> Our Menu</p>
          <IoMdArrowDropdown />
        </div>

        <div className="w-[190px] absolute hidden bg-primary   text-black p-4  group-hover:flex flex-col  space-y-3 pt-4 shadow-2xl">
          <Link href="/our-menu">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Burger
            </p>
          </Link>
          <Link href="/our-menu">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Sandwich
            </p>
          </Link>
          <Link href="/our-menu">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              MOMO
            </p>
          </Link>
          <Link href="/our-menu">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Chowmein
            </p>
          </Link>
          <Link href="/our-menu">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Fries
            </p>
          </Link>
          <Link href="/our-menu">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Mushroom
            </p>
          </Link>
          <Link href="/our-menu">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Soup
            </p>
          </Link>
          <Link href="/our-menu">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Milk Shakes
            </p>
          </Link>
          <Link href="/our-menu">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              MOJITO
            </p>
          </Link>
         
          <Link href="/our-menu">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Fruits Juice
            </p>
          </Link>
          <Link href="/our-menu">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Hot & Cold Coffee
            </p>
          </Link>
          <Link href="/our-menu">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Ice Tea
            </p>
          </Link>
          <Link href="/our-menu">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Dessert
            </p>
          </Link>
        </div>
      </div>

      <Link href="/offer">
        <button
          className={`w-max ${
            router.pathname == "/offer" && "font-bold"
          } text-primary text-sm lg:text-base   capitalize`}
        >
          Offer
        </button>
      </Link>
      <Link href="/contact-us">
        <button
          className={`w-max ${
            router.pathname == "/contact-us" && "font-bold"
          } text-primary text-sm lg:text-base   capitalize`}
        >
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default Links;
