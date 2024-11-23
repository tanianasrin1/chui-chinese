import React from "react";
// import Cusmoter from "./Cusmoter";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Rating } from "@mui/material";

const ReviewSlider = () => {
  return (
    <>
      {/* <Cusmoter data={data} /> */}

      <div className=" ">
        <div>
          <Image
            className=" object-cover lg:h-20 lg:w-20 md:h-32 md:w-32 h-10 w-10 rounded-full border border-orange-800"
            src="/images/noimage.png"
            width={50}
            height={50}
            alt="Institution logo"
            blurDataURL="/blur.png"
          />
        </div>
        <div className="">
          <p className="uppercase lg:text-xl md:text-xl text-base font-semibold text-blue">
            Eva
          </p>
          <p className="lg:text-base md:text-sm text-xs text-blue">
            {" "}
            testhvhhvgv
          </p>
        </div>
        <div className="">
          <Rating
            className="text-yellow mt-5 text-lg "
            name="read-only"
            value={5 || 0}
            readOnly
          />
        </div>
      </div>
    </>
  );
};

export default ReviewSlider;
