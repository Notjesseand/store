"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Product from "@/components/home/product";
import Link from "next/link";

interface CartItem extends Product {
  quantity: number;
}
const Page = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  // fetching the cart data from the local storage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <div>
      <div className="bg-[#eee] sm:min-h-[45vh]">
        <Header count={cartCount} cart={cart} clearCart={clearCart} />
        <div className="pt-44 pl-5 md:pl-24 pb-16">
          <p className="text-xl sm:text-3xl text-black  font-semibold">
            {" "}
            Thugger
          </p>

          <div className="flex space-x-2 text-sm sm:text-lg font-montserrat font-semibold pt-3">
            <Link href="/">Thugger</Link> <span> {">"} </span>{" "}
            <span>Store</span> <span> {">"} </span>{" "}
            <Link href={`/products/${""}`} className="text-orange-500">
              SHOPCART
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
