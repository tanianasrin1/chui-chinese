import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const AboutBanner = () => {
  return (
    <div className="w-full  overflow-hidden relative ">
      <Image
        src="/images/aboutbenner.jpg"
        alt="picture"
        layout="fill"
        objectFit="cover"
        loading="eager"
      />
      <div className=" backdrop-brightness-50 flex flex-col justify-center w-full h-full lg:p-20 p-5 md:p-10 lg:mt-16 mt-10">
        <div className="container-sk flex flex-col justify-center h-full  lg:mt-20 mt-10">
          <h1 className="uppercase  text-white tracking-wide lg:text-lg md:text-lg text-base font-semibold mb-4">
            {/* {aboutData?.about_banner?.banner_item?.title} */}
            {/* About Us */}
          </h1>

          <p className="lg:text-[36px] lg:leading-[60px] md:text-3xl text-2xl font-bold text-white uppercase">
            About Us
          </p>

          <div className="text-white flex items-center mt-5">
            <Link href="/" aria-label="about us">
              Home
            </Link>
            <BiChevronRight className="text-base font-bold" />
            <p> About Us </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
