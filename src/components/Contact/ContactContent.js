import React from "react";
import ContactForm from "./ContactForm";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const ContactContent = () => { 
  return (
    <div className="lg:py-20 md:py-16 py-10 lg:mt-10 mt-20">
      <div className="container-sk">
        <p className="lg:text-4xl md:text-3xl text-2xl font-bold text-center lg:mb-8 mb-6">
          Contact Us
        </p>

        <div className="flex lg:flex-row flex-col items-center lg:gap-20 gap-10">
          <div className="lg:w-1/2 w-full">
            <ContactForm />
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="">
              <p className=" text-secondary  lg:text-3xl md:text-2xl text-xl font-bold">
                Contact Us
              </p>
              {/* <div className="lg:mt-5 mt-3">
                <hr className="w-2/12  border-2 border-secondary" />
              </div> */}
              <div className=" overflow-hidden  text-base space-y-4 lg:mt-6 mt-4  ">
                <div className="flex items-center justify-start ">
                  <div>
                    <FiPhoneCall className="text-2xl text-gray" />
                  </div>

                  <div className="ms-3">
                    <p className="text-xl font-bold text-primary ">Phone</p>
                    <span className="text-gray-secondary">
                      {" "}
                      {/* <a href={`tel:${siteSetting?.data?.phone}`}> */}
                      <a href={`tel: +99 (786) 8765`}>
                        {/* {siteSetting?.data?.phone} */}
                        01728585985
                      </a>{" "}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-start ">
                  <div>
                    <MdOutlineMail className="text-2xl text-gray" />
                  </div>

                  <div className="ms-3">
                    <p className="text-xl font-bold text-primary ">Email</p>
                    <span className="text-gray-secondary">
                      {" "}
                      {/* <a href={`tel:${siteSetting?.data?.email}`}> */}
                      <a href={`tel:info@gmail.com`}>chui.chinese85@gmail.com</a>{" "}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-start ">
                  <div>
                    <SlLocationPin className="text-2xl text-gray" />
                  </div>

                  <div className="ms-3">
                    <p className="text-xl font-bold text-primary ">Address</p>
                    <span className="text-gray-secondary">
                      
                      95/B, Sukrabad, Dhanmondi 32, Dhaka-1205
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
