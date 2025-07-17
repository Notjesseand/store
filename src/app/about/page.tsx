"use client";
import React from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/scroll";
import { VscThumbsup } from "react-icons/vsc";
import Footer from "@/components/Footer";
import Link from "next/link";
const Page = () => {
  const [ref1, isvisible1] = useOnScreen({ threshold: 0.1 });
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.1 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.1 });
  const [ref4, isVisible4] = useOnScreen({ threshold: 0.1 });
  const [ref5, isVisible5] = useOnScreen({ threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, x: 250 },
    visible: { opacity: 1, x: 0 },
  };

  const variant2 = {
    hidden: { opacity: 0, y: 250 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="overflow-hidden">
      <div className="bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1715771549/samples/landscapes/architecture-signs.jpg)] bg-cover bg-center h-72 sm:h-96 relative">
        {/* overlay */}
        <div className="absolute h-full w-full bg-black inset-0 opacity-60"></div>
        {/* @ts-ignore */}
        <Header />
        <div className="pt-44 px-7 sm:px-24 relative">
          <motion.div
            // @ts-ignore
            ref={ref1}
            initial="hidden"
            animate={isvisible1 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1 }}
          >
            <p className="font-montserrat text-4xl text-white">About us</p>
          </motion.div>
        </div>
      </div>
      {/*  */}
      <div className="grid md:grid-cols-2 pt-12 px-6 gap-6 sm:px-9 lg:px-16">
        <img
          src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716799650/group_bgvjqz.jpg"
          alt=""
          className="rounded-lg w-full md:w-[30rem] aspect-auto flex mx-auto"
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
            <p className="text-2xl sm:text-3xl text-center mt-4">
              At Seven Wireless, we combine innovation with passion!
            </p>
          </motion.div>
        </div>
      </div>

      {/* people innovations quality */}
      <div className="grid md:grid-cols-3 gap-5 pt-20 px-14">
        {/* people */}
        <motion.div
          // @ts-ignore
          ref={ref2}
          initial="hidden"
          animate={isVisible2 ? "visible" : "hidden"}
          variants={variant2}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center text-center">
            <img
              src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716800677/Screenshot_2024-05-27_035934-removebg-preview_oh1wwz.png"
              alt=""
              className="h-20"
            />
            <p className="text-2xl py-5 font-semibold">People</p>
            <p>
              Our team is composed of passionate audio enthusiasts and dedicated
              professionals committed to delivering the best listening
              experience. With years of expertise in sound engineering and
              product design, we focus on innovation and quality. Each member of
              our team brings a unique perspective, ensuring that our headphones
              are not only technologically advanced but also user-friendly and
              stylish. We&apos;re here to enhance your audio journey, one
              headphone at a time.
            </p>
          </div>
        </motion.div>

        {/* innovations */}
        <motion.div
          // @ts-ignore
          ref={ref3}
          initial="hidden"
          animate={isVisible3 ? "visible" : "hidden"}
          variants={variant2}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center text-center">
            <img
              src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716802455/Screenshot_2024-05-27_041253-removebg-preview_urazt5.png"
              alt=""
              className="h-20"
            />
            <p className="text-2xl py-5 font-semibold">Innovations</p>
            <p>
              At the forefront of audio technology, our headphones integrate
              cutting-edge innovations to provide you with a superior listening
              experience. From advanced noise-cancellation features to wireless
              connectivity and high-resolution audio support, our products are
              designed to meet the demands of modern audiophiles. We
              continuously invest in research and development to bring you the
              latest advancements in sound technology, ensuring that our
              headphones are always ahead of the curve. Experience the future of
              audio with our groundbreaking innovations.
            </p>
          </div>
        </motion.div>

        {/* Quality */}
        <motion.div
          // @ts-ignore
          ref={ref4}
          initial="hidden"
          animate={isVisible4 ? "visible" : "hidden"}
          variants={variant2}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center text-center">
            <VscThumbsup className="h-20 text-4xl" />
            <p className="text-2xl py-5 font-semibold">Quality</p>
            <p>
              Experience the pinnacle of sound excellence with our headphones.
              Crafted with precision and designed for comfort, our headphones
              deliver unparalleled audio clarity. Every note, every beat, every
              sound is brought to life, ensuring you enjoy music the way it was
              meant to be heard. Elevate your listening experience with our
              state-of-the-art technology and superior build quality. Let the
              music take you to new heights.
            </p>
          </div>
        </motion.div>
      </div>

      {/*  */}
      <div className="grid md:grid-cols-2 pt-16 px-6 gap-6 sm:px-9 lg:px-16">
        <div className="flex flex-col justify-center items-center px-4">
          <motion.div
            // @ts-ignore
            ref={ref5}
            initial="hidden"
            animate={isVisible5 ? "visible" : "hidden"}
            variants={variant2}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <p className="text-2xl sm:text-3xl text-center mt-4">
              We develop premium products for your style & comfort
            </p>
            <Link href="/shop" className="py-3 px-16 mt-8 border border-blue-700 hover:border-white bg-blue-700 text-white text-lg rounded-full mx-auto inline-block justify-center">
              Shop Now
            </Link>
          </motion.div>
        </div>
        <img
          src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716810581/Mask-group-35_vursfu.webp"
          alt=""
          className="rounded-lg w-full md:w-[30rem] aspect-auto flex mx-auto"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
