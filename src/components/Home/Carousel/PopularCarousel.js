import React, { useEffect, useState } from "react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarouselSlider from "./CarouselSlider";
import useWindowSize from "@/hooks/useWindowSize";

const PopularCarousel = () => {
  const windowSize = useWindowSize();
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (windowSize?.width < 450) {
      setCount(1);
    } else if (windowSize?.width < 850) {
      setCount(1);
    } else if (windowSize?.width < 1024) {
      setCount(1);
    } else {
      setCount(1);
    }
  }, [windowSize]);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={count}
        // pagination={{ clickable: true }}
        // dotListClassName="custom-dot-list-style"
        autoplay={{ delay: 3000 }}
        className=" lg:h-[400px] md:h-[200px] h-[180px] lg:my-10 my-6"
      >
        <>
          <SwiperSlide>
            <CarouselSlider />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselSlider />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselSlider />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselSlider />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselSlider />
          </SwiperSlide>
        </>
      </Swiper>
    </>
  );
};

export default PopularCarousel;
