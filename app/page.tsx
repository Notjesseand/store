"use client";
import React, { useEffect, useState } from "react";

import Header from "@/components/Header";
import Product from "@/components/home/product";
import Innovations from "@/components/home/innovations";
import Hero from "@/components/home/hero";
import Experts from "@/components/home/experts";
import Footer from "@/components/Footer";
import { fetchAll } from "@/api/fetchAll";

interface CartItem extends Product {
  quantity: number;
}

export default function Page() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: any) => {
    setCart((prevCart: any) => {
      const itemInCart = prevCart.find(
        (cartItem: any) => cartItem.id === product.id
      );

      if (itemInCart) {
        return prevCart.map((cartItem: any) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className=" my-0 py-0 font-custom overflow-hidden">
      <div className="min-h-screen bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1716943138/3-ps-compressed_mxf2eh.jpg)] bg-cover flex flex-col relative text-white bg-fixed bg-center">
        <Header count={cartCount} cart={cart} />
        <Hero />
      </div>
      <Product onAddToCart={handleAddToCart} />

      <Footer />
    </div>
  );
}
