import React from "react";

const Location = () => {
  return (
    <div className="my-12">
      <div className="container-sk">
        <h6 className="text-center lg:text-3xl md:text-2xl text-xl font-bold">
          Locate Us
        </h6>

        <div className="mt-5 lg:mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8443583059734!2d90.3781425!3d23.752928999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9004c03f3b9%3A0x265ae02940ce4ca2!2zQ2h1aSAmIENoaW5lc2UgKOCmmuCngeCmgeCmhyDgpo_gpqjgp43gpqEg4Kaa4Ka-4KaH4Kao4Ka_4Kac!5e0!3m2!1sen!2sbd!4v1731820040267!5m2!1sen!2sbd"
            title="Google Map"
            className="h-60 md:h- w-full lg:rounded-3xl md:rounded-2xl rounded-xl"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
