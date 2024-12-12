import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import { IoMdArrowDropdown } from "react-icons/io";

const NavLinkMob = ({ toggleDrawer }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="font-Barlow text-base leading-5 tracking-[1%] p-6 space-y-3">
      <IoCloseSharp
        className="lg:hidden block  w-10 ml-auto "
        onClick={toggleDrawer}
      />
      {/* border-b border-gray/75 */}
      <div>
        <Link href="/">
          <button
            className={`w-max ${
              router.pathname == "/" && "font-bold"
            } text-secondary lg:text-base hover:text-primary hover:font-semibold   capitalize`}
          >
            Home
          </button>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <button
            className={`w-max ${
              router.pathname == "/about" && "font-bold"
            } text-secondary lg:text-base hover:text-primary hover:font-semibold   capitalize`}
          >
            About Us
          </button>
        </Link>
      </div>
      {/* <div>
        <Link href="/our-menu">
          <button
            className={`w-max ${
              router.pathname == "/our-menu" && "font-bold hover:text-primary hover:font-semibold"
            } text-secondary lg:text-base    capitalize`}
          >
            Our Menu
          </button>
        </Link>
      </div> */}

      <div className=" relative group ">
        <div className="flex items-center cursor-pointer">
          <p className="  mr-1"> Our Menu</p>
          <IoMdArrowDropdown />
        </div>

        <div className="w-[190px] absolute hidden z-10 bg-primary   text-black p-4  group-hover:flex flex-col  space-y-3 pt-4 shadow-2xl">
          <Link href="/our-menu/slug">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Burger
            </p>
          </Link>
          <Link href="/our-menu/slug">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Sandwich
            </p>
          </Link>
          <Link href="/our-menu/slug">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              MOMO
            </p>
          </Link>
          <Link href="/our-menu/slug">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Chowmein
            </p>
          </Link>
          <Link href="/our-menu/slug">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Fries
            </p>
          </Link>
          <Link href="/our-menu/slug">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Mushroom
            </p>
          </Link>
          <Link href="/our-menu/slug">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Soup
            </p>
          </Link>
          <Link href="/our-menu/slug">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Milk Shakes
            </p>
          </Link>
          <Link href="/our-menu/slug">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              MOJITO
            </p>
          </Link>

          <Link href="/our-menu/slug">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Fruits Juice
            </p>
          </Link>
          <Link href="/our-menu/slug">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Hot & Cold Coffee
            </p>
          </Link>
          <Link href="/our-menu/slug">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Ice Tea
            </p>
          </Link>
          <Link href="/our-menu/slug">
            <p className="hover:text-secondary cursor-pointer  hover:font-semibold duration-300 ">
              {" "}
              Dessert
            </p>
          </Link>
        </div>
      </div>
      <div>
        <Link href="/offer">
          <button
            className={`w-max ${
              router.pathname == "/offer" && "font-bold"
            } text-secondary lg:text-base hover:text-primary hover:font-semibold   capitalize`}
          >
            Offer
          </button>
        </Link>
      </div>
      <div>
        <Link href="/contact-us">
          <button
            className={`w-max ${
              router.pathname == "/contact-us" && "font-bold"
            } text-secondary lg:text-base hover:text-primary hover:font-semibold   capitalize`}
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavLinkMob;
