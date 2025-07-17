import React from "react";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/scroll";
import { TbTruckDelivery } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";

const Hero = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.1 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, x: -350 },
    visible: { opacity: 1, x: 0 },
  };
  const variant2 = {
    hidden: { opacity: 0, x: 350 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="h-full flex-grow flex items-center relative ">
      {/* overlay */}
      <div className="absolute h-full w-full bg-black opacity-60 to-transparent "></div>
      <div className="gap-y-10 relative">
        <motion.div
          // @ts-ignore
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1 }}
        >
          <p className="text-5xl sm:text-7xl lg:text-8xl font-bold px-6 sm:px-10 md:px-16">
            Thugger&apos;s Store
          </p>
          <p className="px-6 sm:px-10 md:px-16 text-2xl mt-5 ml-5 font-montserrat">
            Your home for everything
          </p>
        </motion.div>

        <div className="sm:flex mt-5">
          <motion.div
            // @ts-ignore
            ref={ref2}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variant2}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center px-5 sm:px-10 lg:px-16">
              <TbTruckDelivery className="h-20 text-5xl" />
              <p className="font-montserrat text-xl sm:text-2xl sm:font-semibold">
                Home Delivery
              </p>
            </div>
          </motion.div>
          {/* noise cancellation */}
          <motion.div
            // @ts-ignore
            ref={ref2}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variant2}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center px-5 sm:px-10 lg:px-16">
              <RiRefund2Fill className="h-20 text-5xl" />
              <p className="font-montserrat text-xl sm:text-2xl sm:font-semibold">
                Fully Refundable*
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
