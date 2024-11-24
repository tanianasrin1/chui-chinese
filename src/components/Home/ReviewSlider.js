import React from "react";
// import Cusmoter from "./Cusmoter";
import Image from "next/image";
// import { RiDoubleQuotesL } from "react-icons/ri";
import { Rating } from "@mui/material";

const ReviewSlider = () => {
  return (
    <>
      <div className="">
        <div className="mt-6">
          <Image
            className=" object-cover lg:h-20 lg:w-20 md:h-32 md:w-32 h-10 w-10 rounded-full mx-auto"
            src="/images/test.jpg"
            width={50}
            height={50}
            alt="Institution logo"
            blurDataURL="/blur.png"
          />
        </div>
        <div className=" flex justify-center items-center">
          <Rating
            className="text-primary mt-5 text-lg "
            name="read-only"
            value={5 || 0}
            readOnly
          />
        </div>

        <p className="lg:text-lg md:text-base text-sm lg:leading-[28px]  text-center lg:w-8/12 lg:mt-7 md:mt-10 mt-8  mx-auto w-full">
          “ Our certified instructors have years of experience in teaching safe
          and defensive driving techniques. They are dedicated to helping you
          become a confident and responsible driver.We understand that every
          student is unique. Our courses are personalized to match your skill
          level, pace, and goals”
        </p>
        <p className="lg:text-[22px] md:text-lg text-base  text-center font-semibold lg:mt-7 mt-5 text-black-theme">
          Cody Fisher
        </p>
      </div>
    </>
  );
};

export default ReviewSlider;
