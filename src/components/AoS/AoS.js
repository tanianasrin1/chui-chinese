import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AoS = ({ animation, children }) => {
    useEffect(function () {
        Aos.init({ duration: 700, mirror: false });
      }, []);
    
    return <div data-aos={animation}>{children}</div>;
    
};

export default AoS;