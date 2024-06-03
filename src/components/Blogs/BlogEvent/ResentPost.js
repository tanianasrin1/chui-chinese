import Image from "next/image";
import React from "react";

const ResentPost = () => {
  return (
    <div>
      <div className="flex mt-5 lg:flex-row flex-col items-center gap-4">
        <div className="lg:w-5/12 w-full">
          <div >
            <Image
              className="rounded-lg object-contain"
              src="/images/noimage.png"
              //   src={ item?.thumbnail ?
              //     `${item?.thumbnail}?t=${new Date().getTime()}` :
              //     "/images/noimage.png"
              //   }
              alt="Institution logo"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className=" lg:w-7/12 w-full">
          <p className="lg:text-xl md:text-lg truncate text-lg font-medium">
            {/* {item?.title} */}
            test
          </p>
          {/* <p className="md:text-base text-sm mt-2">{item?.published_at}</p> */}
          <p className="md:text-base text-sm mt-2">26 Jan 2024</p>
        </div>
      </div>
    </div>
  );
};

export default ResentPost;
