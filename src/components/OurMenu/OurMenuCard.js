import React from "react";
import Card from "./Card";
import AoS from "../AoS/AoS";

const OurMenuCard = () => {
  return (
    <>
      <div className="lg:py-12 py-10">
        <div className="container-sk">
          <h6 className="text-black font-black text-3xl md:text-[48px] uppercase lg:mb-10 text-center">
            Sandwich
          </h6>
          <AoS animation="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </AoS>
        </div>
      </div>
    </>
  );
};

export default OurMenuCard;
