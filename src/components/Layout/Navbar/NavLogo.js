import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLogo = () => {
  // console.log("siite", siteSetting);

  return (
    <div>
      <Link href="/" className="w-fit">
          <Image
            placeholder="blur"
            // src={siteSettings?.data?.logo}
            src="/images/Logo-02.jpg"
            width={100}
            height={80}
            alt="logo"
            className="object-contain h-10 w-fit md:h-[85px]  my-auto"
            blurDataURL="/blur.png "
            loading="eager"
          />
        </Link>
    </div>
  );
};

export default NavLogo;
