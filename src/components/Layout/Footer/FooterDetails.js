import Link from "next/link";
import React from "react";


const FooterDetails = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
      {/* Home */}
      <div className=" overflow-hidden lg:text-lg md:text-base text-sm space-y-2 lg:mt-0 mt-6">
        <h3 className="text-[22px] font-semibold  mb-6"> Our Links</h3>

        <div>
          <Link
            href="/"
            className="w-max cursor-pointer  hover:underline hover:text-white"
          >
            <span className="  ">Home</span>
          </Link>
        </div>

        <div>
          <Link
            href="#about"
            className="w-max cursor-pointer  hover:underline hover:text-white"
          >
            <span className="   ">About Us</span>
          </Link>
        </div>
        <div>
          <Link
            href="/packages"
            className="w-max cursor-pointer  hover:underline hover:text-white"
          >
            <span className="   ">Packages</span>
          </Link>
        </div>

       
      </div>

      {/* about */}
      <div className=" overflow-hidden lg:text-lg md:text-base text-sm space-y-2 lg:mt-0 mt-6">
        <h3 className="text-[22px] font-semibold  mb-6"> Policy</h3>

        <div>
          <Link
            href="/"
            className="w-max cursor-pointer  hover:underline hover:text-white"
          >
            <span className="">Privacy Policy</span>
          </Link>
        </div>

        <div>
          <Link
            href="/"
            className="w-max cursor-pointer  hover:underline hover:text-white"
          >
            <span className="">Terms and Condition</span>
          </Link>
        </div>
        <div>
          <Link
            href="/contact-us"
            className="w-max cursor-pointer   hover:underline hover:text-white"
          >
            <span className="  ">Contact Us</span>
          </Link>
        </div>
      </div>

      
    </div>
  );
};

export default FooterDetails;
