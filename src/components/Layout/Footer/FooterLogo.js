import React from "react";
import FooterDetails from "./FooterDetails";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import Link from "next/link";

const FooterLogo = ({ siteSetting }) => {
  return (
    <div className="  flex lg:flex-row flex-col lg:gap-12 gap-6 lg:py-8  py-4">
      <div className="lg:w-4/12 w-full ">
        <Image
          placeholder="blur"
          // src={siteSettings?.data?.logo}
          src="/images/Logo-02.jpg"
          width={500}
          height={100}
          alt="logo"
          className="object-contain  lg:h-[85px]  md:h-[55px]  h-[45px] my-auto w-fit"
          blurDataURL="/blur.png "
        />

        <p className="  text-secondary lg:text-base md:text-base text-sm my-8">
          {/* {siteSetting?.data?.description} */}
          Our courses cover everything from the fundamentals of driving to
          advanced techniques. You ll leave our school with the knowledge and
          skills to be a safe and responsible driver.
        </p>

        
          <Link href="https://www.facebook.com/profile.php?id=61566990931265&mibextid=ZbWKwL" target="_blank"><FaFacebook /></Link>
      
      </div>

      <div className="lg:w-8/12 w-full ">
        <FooterDetails />
      </div>
    </div>
  );
};

export default FooterLogo;
