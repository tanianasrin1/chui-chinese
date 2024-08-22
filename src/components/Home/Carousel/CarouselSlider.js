import Image from "next/image";
import React from "react";

const CarouselSlider = () => {
  return (
    <div>
      <Image
        src="/images/noimage.png"
        alt="picture"
        width={450}
        height={200}
        className=" lg:h-40 md:h-36 h-28 object-contain rounded-2xl"
      />
    </div>
  );
};

export default CarouselSlider;
