import React, { useEffect, useState } from "react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useWindowSize from "@/hook/useWindowSize";
import PopularSlider from "./PopularSlider";
import CarouselSlider from "./CarouselSlider";
const PopularCarousel = () => {
  const windowSize = useWindowSize();
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (windowSize?.width < 450) {
      setCount(2);
    } else if (windowSize?.width < 850) {
      setCount(2);
    } else if (windowSize?.width < 1024) {
      setCount(3);
    } else {
      setCount(3);
    }
  }, [windowSize]);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={count}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className=" lg:h-[200px] md:h-[200px] h-[180px] lg:my-10 my-6"
      >
        <>
          {/* { listArea?.data.length > 0 && listArea?.data?.map(
          (item, index) =>
            
              <>
                <SwiperSlide>
                  <PopularSlider key={index} item={item} />
                </SwiperSlide>
              </>
           
        )} */}

          <SwiperSlide>
            <CarouselSlider/>
          </SwiperSlide>
          <SwiperSlide>
            <CarouselSlider/>
          </SwiperSlide>
          <SwiperSlide>
            <CarouselSlider/>
          </SwiperSlide>
          <SwiperSlide>
            <CarouselSlider/>
          </SwiperSlide>
          <SwiperSlide>
            <CarouselSlider/>
          </SwiperSlide>
        </>
      </Swiper>
    </>
  );
};

export default PopularCarousel;
