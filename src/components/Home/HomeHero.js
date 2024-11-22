import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import PopularCarousel from "./Carousel/PopularCarousel";

const HomeHero = () => {
  return (
    <div className="bg-[url('/images/banner-bg.png')] bg-center bg-cover   ">
      <div className="container-sk  lg:min-h-screen mt-10  grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 lg:gap-20 ">
        <div className="w-full  lg:my-auto cursor-grab">
          {/* <HeroSlider /> */}
          <PopularCarousel />
        </div>

        <div className="w-full  flex flex-col items-start gap-5  lg:my-auto">
          <h1 className="break-all font-black text-center lg:text-start text-3xl md:text-[72px] md:leading-[80px] text-black ">
             Test
          </h1>
          <h6 className="font-semibold text-base md:text-lg lg:text-xl text-center lg:text-start">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </h6>

          <Link href={"/"} className="w-full">
            <Button
              variant="contained"
              className="bg-secondary mx-auto lg:mx-0 hover:bg-secondary/90 w-full mt-10 lg:w-[210px] h-[70px] rounded-md rounded-t-[40px] text-lg capitalize font-semibold text-white"
            >
              Order Online
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
