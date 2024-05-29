import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// @ts-ignore
const Carousel = ({ images }) => {
  const data = images;
  return (
    <div className="flex">
      <Swiper
        // navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        className="mySwiper justify-center flex mx-auto items-center text-center"
      >
        {data.map((item: any, index: number) => (
          <SwiperSlide className="text-center" key={index}>
            <img
              src={item}
              alt=""
              className=" w-11/12 flex rounded-lg mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
