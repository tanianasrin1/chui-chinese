import Link from "next/link";
import React from "react";
import AoS from "../AoS/AoS";

const Visite = () => {
  return (
    <div className="w-full bg-[url('/images/banner-bg.png')] bg-cover bg-center m-0">
      <div className="d-container flex flex-col items-center justify-center py-16 gap-6">
        <AoS animation="fade-up">
        <div className="container-sk">
          <h2 className="text-black font-black text-3xl md:text-[48px] md:leading-[80px] text-center">
            WOULD YOU LIKE TO CONTACT US?
          </h2>
          <p className="text-center  text-base mt-3 lg:mt-0">
            Book a table even right now or make an online order!
          </p>
        </div>
        </AoS>
       
        <Link href={"/contact-us"} className=" flex lg:justify-start justify-center">
              <button className="bg-secondary  hover:bg-secondary/90  px-10 py-3 mt-0  rounded text-lg capitalize font-semibold text-white">
              Contact Us
              </button>
            </Link>
      </div>
    </div>
  );
};

export default Visite;
