import Link from "next/link";
import React from "react";
import { IconButton } from "@mui/material";
import { IoLogoTiktok, IoMailSharp } from "react-icons/io5";
import { MdFacebook, MdPhoneInTalk } from "react-icons/md";

const FooterDetails = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {/* Home */}
      <div className=" overflow-hidden lg:text-base md:text-base text-sm space-y-2 lg:mt-0 mt-6">
        <h3 className="text-[22px] font-semibold  mb-6"> Our Links</h3>

        <div>
          <Link
            href="/"
            className="w-max cursor-pointer  hover:font-semibold"
          >
            <span className="  ">Home</span>
          </Link>
        </div>

        <div>
          <Link
            href="/about-us"
            className="w-max cursor-pointer  hover:font-semibold"
          >
            <span className="   ">About Us</span>
          </Link>
        </div>
        <div>
          <Link
            href="/our-menu"
            className="w-max cursor-pointer  hover:font-semibold"
          >
            <span className="   ">Our Menu</span>
          </Link>
        </div>
        <div>
          <Link
            href="/contact-us"
            className="w-max cursor-pointer  hover:font-semibold"
          >
            <span className="   ">Contact Us</span>
          </Link>
        </div>
      </div>


      <div className=" overflow-hidden lg:text-base md:text-base text-sm space-y-2 lg:mt-0 mt-6">
        <h3 className="text-[22px] font-semibold  mb-6"> Opening Time</h3>

        Monday to Sunday: <br></br> 7.00 am to 12.00 am
      </div>


      {/* about */}
      <div>
        <h6 className="flex items-center justify-start gap-4 text-base font-semibold text-black-primary">
          <IconButton className=" text-secondary ">
            <MdPhoneInTalk className="text-2xl text-black " />
          </IconButton>
          <a href={`tel:01728585985`}>01728585985</a>
        </h6>
        <h6 className="flex items-center justify-start gap-4 text-base font-semibold text-black-primary">
          <IconButton className=" text-secondary ">
            <IoMailSharp className="text-2xl text-black " />{" "}
          </IconButton>
          <a href={`mailto: chui.chinese85@gmail.com`}>
          chui.chinese85@gmail.com
          </a>
          
          {/* {Restaurant?.email} */}
        </h6>
      </div>

      
    </div>
  );
};

export default FooterDetails;
