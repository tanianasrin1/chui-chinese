import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const Topheader = () => {
  // console.log("site", siteSetting);
  return (
    <div className="bg-primary ">
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
                  <div className="  flex items-center justify-center  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9h4v-2h-4v2z" />
                      <image
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                        href="/"
                      />
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
