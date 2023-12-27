import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const NavLinkMob = ({ toggleDrawer }) => {
  const pathname = usePathname();
  return (
    <div className="font-Barlow text-base leading-5 tracking-[1%] p-6">
      <IoCloseSharp
        className="lg:hidden block  w-10 ml-auto "
        onClick={toggleDrawer}
      />
      {/* border-b border-gray/75 */}
      <div className="space-y-4">
        <div className="">
          <Link
            className={`${
              pathname === "/" && "text-primary font-semibold"
            } text-base   hover:text-primary `}
            href="/"
          >
            Home
          </Link>
        </div>
        <div className="">
          {" "}
          <Link
            className={`${
              pathname === "#about" && "text-primary font-semibold"
            } text-base   hover:text-primary `}
            href="#about"
          >
            About Us
          </Link>
        </div>

        {/* <div className="">
          <Link
            className={`${
              pathname === "/services" && "text-primary font-semibold"
            } text-base   hover:text-primary `}
            href="/services"
          >
            Services
          </Link>
        </div> */}
        <div className="">
          <Link
            className={`${
              pathname === "/packages" && "text-primary font-semibold"
            } text-base   hover:text-primary `}
            href="/packages"
          >
            Package
          </Link>
        </div>
        
        <div className="">
          <Link
            className={`${
              pathname === "/contact-us" && "text-primary font-semibold"
            } text-base   hover:text-primary `}
            href="/contact-us"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavLinkMob;
