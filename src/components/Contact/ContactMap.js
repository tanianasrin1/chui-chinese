import React from "react";

const ContactMap = () => {
  return (
    <div className="lg:py-20 md:py-16 py-10">
      <div className="container-sk">
        <div className="responsive-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d607.1776890439072!2d-1.8690303!3d52.5024752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bb4493440cc5%3A0x6e56841614c58f46!2sGee%20Business%20Centre!5e0!3m2!1sen!2sbd!4v1717660204308!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen
            title="Google Map"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
