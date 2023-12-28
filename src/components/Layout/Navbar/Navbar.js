import React, { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import { BiMenu } from "react-icons/bi";
import NavLogo from "./NavLogo";
import Links from "./Links";
import NavButton from "./NavButton";
import NavLinkMob from "./NavLinkMob";



const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };


  return (
    <div className="bg-white py-2">
      <div className="container-sk flex items-center justify-between relative">
        <NavLogo />
        <Links />

       <NavButton/>

        <BiMenu
          className="lg:hidden block  w-10 ml-auto cursor-pointer text-xl md:text-2xl"
          onClick={toggleDrawer}
        />
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="bla bla bla"
        >
         
          <NavLinkMob toggleDrawer={toggleDrawer}/>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
