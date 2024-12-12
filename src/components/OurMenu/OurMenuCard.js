import React from "react";
import Card from "./Card";

const OurMenuCard = () => {
  return (
    <>
      <div className="lg:py-12 py-10">
        <div className="container-sk">
          <h6 className="text-black font-black text-3xl md:text-4xl uppercase  text-center">
          Sandwich
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMenuCard;
