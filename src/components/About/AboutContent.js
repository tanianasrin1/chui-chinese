import Image from "next/image";
import React from "react";
import AoS from "../AoS/AoS";

const AboutContent = () => {
  return (
    <div className="lg:py-16 py-10">
      <div className="container-sk flex lg:flex-row flex-col gap-10 items-center">
        <div className="w-full lg:w-1/2">
          <AoS animation="fade-right">
            <div>
              <h1 className="lg:text-4xl  md:text-3xl text-2xl font-bold text-black uppercase lg:text-left text-center">
                About Us
              </h1>
              <p className="text-base mt-4">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>

              <p className="text-base mt-4">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum. Many desktop publishing packages and
                web page editors now use Lorem Ipsum as their default model
                text, and a search for lorem ipsum will uncover many web sites
                still in their infancy.{" "}
              </p>
            </div>
          </AoS>
        </div>
        <div className="w-full lg:w-1/2">
          <AoS animation="flip-right">
            <div>
              <Image
                className=" object-cover lg:h-72 md:h-64  h-56"
                src="/images/Logo-02.jpg"
                width={550}
                height={350}
                alt="Institution logo"
                blurDataURL="/blur.png"
              />
            </div>
          </AoS>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
