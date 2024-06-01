"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/scroll";
import { Items } from "@/components/shop/data";
import Carousel from "@/components/shop/carousel";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { fetchData } from "@/api/fetch";
import ProductCard from "@/components/productCard";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string[];
  rating: number;
}

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

  const [data, setData] = useState<Product[]>([]);

  const [searchQuery, setSearchQuery] = useState("");

  const getData = async () => {
    const response = await fetchData(`search?q=${searchQuery}`);
    setData(response.products);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (event: any) => {
    setSearchQuery(event.target.value);
    getData();
  };
  console.log(data);

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
        <div className="pt-44 w-full relative">
          <div className="relative w-11/12 sm:w-2/3 mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Search..."
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.9 14.32a8 8 0 111.41-1.41l4.3 4.3a1 1 0 01-1.42 1.42l-4.3-4.3zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {searchQuery && (
        <p className="font-nunito text-lg text-center pt-20">
          showing results for {searchQuery}
        </p>
      )}
      {/* items */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-y-6 px-1.5  md:px-12 lg:px-20 pt-9">
        {data.map((item: any, index: any) => (
          <ProductCard key={index} product={item} onAddToCart={addToCart} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
