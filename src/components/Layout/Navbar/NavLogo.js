import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLogo = () => {
  // console.log("siite", siteSetting);

  return (
    <div>
      <Link href="/">
        <div className="lg:w-[88px] lg:h-[65px] w-[69px] h-[48px] relative">
          <Image
            className=""
            // src={
            //   `${siteSetting?.data?.logo}?t=${new Date().getTime()}` ||
            //   "/images/noimage.png"
            // }
            src="/images/noimage.png"
            alt="Institution logo"
            fill
          />
        </div>
      </Link>
    </div>
  );
};

export default NavLogo;
