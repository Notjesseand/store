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

const IntroCarousel = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, y: 250 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      className="mySwiper mt-12"
    >
      <SwiperSlide className="text-center">
        <img
          src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716753267/person_o7o9zg.jpg"
          alt=""
          className="h-28 rounded-full flex mx-auto"
        />
        <div className="w-5/6 sm:w-2/3 text-center flex flex-col mx-auto pt-8 font-montserrat sm:text-lg">
          <p>
            &quot;These headphones provide an unparalleled sound experience. The
            clarity and bass response are incredible, making them perfect for
            DJing. I&apos;ve never heard my mixes sound this good&quot;
          </p>
          <p className="pt-3 font-semibold">Gregory Red / DJ</p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="text-center">
        <img
          src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716753267/person2_ls38cc.webp"
          alt=""
          className="h-28 rounded-full flex mx-auto"
        />
        <div className="w-5/6 sm:w-2/3 text-center flex flex-col mx-auto pt-8 font-montserrat sm:text-lg">
          <p>
            &quot;As a singer, I&apos;m amazed at how these headphones capture
            every nuance of my voice. The noise-canceling feature allows me to
            focus completely on my performance, even in noisy
            environments.&quot;
          </p>
          <p className="pt-3 font-semibold">Tiffany Brightwood / Singer </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <img
          src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716753267/person3_mrkugw.jpg"
          alt=""
          className="h-28 rounded-full flex mx-auto"
        />
        <div className="w-5/6 sm:w-2/3 text-center flex flex-col mx-auto pt-8 font-montserrat sm:text-lg">
          <p>
            &quot;The build quality and sound reproduction of these headphones
            are outstanding. They offer a balanced sound profile that is perfect
            for studio work. Plus, they&apos;re comfortable enough for long
            sessions.&quot;
          </p>
          <p className="pt-3 font-semibold"> Richard Black / Sound Producer </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default IntroCarousel;
