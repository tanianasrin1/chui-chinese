import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const Topheader = () => {
  // console.log("site", siteSetting);
  return (
    <div className="bg-black ">
      <div className="container-sk text-white text-sm py-2">
        <div className="flex justify-between items-center">
          <div className="flex flex-row justify-between items-center">
            <div className="gap-4 flex flex-row">
              <div className="flex items-center justify-start text-white">
                <div>
                  <FaPhoneAlt className="text-green" />
                </div>
                <div>
                  <div className="ms-2">
                    <p className="">
                      {" "}
                      <a href={`tel:052798754`}>
                        <span className="">09278653321 </span>{" "}
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start text-white">
                <div>
                  <MdEmail className="text-green" />
                </div>
                <div>
                  <div className="ms-2">
                    <p className="">
                      {" "}
                      <a href={`mailto:info@gmail.com`}>
                        <span className="">info@gmail.com </span>{" "}
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 ">
            <>
              <Link href="/" target="_blank">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 512 512"
                    style={{ fill: "white" }}
                  >
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                </div>
              </Link>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topheader;
