import React from "react";
import ReviewCarousel from "./ReviewCarousel";

const CustmerReview = () => {
  return (
    <div className="bg-gray-bg lg:py-20 md:py-16 py-10">
      <div className="container-sk ">
        <p className="text-black font-black text-4xl md:text-[48px] md:leading-[80px] text-center uppercase">
          Some Reviews
        </p>
        <p className="text-center lg:mt-0 mt-2">
          OF OUR CLIENTS
        </p>

        <ReviewCarousel/>
      </div>
    </div>
  );
};

export default CustmerReview;
