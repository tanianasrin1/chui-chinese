import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

const NavLinkMob = ({ toggleDrawer }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="font-Barlow text-base leading-5 tracking-[1%] p-6">
      <IoCloseSharp
        className="lg:hidden block  w-10 ml-auto "
        onClick={toggleDrawer}
      />
      {/* border-b border-gray/75 */}
      <div>
        <Link href="/">
          <Button
            className={`w-max ${
              router.pathname == "/" && "font-bold"
            } text-secondary text-sm lg:text-base   capitalize`}
          >
            Home
          </Button>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <Button
            className={`w-max ${
              router.pathname == "/about" && "font-bold"
            } text-secondary text-sm lg:text-base   capitalize`}
          >
            About Us
          </Button>
        </Link>
      </div>
      <div>
        <Link href="/our-menu">
          <Button
            className={`w-max ${
              router.pathname == "/our-menu" && "font-bold"
            } text-secondary text-sm lg:text-base   capitalize`}
          >
            Our Menu
          </Button>
        </Link>
      </div>
      <div>
        <Link href="/offer">
          <Button
            className={`w-max ${
              router.pathname == "/offer" && "font-bold"
            } text-secondary text-sm lg:text-base   capitalize`}
          >
            Offer
          </Button>
        </Link>
      </div>
      <div>
        <Link href="/contact-us">
          <Button
            className={`w-max ${
              router.pathname == "/contact-us" && "font-bold"
            } text-secondary text-sm lg:text-base   capitalize`}
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavLinkMob;
