import Category from "@/components/Blogs/BlogEvent/Category";
import Image from "next/image";
import React from "react";

const DetailsEvent = ({ data, recentBlog }) => {
  return (
    <div className=" bg-[url('/images/aboutBanner.png')] bg-scroll bg-cover bg-center  ">
      <div className="min-h-[72vh]   ">
        <div className="container-sk py-8 md:py-14">
          <p className="lg:text-[32px] md:text-3xl text-2xl font-semibold text-secondary ">
            Explore Our
          </p>
          <p className="lg:text-[72px]  lg:leading-[82px] w-full md:text-6xl text-5xl text-black font-medium mt-2">
            Blog & Events
          </p>
          <div className="flex lg:flex-row flex-col gap-4 lg:mt-10 mt-5">
            <div className="lg:w-8/12 w-full">
              <div>
                <Image
                  className="rounded-t-lg"
                  src="/images/noimage.png"
                  //   src={ data?.thumbnail ?
                  //     `${data?.thumbnail}?t=${new Date().getTime()}` :
                  //     "/images/noimage.png"
                  //   }
                  width={600}
                  height={400}
                  alt="Institution logo"
                />
              </div>

              <div className="w-full bg-white  rounded-xl py-5 px-4">
                {/* <p className="mb-4 text-black-600">{data?.published_at}</p> */}
                <p className="mb-4 text-black-600">29 Jan 2025</p>
                <p className="lg:text-[32px] md:text-3xl text-2xl font-semibold text-black-600">
                  {/* {data?.title} */}
                  Test
                </p>

                <p className="md:text-base text-sm lg:leading-[26px] text-gray lg:mt-10 mt-5">
                  {/* {data?.short_description} */}
                  Test test test
                </p>
                {/* <p className="md:text-base text-sm lg:leading-[26px] text-gray mt-6 ">
                   {data?.description}
                   
                  </p> */}

                <div
                  className="md:text-base text-sm lg:leading-[26px] text-gray mt-6 "
                  dangerouslySetInnerHTML={{ __html: data?.description }}
                />
              </div>
            </div>
            <div className="lg:w-4/12 w-full lg:mt-10 mt-5">
              {/* <Category  recentBlog={recentBlog}/> */}

              <Category recentBlog={recentBlog} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsEvent;
