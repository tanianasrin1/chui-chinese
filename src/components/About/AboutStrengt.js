import React from "react";
import StrengthCard from "./StrengthCard";

const AboutStrengt = () => {
  return (
    <div className="lg:py-16 py-10 bg-gray-bg">
      <div className="container-sk">
        <p className="text-black font-black text-4xl md:text-[48px] md:leading-[80px] text-center">
          Our Strength
        </p>

        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-6 mt-8 lg:mt-6">
         <StrengthCard/>
         <StrengthCard/>
         <StrengthCard/>
        </div>
      </div>
    </div>
  );
};

export default AboutStrengt;
