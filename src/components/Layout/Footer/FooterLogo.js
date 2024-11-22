import React from "react";
import FooterDetails from "./FooterDetails";
import Image from "next/image";

const FooterLogo = ({ siteSetting }) => {
  return (
    <div className="  flex lg:flex-row flex-col lg:gap-12 gap-6 lg:py-8  py-4">
      <div className="lg:w-4/12 w-full ">
        <Image
          placeholder="blur"
          // src={siteSettings?.data?.logo}
          src="/images/Logo-02.jpg"
          width={500}
          height={500}
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

        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
          >
            <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
          </svg>
        </div>
      </div>

      <div className="lg:w-8/12 w-full ">
        <FooterDetails />
      </div>
    </div>
  );
};

export default FooterLogo;
