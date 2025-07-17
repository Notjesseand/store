import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useOnScreen from "@/hooks/scroll";
import { motion } from "framer-motion";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CollectionsCarousel = ({ data }: { data: any }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, y: 250 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Swiper
      // navigation={true}
      spaceBetween={15}
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={{
        // when window width is >= 768px
        308: {
          slidesPerView: 3,
        },
        720: {
          slidesPerView: 4,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 5,
        },
      }}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      className="mySwiper mt-12 gap-4"
    >
      {data &&
        data.map((item: any, index: string) => (
          <SwiperSlide
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
            className="text-center w-4/5 bg-pink-400 aspect-square rounded-full flex mx-auto"
          >
            p
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default CollectionsCarousel;
