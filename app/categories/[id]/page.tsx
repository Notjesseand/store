"use client";
import React, { useEffect, useState } from "react";
import { fetchData } from "@/api/fetch";
import Header from "@/components/Header";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import ProductCard from "@/components/productCard";
import Footer from "@/components/Footer";

interface CartItem {
  quantity: number;
}
const Page = ({ params }: { params: any }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData(`category/${params.id}`);
      if (response) {
        setData(response.products);
      }
    };
    getData();
  }, []);

  console.log(data);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const { toast } = useToast();
  const addToCart = (product: any) => {
    setCart((prevCart: any) => {
      const itemInCart = prevCart.find(
        (cartItem: any) => cartItem.id === product.id
      );

      const updatedCart = itemInCart
        ? prevCart.map((cartItem: any) =>
            cartItem.id === product.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...prevCart, { ...product, quantity: 1 }];

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;
    });
    toast({
      title: "Added to Cart",
    });
  };

  const getTotalItemCount = () => {
    // @ts-ignore
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // total quantity of all items in the cart
  const totalCount = getTotalItemCount();

  const getItemQuantity = (id: any) => {
    const item = cart.find((cartItem: any) => cartItem.id === id);
    return item ? item.quantity : 0;
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

  return (
    <div>
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
              {params.id.replace("-", " ")}
            </Link>
          </div>
        </div>
      </div>
      {/*  */}
      <p className="text-center text-xl py-14 px-4 font-montserrat font-semibold">
        Browse our{" "}
        <span className="text-orange-600 capitalize">
          {" "}
          {params.id.replace("-", " ")}
        </span>{" "}
        collection
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-y-6 px-1.5  md:px-12 lg:px-20 sm:pt-9">
        {data.map((product: any, index: any) => (
          <ProductCard key={index} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
