import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const submitQuery = async (values) => {
    const email = values.email;
    const name = values.name;
    const website = values.website;
    const phone = values.phone;
    const message = values.message;

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/enquiries`,
        { email, name, website, phone, message }
      );
      const { status, data } = res;

      if (status === 200) {
        toast.success("Submitted Successfully");
      }
    } catch (error) {
      toast.error("Something went wrong ! Please try again");
    }
  };
  return (
    <div className="">
      <div className=" bg-primary px-8 py-12 rounded-lg ">
        <h2 className="lg:text-2xl md:text-xl text-lg  mb-8 font-bold text-center">
          Get In Touch
        </h2>

        <Formik
          enableReinitialize
          initialValues={{
            email: "",
            message: "",
            phone: "",
            website: "",
            name: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.name) {
              errors.name = "Required";
            }
            if (!values.message) {
              errors.message = "Required";
            }

            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            submitQuery(values);
            console.log("test", values);
            resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,

            /* and other goodies */
          }) => (
            <form
              className=" lg:mx-0 my-8 lg:my-0  flex flex-col items-start gap-y-4"
              onSubmit={handleSubmit}
            >
              <div className="w-full">
                <input
                  type="text"
                  className="outline-none border-[1px] rounded border-white bg-transparent placeholder-white w-full p-3 text-white  text-sm "
                  placeholder="Full Name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <p className="text-xs ml-3 text-red-700 mt-1">
                  {errors.message && touched.message && errors.message}
                </p>
              </div>

              <div className="w-full">
                <input
                  type="email"
                  className="outline-none border-[1px] rounded border-white placeholder-white bg-transparent w-full p-3 text-white  text-sm "
                  placeholder="Email Address"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p className="text-xs ml-3 text-red-700 mt-1">
                  {errors.message && touched.message && errors.message}
                </p>
              </div>

              <div className="w-full">
                <textarea
                  type="text"
                  name="message"
                  placeholder="Your Message"
                  className="outline-none border-[1px] rounded border-white placeholder-white bg-transparent w-full p-3 text-white  text-sm h-[120px]"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
              </div>
              <button
                type="submit"
                // disabled={isLoading}
                className="ripple bg-secondary rounded w-full px-16 py-3 text-white  font-semibold hover:bg-blue-primary"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
