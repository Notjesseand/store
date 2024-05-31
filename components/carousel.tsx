import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { fetchAll } from "@/api/fetchAll";
import ProductCard from "./productCard";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string;
  rating: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const Carousel: React.FC<ProductCardProps> = ({ onAddToCart }) => {
  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetchAll();
      setNewArrivals(data?.products);
    })();
  }, []);

  return (
    <Swiper
      spaceBetween={1}
      // slidesPerView={3}

      breakpoints={{
        // when window width is >= 768px
        308: {
          slidesPerView: 2,
        },
        720: {
          slidesPerView: 3,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
        },
      }}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper px-8 mt-10 rounded-md font-montserrat"
    >
      {newArrivals &&
        newArrivals.map((product: any, index: number) => (
          <SwiperSlide key={index} className="w-full flex">
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Carousel;
