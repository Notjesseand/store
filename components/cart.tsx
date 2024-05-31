import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiBars2 } from "react-icons/hi2";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import Carousel from "@/components/shop/carousel";

const Cart = ({ count, cart }: { count: any; cart: any[] }) => {
  const cartData = cart.map((item) => item.price * item.quantity);
  const totalPrice = cartData.reduce((acc, price) => acc + price, 0);

  console.log(totalPrice);

  const clearCart = () => localStorage.setItem("cart", "");

  return (
    <div className="overflow-visible ">
      <Sheet>
        <SheetTrigger>
          {" "}
          <div className="flex relative">
            <IoCartOutline className="text-4xl cursor-pointer flex text-orange-600 relative z-10" />
            <p className="text-black absolute bottom-0 left-0 z-40 h-4 w-4 flex items-center justify-center bg-white rounded-full text-xs">
              {count}
            </p>
          </div>
        </SheetTrigger>
        <SheetContent className="h-screen overflow-y-scroll">
          <SheetHeader>
            <div className="w-full space-y-3 pt-6 ">
              <p className="text-center text-lg font-semibold">In your cart</p>
              {cart.map((item, index) => (
                <div key={index} className="text-center flex flex-col">
                  <div className="w-1/3 mx-auto aspect-square">
                    <Carousel images={item.images} />
                    <p className="mt-1">×{item.quantity}</p>
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                  </div>
                </div>
              ))}

              <div className="pb-10">
                <p className="text-center mt-12">
                  subtotal: ${parseFloat(totalPrice.toFixed(2))}
                </p>

                <button className="py-2 px-6 border border-blue-700 hover:border-white bg-black text-white text-sm rounded-full mx-auto flex mt-3">
                  Checkout
                </button>

                <button
                  onClick={clearCart}
                  className="py-2 px-6 border border-blue-700 hover:border-white bg-black text-white text-sm rounded-full mx-auto flex mt-3"
                >
                  Clear cart
                </button>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
