"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import Carousel from "@/components/carousel";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { lineSpinner } from "ldrs";

// Default values shown


interface CartItem {
  quantity: number;
  price: number;
  title: string;
}
const jaj = "";
if (typeof window !== "undefined") {
  lineSpinner.register();
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

  // calculate the total price
  const calculatePrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const totalPrice = calculatePrice();

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

  // handle submit.
  const [submitted, setSubmitted] = useState(false);
  const handlePayment = () => {
    setSubmitted(true);
    setTimeout(() => {
      toast({
        title: "Payment successful",
      });
      localStorage.removeItem("cart");
      setCart([]);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="">
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
      <div className="pt-8 sm:pt-20 px-0 sm:px-14 lg:px-36">
        {cart.length > 0 && (
          <div className="grid grid-cols-5 sm:grid-cols-7 bg-slate-50 font-montserrat font-semibold gap-1 text-sm sm:text-lg p-4 rounded">
            <p className="col-span-2 sm:col-span-4">Product</p>
            <p className="">Price</p>
            <p className="text-center">Quantity</p>
            <p className="text-center">Total{"($)"}</p>
          </div>
        )}
        {/* data */}

        {cart &&
          cart.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-5 sm:grid-cols-7 font-montserrat text-sm gap-1 sm:text-lg p-4 rounded"
            >
              <p className="col-span-2 sm:col-span-4">
                {item.title.toLocaleString()}
              </p>
              <p className="col-span-">${item.price.toLocaleString()}</p>
              <p className="text-center">{item.quantity}</p>
              <p className="text-center">
                ${(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          ))}
      </div>
      {/* Totals */}
      {cart.length > 0 && (
        <div className="grid place-items-center text-center sm:text-lg font-nunito pt-14">
          <div className="border rounded-lg w-11/12 sm:w-[360px]">
            {/* subtotal */}
            <div className="font-bold flex justify-between border px-5 py-2.5">
              Subtotal:{" "}
              <span className="text-slate-500 font-normal">
                ${totalPrice.toLocaleString()}
              </span>{" "}
            </div>
            {/* taxes */}
            <div className="font-bold flex justify-between border px-5 py-2.5">
              Taxes:{" "}
              <span className="text-slate-500 font-normal">
                ${parseFloat((totalPrice * 0.05).toFixed(2)).toLocaleString()}
              </span>{" "}
            </div>
            {/* total */}

            <div className="font-bold flex justify-between border px-5 py-2.5">
              Total:{" "}
              <span className="text-slate-500 font-normal">
                ${parseFloat((totalPrice * 1.05).toFixed(2)).toLocaleString()}
              </span>{" "}
            </div>
          </div>
        </div>
      )}

      {cart.length > 0 && (
        <button
          onClick={handlePayment}
          className="bg-black text-white py-3 border-2 border-black hover:bg-white hover:text-black transition-all duration-200 sm:px-36 rounded flex mx-auto mt-12 w-11/12 sm:w-auto text-center justify-center mb-36"
        >
          {submitted ? (
            <l-line-spinner
              size="30"
              stroke="3"
              speed="1"
              color="#F97316"
            ></l-line-spinner>
          ) : (
            "Pay Now"
          )}
        </button>
      )}

     
      <div className="px-5 sm:px-20 pt-1">
        <p className="text-center sm:text-lg">Add items to your cart</p>
        {/* @ts-ignore */}
        <Carousel product={""} onAddToCart={addToCart} />
      </div>
    
      <Footer />
    </div>
  );
};

export default Page;
