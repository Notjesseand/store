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
    <div className="pb-20">
      <div className="bg-slate-50 sm:min-h-[45vh]">
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
      {/* table section */}
      <div className="pt-20 px-0 sm:px-14 lg:px-36">
        <div className="grid grid-cols-5 sm:grid-cols-7 bg-slate-50 font-montserrat font-semibold gap-1 text-sm sm:text-lg p-4 rounded">
          <p className="col-span-2 sm:col-span-4">Product</p>
          <p className="">Price</p>
          <p className="text-center">Quantity</p>
          <p className="text-center">Total{"($)"}</p>
        </div>
        {/* data */}

        {cart &&
          cart.map((item, index) => (
            <div className="grid grid-cols-5 sm:grid-cols-7 font-montserrat text-sm gap-1 sm:text-lg p-4 rounded">
              <p className="col-span-2 sm:col-span-4">{item.title}</p>
              <p className="col-span-">${item.price}</p>
              <p className="text-center">{item.quantity}</p>
              <p className="text-center">
                ${(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          ))}
      </div>
      <button className="bg-black text-white py-2 px-20 rounded flex mx-auto mt-10">
        Pay Now
      </button>
    </div>
  );
};

export default Page;
