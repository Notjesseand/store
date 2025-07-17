import React from "react";
import useOnScreen from "@/hooks/scroll";
import { motion } from "framer-motion";

const Innovations = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, x: 250 },
    visible: { opacity: 1, x: 0 },
  };
  const variant2 = {
    hidden: { opacity: 0, x: -250 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-y-7 pt-24 px-7 sm:px-8 md:px-14">
        <img
          src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716745026/innovations_z6kx1n.jpg"
          alt=""
          className=" w-full sm:w-4/5 rounded-lg flex mx-auto"
        />
        <div className="flex flex-col justify-center  items-center">
          <motion.div
            // @ts-ignore
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1 }}
          >
            <p className="text-3xl sm:text-4xl font-semibold">Innovations</p>
            <p className="leading-7 text-base sm:text-lg mt-4">
              Discover the cutting-edge innovations that set our headphones
              apart. Engineered with the latest technology, our headphones offer
              unparalleled features designed to enhance your listening
              experience.
            </p>
            <ul className="flex flex-col gap-3 mt-5 text-base sm:text-lg ">
              <li className="dot-list">Transparency Mode</li>
              <li className="dot-list">Active Noise Cancelling</li>
              <li className="dot-list">Ultra Light Carrying Case</li>
            </ul>
          </motion.div>
        </div>
      </div>
      {/* technology of the future */}

      <div className="grid sm:grid-cols-2 gap-y-7 pt-24 px-7 sm:px-8 md:px-14">
        <div className="flex flex-col justify-center">
          <motion.div
            // @ts-ignore
            ref={ref2}
            initial="hidden"
            animate={isVisible2 ? "visible" : "hidden"}
            variants={variant2}
            transition={{ duration: 1 }}
          >
            <p className="text-3xl sm:text-4xl font-semibold">
              Technology of the future
            </p>
            <p className="leading-7 text-base sm:text-lg mt-4">
              Experience the future of audio with our state-of-the-art
              headphones. Engineered with cutting-edge technology, our
              headphones provide an unparalleled listening experience that sets
              new standards in the industry. Embrace the innovation and
              excellence that comes with every pair, designed to deliver
              superior sound quality and advanced features for the modern
              listener.
            </p>
          </motion.div>
        </div>
        <img
          src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716750001/tech_ejgv2q.jpg"
          alt=""
          className=" w-full sm:w-4/5 rounded-lg flex mx-auto"
        />
      </div>
    </>
  );
};

export default Innovations;
