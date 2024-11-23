import React from "react";
import ReviewCarousel from "./ReviewCarousel";

const CustmerReview = () => {
  return (
    <div className="bg-gray-bg lg:py-20 md:py-16 py-10">
      <div className="container-sk ">
        <p className="lg:text-7xl md:text-5xl text-2xl text-black text-center">
          Some Reviews
        </p>
        <p className="lg:text-lg md:text-base text-sm text-primary uppercase text-center lg:w-10/12 w-full mx-auto lg:mt-8 mt-6 lg:leading-[27px] leading-[18px]">
          OF OUR CLIENTS
        </p>

        <ReviewCarousel/>
      </div>
    </div>
  );
};

export default CustmerReview;
