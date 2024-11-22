import Image from "next/image";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
// Import Swiper styles

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "@/hooks/useWindowSize";

const Categories = () => {
  // console.log('Eva', resData);
  const windowSize = useWindowSize();
  const [count, setCount] = useState(6);

  useEffect(() => {
    if (windowSize?.width < 450) {
      setCount(2);
    } else if (windowSize?.width < 850) {
      setCount(3);
    } else if (windowSize?.width < 1024) {
      setCount(4);
    } else if (windowSize?.width < 1280) {
      setCount(5);
    } else {
      setCount(6);
    }
  }, [windowSize]);

  return (
    <section className="bg-white">
      <div className="container-sk  py-8 lg:py-16">
        
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={count}
        //   pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
        >
          <div className="w-full grid grid-cols-2 gap-2 text-center lg:grid-cols-5">
            <SwiperSlide tag="li" className="w-full">
              <>
                <Image
                  className="object-cover lg:h-24 lg:w-24 h-16 w-16 rounded-full"
                  src="/images/Logo-02.jpg"
                  width={200}
                  height={100}
                  alt="logo"
                />
                <p className="text-sm lg:text-base  text-secondary mt-3">Chicken Wings
                </p>
              </>
            </SwiperSlide>
            <SwiperSlide tag="li" className="w-full">
              <>
                <Image
                  className="object-cover lg:h-24 lg:w-24 h-16 w-16 rounded-full"
                  src="/images/Logo-02.jpg"
                  width={200}
                  height={100}
                  alt="logo"
                />
                <p className="text-sm lg:text-base  text-secondary mt-3">Chicken Wings
                </p>
              </>
            </SwiperSlide>
            <SwiperSlide tag="li" className="w-full">
              <>
                <Image
                  className="object-cover lg:h-24 lg:w-24 h-16 w-16 rounded-full"
                  src="/images/Logo-02.jpg"
                  width={200}
                  height={100}
                  alt="logo"
                />
                <p className="text-sm lg:text-base  text-secondary mt-3">Chicken Wings
                </p>
              </>
            </SwiperSlide>
            <SwiperSlide tag="li" className="w-full">
              <>
                <Image
                  className="object-cover lg:h-24 lg:w-24 h-16 w-16 rounded-full"
                  src="/images/Logo-02.jpg"
                  width={200}
                  height={100}
                  alt="logo"
                />
                <p className="text-sm lg:text-base  text-secondary mt-3">Chicken Wings
                </p>
              </>
            </SwiperSlide>
            <SwiperSlide tag="li" className="w-full">
              <>
                <Image
                  className="object-cover lg:h-24 lg:w-24 h-16 w-16 rounded-full"
                  src="/images/Logo-02.jpg"
                  width={200}
                  height={100}
                  alt="logo"
                />
                <p className="text-sm lg:text-base  text-secondary mt-3">Chicken Wings
                </p>
              </>
            </SwiperSlide>
            <SwiperSlide tag="li" className="w-full">
              <>
                <Image
                  className="object-cover lg:h-24 lg:w-24 h-16 w-16 rounded-full"
                  src="/images/Logo-02.jpg"
                  width={200}
                  height={100}
                  alt="logo"
                />
                <p className="text-sm lg:text-base  text-secondary mt-3">Chicken Wings
                </p>
              </>
            </SwiperSlide>
            <SwiperSlide tag="li" className="w-full">
              <>
                <Image
                  className="object-cover lg:h-24 lg:w-24 h-16 w-16 rounded-full"
                  src="/images/Logo-02.jpg"
                  width={200}
                  height={100}
                  alt="logo"
                />
                <p className="text-sm lg:text-base  text-secondary mt-3">Chicken Wings
                </p>
              </>
            </SwiperSlide>
            <SwiperSlide tag="li" className="w-full">
              <>
                <Image
                  className="object-cover lg:h-24 lg:w-24 h-16 w-16 rounded-full"
                  src="/images/Logo-02.jpg"
                  width={200}
                  height={100}
                  alt="logo"
                />
                <p className="text-sm lg:text-base  text-secondary mt-3">Chicken Wings
                </p>
              </>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
