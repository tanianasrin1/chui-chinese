import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NavButton = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (router.asPath.includes("#request-callback")) {
        const element = document.getElementById("request-callback");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [300]);
  }, [router.asPath]);

  return (
    <Link
      href="/#request-callback"
      className="lg:flex items-center justify-start hidden"
    >
      <div className="">
        <button className="bg-primary text-white px-10 py-3  ripple font-medium rounded-md">
          Request Call Back
        </button>
      </div>
    </Link>
  );
};

export default NavButton;
