import Image from "next/image";
import React from "react";

const OfferCard = () => {
  return (
    <div className="lg:w-[330px] bg-white w-full rounded shadow-2xl p-6">
      <div>
        <Image
          className="rounded-t-lg rounded object-cover lg:h-44 h-44"
          src="/images/Logo-02.jpg"
          width={330}
          height={200}
          alt="Institution logo"
        />
      </div>

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
  );
};

export default OfferCard;
