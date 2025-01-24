import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tilt from "react-parallax-tilt";

const Card = () => {
  return (
    <>
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        scale={1.05}
        transitionSpeed={200}
        className=""
      >
        <div className=" bg-white w-full rounded shadow-2xl p-6">
          <div>
            <Image
              className="rounded-t-lg rounded object-cover lg:h-36 h-44"
              src="/images/sandwich.jpg"
              width={330}
              height={200}
              alt="Institution logo"
            />
          </div>

          <div className="rounded-xl py-3">
            <p className="  text-base font-medium ">Smokie Chicken Sandwich</p>

            <div className="flex justify-between mt-3">
              <p className="font-semibold text-xl  ">160 Tk</p>
              <p className="text-base ">Large</p>
            </div>

            <Link href={"/"} className="">
              <button className="bg-primary hover:bg-primary/90  px-8 py-2.5 mt-4  rounded-md  text-base  font-semibold text-black">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default Card;
