import React, { useEffect, useState } from "react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import useWindowSize from "@/hook/useWindowSize";
import ReviewSlider from "./ReviewSlider";
import useWindowSize from "@/hooks/useWindowSize";

const ReviewCarousel = ({ googleReview }) => {
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
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={count}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      className=" lg:h-[380px] md:h-[380px] h-[350px]"
    >
      <>
        {/* { googleReview?.data?.length > 0 && googleReview?.data?.map(
          (item, index) =>
             (
              <>
                <SwiperSlide>
                  <ReviewSlider key={index} data={item} />
                </SwiperSlide>
              </>
            )
        )} */}

        <SwiperSlide>
          <ReviewSlider/>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlider/>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlider/>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewSlider/>
        </SwiperSlide>
      </>
    </Swiper>
  );
};

export default ReviewCarousel;
