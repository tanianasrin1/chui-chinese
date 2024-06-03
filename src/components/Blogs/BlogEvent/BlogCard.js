import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <div className="lg:w-[330px] bg-white w-full rounded-xl shadow-xl ">
      <div >
        <Image
          className="rounded-t-lg"
          src="/images/noimage.png"
          // src={ item?.thumbnail ?
          //   `${item?.thumbnail}?t=${new Date().getTime()}` :
          //   "/images/noimage.png"
          // }
          width={330}
          height={300}
          alt="Institution logo"
        
        />
      </div>

      <div className="lg:w-[410px] bg-white w-full rounded-xl py-5 px-4">
        {/* <p className="mb-3 text-black-600">{item?.published_at}</p> */}
        <p className="mb-3 text-black-600">15 Jan 2024</p>
        <p className="lg:text-[32px] md:text-3xl text-2xl font-semibold text-dark-blue">
          {/* {item?.title} */}
          test title
        </p>

        <p className="md:text-base text-sm lg:leading-[26px] text-gray lg:mt-3 mt-4">
          {/* {item?.short_description} */}
          test test test
        </p>

        <Link href={`/blogs/slug`}>
          <div className="lg:mt-6 mt-3">
            <button className="bg-primary text-white px-6 py-3 lg:text-xl md:text-lg text-base ripple font-medium rounded-lg">
              Read More
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
