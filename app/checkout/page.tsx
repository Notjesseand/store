"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Product from "@/components/home/product";

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
  console.log(cart);

  return (
    <div>
      <div>
        {/* @ts-ignore */}
        <Header cart={cart} count={cartCount} />
      </div>
    </div>
  );
};

export default Page;
