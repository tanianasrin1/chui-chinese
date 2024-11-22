import React, { useEffect, useState } from "react";
import FooterLogo from "./FooterLogo";

const Footer = ({siteSetting}) => {
  

  return (
    <>
      <div className="bg-primary text-secondary lg:py-20 md:pt-16 pt-10 lg:pb-0 ">
        <div className="container-sk ">
          <FooterLogo siteSetting={siteSetting} />
        </div>

        <div className="w-full  text-center text-secondary  lg:text-base text-sm  ">
          
          <div className="py-4  container-sk border-t  font-semibold text-center justify-between items-center  gap-2 tracking-wide">
            <span> Copyright © 2024 Chui & Chinese. All Rights Reserved</span>
          
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
