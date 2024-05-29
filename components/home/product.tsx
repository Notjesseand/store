import React from "react";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/scroll";
import { BsPhone } from "react-icons/bs";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { varianty } from "@/hooks/variant";
import Link from "next/link";

const Product = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.01 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.01 });
  const [ref4, isVisible4] = useOnScreen({ threshold: 0.01 });
  const [ref5, isVisible5] = useOnScreen({ threshold: 0.01 });
  const [ref6, isVisible6] = useOnScreen({ threshold: 0.01 });
  const [ref7, isVisible7] = useOnScreen({ threshold: 0.01 });
  const [ref8, isVisible8] = useOnScreen({ threshold: 0.01 });
  const variants = {
    hidden: { opacity: 0, x: 250 },
    visible: { opacity: 1, x: 0 },
  };
  const variant2 = {
    hidden: { opacity: 0, y: 250 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center w-full ">
      <div className="grid md:grid-cols-2 pt-12 px-6 gap-6 sm:px-9 lg:px-16">
        <img
          src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716690113/headphones_wkjogt.jpg"
          alt=""
          className="rounded-lg w-full md:w-[30rem] aspect-auto sm:aspect-square flex mx-auto"
        />
        <div className="flex flex-col justify-center items-center px-4">
          <motion.div
            // @ts-ignore
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1 }}
          >
            <p className="text-2xl sm:text-3xl">HIM wireless headphones</p>
            <p className="text-xl font-montserrat mt-3">$350</p>
            <ul className="flex flex-col gap-3 mt-5 text-base sm:text-xl ">
              <li className="dot-list">Carrying Case</li>
              <li className="dot-list">Seven Wireless Headphones</li>
              <li className="dot-list">Quick Start Guide</li>
              <li className="dot-list"> USB Charging Cable</li>
            </ul>
            <Link
              href="/shop"
              className="inline-block px-8 py-2 border-black hover:bg-black hover:text-white border rounded-full mt-6"
            >
              Buy online
            </Link>
          </motion.div>
        </div>
      </div>
      {/* features */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 pt-20 px-5 md:px-10 gap-y-12 pb-10">
        {/* battery life */}
        <motion.div
          // @ts-ignore
          ref={ref2}
          initial="hidden"
          animate={isVisible2 ? "visible" : "hidden"}
          variants={variant2}
          transition={{ duration: 1 }}
        >
          <div className=" items-center justify-center text-center flex flex-col">
            <img
              src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716721154/Screenshot_2024-05-26_054408-removebg-preview_ihmjlg.png"
              alt=""
              className="h-24"
            />
            <p className="text-base sm:text-xl font-montserrat font-semibold">
              48 hours battery life
            </p>
          </div>
        </motion.div>

        {/* noise cancellation */}
        <motion.div
          // @ts-ignore
          ref={ref3}
          initial="hidden"
          animate={isVisible3 ? "visible" : "hidden"}
          variants={variant2}
          transition={{ duration: 1 }}
        >
          <div className=" items-center justify-center text-center flex flex-col">
            <img
              src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716663000/Screenshot_2024-05-25_134901-removebg-preview_hyswbb.png"
              alt=""
              className="h-24"
            />
            <p className="text-base sm:text-xl font-montserrat font-semibold">
              Active noise cancelling
            </p>
          </div>
        </motion.div>

        {/* compatible */}
        <motion.div
          // @ts-ignore
          ref={ref4}
          initial="hidden"
          animate={isVisible4 ? "visible" : "hidden"}
          variants={variant2}
          transition={{ duration: 1 }}
        >
          <div className=" items-center justify-center text-center flex flex-col">
            <BsPhone className="text-6xl text-slate-500 my-5" />
            <p className="text-base sm:text-xl font-montserrat font-semibold">
              Compatible with IOS and Android
            </p>
          </div>
        </motion.div>

        {/* warranty */}
        <motion.div
          // @ts-ignore
          ref={ref5}
          initial="hidden"
          animate={isVisible5 ? "visible" : "hidden"}
          variants={variant2}
          transition={{ duration: 1 }}
        >
          <div className=" items-center justify-center text-center flex flex-col">
            <VscWorkspaceTrusted className="text-6xl text-slate-500 my-5" />
            <p className="text-base sm:text-xl font-montserrat font-semibold">
              3 years worldwide warranty
            </p>
          </div>
        </motion.div>
      </div>
      {/* designed for your comfort */}
      <div className=" w-11/12 sm:w-4/5 mx-auto bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1716660235/Mask-group-6_xnf21b.webp)] py-20 lg:py-0 lg:h-[90vh] rounded bg-cover bg-right mt-14 relative text-white">
        {/* overlay */}
        <div className="absolute h-full w-full inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-black opacity-75 sm:opacity-40 rounded"></div>
        <div className="relative px-3 md:p-7 sm:p-14 font-montserrat md:w-4/5 lg:w-3/5  flex flex-col h-full justify-center">
          <motion.div
            // @ts-ignore
            ref={ref6}
            initial="hidden"
            animate={isVisible6 ? "visible" : "hidden"}
            variants={variant2}
            transition={{ duration: 1 }}
          >
            <p className="text-4xl font-montserrat font-semibold flex">
              Designed for your comfort
            </p>
            <p className="leading-7 mt-3">
              Experience unparalleled comfort with our expertly crafted
              headphones. Engineered with precision, our headphones ensure a
              perfect fit while delivering exceptional sound quality. Enjoy
              long-lasting comfort with every use, thanks to our innovative
              design and premium materials. Elevate your listening experience
              and immerse yourself in sound like never before.
            </p>
          </motion.div>
        </div>
      </div>

      {/* clear sound */}
      <div className=" w-11/12 sm:w-4/5 mx-auto bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1716660235/Mask-group-4_ujijgz.webp)] py-20 lg:py-0 lg:h-[90vh] justify-end sm:flex rounded bg-cover bg-left mt-14 relative text-white">
        {/* overlay */}
        <div className="absolute h-full w-full inset-0 bg-gradient-to-b sm:bg-gradient-to-l from-black opacity-75 sm:opacity-40 rounded"></div>
        <div className="relative px-3 md:p-7 sm:p-14 font-montserrat md:w-4/5 lg:w-3/5  flex flex-col h-full justify-center">
          <motion.div
            // @ts-ignore
            ref={ref7}
            initial="hidden"
            animate={isVisible7 ? "visible" : "hidden"}
            variants={variant2}
            transition={{ duration: 1 }}
          >
            <p className="text-4xl font-montserrat font-semibold flex">
              Clear Sound
            </p>
            <p className="leading-7 mt-3">
              Experience sound like never before with our state-of-the-art
              headphones. Designed for audio clarity, our headphones ensure
              every note and beat is delivered with precision. Whether
              you&apos;re enjoying your favorite music, gaming, or taking calls,
              our advanced sound technology offers unmatched quality. Dive into
              a world of clear, crisp, and immersive audio.
            </p>
          </motion.div>
        </div>
      </div>

      {/* modern aesthetics */}
      <div className=" w-11/12 sm:w-4/5 mx-auto bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1716660235/Mask-group-9_skfc3c.webp)] py-20 lg:py-0 lg:h-[90vh] rounded bg-cover bg-right mt-14 relative text-white">
        {/* overlay */}
        <div className="absolute h-full w-full inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-black opacity-75 sm:opacity-40 rounded"></div>
        <div className="relative px-3 md:p-7 sm:p-14 font-montserrat md:w-4/5 lg:w-3/5  flex flex-col h-full justify-center">
          <motion.div
            // @ts-ignore
            ref={ref8}
            initial="hidden"
            animate={isVisible8 ? "visible" : "hidden"}
            variants={variant2}
            transition={{ duration: 1 }}
          >
            <p className="text-4xl font-montserrat font-semibold flex">
              Modern aesthetics
            </p>
            <p className="leading-7 mt-3">
              Our headphones blend cutting-edge technology with sleek, modern
              aesthetics. Designed to make a statement, they offer a seamless
              combination of style and functionality. With a contemporary look
              that complements any setting, our headphones ensure you not only
              enjoy premium sound but also look great doing it. Elevate your
              audio experience with a touch of modern elegance.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Product;
