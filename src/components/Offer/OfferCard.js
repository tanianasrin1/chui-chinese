import Image from "next/image";
import React from "react";
import AoS from "../AoS/AoS";

const OfferCard = () => {
  return (
    <>
    <AoS animation="fade-up">
    <div className="lg:w-[330px] bg-white w-full rounded shadow-2xl p-6 relative">
      <div>
        <Image
          className="rounded-t-lg rounded object-cover lg:h-44 h-44"
          src="/images/sandwich.jpg"
          width={330}
          height={200}
          alt="Institution logo"
        />
      </div>
      <span className="mt-6 ml-6  px-2 py-1 text-black font-semibold bg-primary md:text-sm text-xs rounded-lg absolute left-0 top-0 bg-opacity-80 ">
      10% DISCOUNT
      </span>
      <div className="rounded-xl py-5">
        <p className="lg:text-xl truncate md:text-2xl text-xl font-semibold ">
          Classic chicken Burger
        </p>
        <p className="text-base mt-2 ">Large</p>
        <div className="flex justify-between mt-4">
          <p>
            {" "}
            Price:{" "}
            <span className="font-semibold text-xl text-primary">
              {" "}
              <del>189 Tk</del>
            </span>{" "}
          </p>
          <p className="font-semibold text-xl ">160 Tk</p>
        </div>
      </div>
    </div>
    </AoS>
    </>
    
  );
};

export default OfferCard;
