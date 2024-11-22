import React, { useEffect } from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const NavButton = () => {
  return (
   

    <div className="lg:block hidden">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray flex justify-center items-center rounded-full ">
          <PhoneInTalkIcon className="text-lg " />
        </div>
        <div className="ms-3">
          <p>Talk to an expert</p>
          <a>
            <p>01728585985</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavButton;
