import { WhatsApp } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

const Scroller = ({ siteSetting }) => {


  return (
    <>
      <div className="fixed bottom-0 right-0 m-5 lg:m-10 ">
        {/* <Link
          
          href={`https://wa.me/${siteSetting?.data?.whatsapp}`} 
          target="_blank"
          aria-label="whatsapp"
        >
          <div className=" w-10 h-10 flex items-center  bg-[#42e457] justify-center rounded-lg  duration-300">
            <WhatsApp className="  text-white shadow-lg  text-4xl " />
          </div>
        </Link> */}
        
      </div>
    </>
  );
};

export default Scroller;
