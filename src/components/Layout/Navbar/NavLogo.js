import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLogo = ({ siteSetting }) => {
  // console.log("siite", siteSetting);

  return (
    <div>
      <Link href="/">
        <div className="lg:w-[99px] lg:h-[88px] w-[69px] h-[58px] relative">
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
