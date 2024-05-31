"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/scroll";
import { Items } from "@/components/shop/data";
import Carousel from "@/components/shop/carousel";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { fetchAll } from "@/api/fetchAll";

const Page = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const { toast } = useToast();

  const variant = {
    hidden: { opacity: 0, y: 250 },
    visible: { opacity: 1, y: 0 },
  };
  const variant2 = {
    hidden: { opacity: 0, x: -250 },
    visible: { opacity: 1, x: 0 },
  };

  interface CartItem {
    id: number;
    price: number;
    quantity: number;
    [key: string]: any; // Optional: if there are other properties that are not defined explicitly
  }

  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (newItem: any) => {
    setCart((prevCart: any) => {
      const itemInCart = prevCart.find(
        (cartItem: any) => cartItem.id === newItem.id
      );

      if (itemInCart) {
        return prevCart.map((cartItem: any) =>
          cartItem.id === newItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...newItem, quantity: 1 }];
      }
    });
    toast({
      title: "Added to Cart",
      //  "Friday, February 10, 2023 at 5:57 PM",
    });
  };

  const removeFromCart = (itemToRemove: any) => {
    setCart((prevCart: any) =>
      prevCart
        .map((item: any) =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item: any) => item.quantity > 0)
    );
  };

  const getTotalItemCount = () => {
    // @ts-ignore
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // total quantity of all items in the cart
  const totalCount = getTotalItemCount();

  const getItemQuantity = (id: any) => {
    const item = cart.find((cartItem: any) => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="">
      <div className="bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1715771549/samples/landscapes/architecture-signs.jpg)] bg-cover bg-center h-72 sm:min-h-[50vh] relative">
        {/* overlay */}
        <div className="absolute h-full w-full bg-black inset-0 opacity-60"></div>
        {/* @ts-ignore */}
        <Header count={totalCount} cart={cart} />
        <div className="pt-44 px-7 sm:px-24 relative">
          <motion.div
            // @ts-ignore
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variant2}
            transition={{ duration: 1 }}
          >
            <p className="font-montserrat text-4xl sm:text-6xl text-white">
              Shop
            </p>
          </motion.div>
        </div>
      </div>

      {/* items */}
      <div className=" px-5 sm:px-12 md:px-20">
        {Items.map((item, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-3 mt-12 items-center gap-3 justify-center"
            key={index}
          >
            <Carousel images={item.images} />

            <div className="flex flex-col gap-2 col-span-2">
              <p className="text-2xl ">{item.name}</p>
              <p className="text-lg">${item.price}</p>
              <p className="text-slate-600">{item.description}</p>

              {/* add to cart */}
              <div className="flex justify-center md:justify-start mt-3">
                <div className="flex flex-col items-center">
                  <div className="flex">
                    <button
                      className="border border-slate-500 rounded-[100%] h-8 w-8 text-2xl text-slate-500 flex flex-col justify-center items-center"
                      onClick={() => removeFromCart(item)}
                    >
                      -
                    </button>{" "}
                    <span className="px-5 flex flex-col justify-center text-xl">
                      {getItemQuantity(item.id)}
                    </span>{" "}
                    <button
                      onClick={() => addToCart(item)}
                      className="border border-slate-500 rounded-[100%] h-8 w-8 text-2xl flex flex-col justify-center items-center text-slate-500"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="ml-2 font-montserrat text-center  md:text-left mt-1"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
