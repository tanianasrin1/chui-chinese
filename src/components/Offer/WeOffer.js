import React from "react";
import OfferCard from "./OfferCard";

const WeOffer = () => {
  return (
    <div className="lg:py-16 py-10">
      <div className="container-sk">
        <h6 className="text-black font-black text-3xl md:text-[48px] md:leading-[80px] uppercase text-center">
         Our Offer
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 lg:mt-6">
              <OfferCard/>
              <OfferCard/>
              <OfferCard/>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
