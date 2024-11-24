import Image from "next/image";
import React from "react";

const StrengthCard = () => {
  return (
    <div>
      <Image
        className="object-cover lg:h-44 lg:w-44 h-24 w-24 rounded-full mx-auto"
        src="/images/Logo-02.jpg"
        width={200}
        height={100}
        alt="logo"
      />
      <p className="text-base  text-black  text-center mt-4">Hygiene & Halal</p>
      <p className="text-base  text-black text-center mt-2">Foods</p>
    </div>
  );
};

export default StrengthCard;
