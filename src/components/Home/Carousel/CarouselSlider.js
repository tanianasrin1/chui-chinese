import Image from "next/image";
import React from "react";

const CarouselSlider = () => {
  return (
    <div className="flex items-center h-full">
      <Image
        placeholder="blur"
        src="/images/banner1.png"
        width={500}
        height={500}
        alt="Picture of the author"
        blurDataURL="/blur.png"
        className="object-contain w-full h-72 pointer-events-none my-auto"
      />
    </div>
  );
};

export default CarouselSlider;
