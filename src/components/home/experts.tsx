import React from "react";
import Carousel from "./carousel";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/scroll";
import Link from "next/link";

const Experts = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, x: 250 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="pt-14 ">
      <p className=" text-3xl font-montserrat text-center">
        what experts are saying
      </p>
      <Carousel />

      {/* experience the power */}
      <div className=" w-11/12 sm:w-4/5 mx-auto bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1716788236/Mask-group-11_duexx1.jpg)] py-20 lg:py-0 lg:h-[90vh] rounded bg-cover bg-right mt-36 relative text-white">
        {/* overlay */}
        <div className="absolute h-full w-full inset-0 bg-gradient-to-b bg-black opacity-40 rounded"></div>
        <div className="relative px-3 md:p-7 sm:p-14 font-montserrat text-center flex flex-col h-full justify-center">
          <motion.div
            // @ts-ignore
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1 }}
          >
            <p className=" text-3xl md:text-5xl w-2/3 mx-auto font-montserrat sm:font-semibold flex justify-center">
              Experience the power of HIM wireless{" "}
            </p>
            <Link href="/shop" className="py-3 px-16 mt-8 border border-blue-700 hover:border-white bg-blue-700 text-white text-lg rounded-full  inline-block">Shop Now</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
