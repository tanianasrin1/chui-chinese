import React, { useEffect } from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const NavButton = () => {
  return (
    // <Link
    //   href="/"
    //   className="lg:flex items-center justify-start hidden"
    // >
    //   <div className="">
    //     <button className="bg-primary text-white px-10 py-3  ripple font-medium rounded-md">
    //       Request Call Back
    //     </button>
    //   </div>
    // </Link>

    <div className="lg:block hidden">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray flex justify-center items-center rounded-full ">
          <PhoneInTalkIcon className="text-lg " />
        </div>
        <div className="ms-3">
          <p>Talk to an expert</p>
          <a>
            <p> +99 (786) 8765</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavButton;
