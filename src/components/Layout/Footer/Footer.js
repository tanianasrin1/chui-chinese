import React, { useEffect, useState } from "react";
import FooterLogo from "./FooterLogo";

const Footer = ({siteSetting}) => {
  

  return (
    <>
      <div className="bg-primary text-white lg:py-20 md:pt-16 pt-10 lg:pb-0 ">
        <div className="container-sk ">
          <FooterLogo siteSetting={siteSetting} />
        </div>

        <div className="w-full  text-center text-white  lg:text-base text-sm  ">
          
          <div className="py-4  container-sk border-t flex md:flex-row flex-col text-center justify-between items-center  gap-2 tracking-wide">
            <span> Copyright © 2023 TsT. All Rights Reserved</span>
            {/* {<p>{siteSetting?.data?.copyright}</p>} */}

            <a href="https://buyoniasoft.com/" target="_blank" rel="noreferrer">
              <span>
                Developed by
                <span className="text-white hover:text-red-600 duration-300 px-2">
                  Buyonia Limited
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
