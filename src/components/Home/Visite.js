import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const Visite = () => {
  return (
    <div className="w-full bg-[url('/images/banner-bg.png')] bg-cover bg-center m-0">
      <div className="d-container flex flex-col items-center justify-center py-16 gap-6">
        <h2 className="text-black font-black text-4xl md:text-[48px] md:leading-[80px] text-center">
          WOULD YOU LIKE TO CONTACT US?
        </h2>
        <p className="text-center  text-base">
          Book a table even right now or make an online order!
        </p>
        <Link href="/contact-us" className="">
          <Button className="text-white text-xl font-semibold capitalize px-20 py-5 rounded rounded-t-[40px] overflow-hidden bg-secondary hover:bg-primary">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Visite;
