// // src/app/checkout
// "use client";
// import React, { useEffect, useState } from "react";
// import Header from "@/components/Header";
// import Link from "next/link";
// import Carousel from "@/components/carousel";
// import Footer from "@/components/Footer";
// import { toast } from "sonner";
// import { Loader } from "lucide-react";

// interface CartItem {
//   quantity: number;
//   price: number;
//   title: string;
// }

// const Page = () => {
//   const [cart, setCart] = useState<CartItem[]>([]);
//   // fetching the cart data from the local storage
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
//   const clearCart = () => {
//     localStorage.removeItem("cart");
//     setCart([]);
//   };

//   const addToCart = (product: any) => {
//     setCart((prevCart: any) => {
//       const itemInCart = prevCart.find(
//         (cartItem: any) => cartItem.id === product.id
//       );

//       const updatedCart = itemInCart
//         ? prevCart.map((cartItem: any) =>
//             cartItem.id === product.id
//               ? { ...cartItem, quantity: cartItem.quantity + 1 }
//               : cartItem
//           )
//         : [...prevCart, { ...product, quantity: 1 }];

//       // Save to localStorage
//       localStorage.setItem("cart", JSON.stringify(updatedCart));

//       return updatedCart;
//     });
//     toast("Added to Cart");
//   };

//   const getTotalItemCount = () => {
//     // @ts-ignore
//     return cart.reduce((total, item) => total + item.quantity, 0);
//   };

//   // calculate the total price
//   const calculatePrice = () =>
//     cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   const totalPrice = calculatePrice();

//   // total quantity of all items in the cart
//   const totalCount = getTotalItemCount();

//   const getItemQuantity = (id: any) => {
//     const item = cart.find((cartItem: any) => cartItem.id === id);
//     return item ? item.quantity : 0;
//   };

//   const removeFromCart = (itemToRemove: any) => {
//     setCart((prevCart: any) =>
//       prevCart
//         .map((item: any) =>
//           item.id === itemToRemove.id
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item: any) => item.quantity > 0)
//     );
//   };

//   // handle submit.
//   const [submitted, setSubmitted] = useState(false);
//   const handlePayment = () => {
//     setSubmitted(true);
//     setTimeout(() => {
//       toast("Payment successful");
//       localStorage.removeItem("cart");
//       setCart([]);
//       setSubmitted(false);
//     }, 3000);
//   };

//   const jaja = "";

//   return (
//     <div className="font-montserrat" suppressHydrationWarning>
//       <div className="bg-slate-50 sm:min-h-[45vh]">
//         <Header count={cartCount} cart={cart} clearCart={clearCart} />
//         <div className="pt-44 pl-5 md:pl-24 pb-16">
//           <p className="text-xl sm:text-3xl text-black  font-semibold">
//             {" "}
//             Thugger
//           </p>
//           <div className="flex space-x-2 text-sm sm:text-lg font-montserrat font-semibold pt-3">
//             <Link href="/">Thugger</Link> <span> {">"} </span>{" "}
//             <span>Store</span> <span> {">"} </span>{" "}
//             <Link href={`/products/${""}`} className="text-orange-500">
//               SHOPCART
//             </Link>
//           </div>
//         </div>
//       </div>
//       {/* table section */}
//       <div className="pt-8 sm:pt-20 px-0 sm:px-14 lg:px-36">
//         {cart.length > 0 && (
//           <div className="grid grid-cols-5 sm:grid-cols-7 bg-slate-50 font-montserrat font-semibold gap-1 text-sm sm:text-lg p-4 rounded">
//             <p className="col-span-2 sm:col-span-4">Product</p>
//             <p className="">Price</p>
//             <p className="text-center">Quantity</p>
//             <p className="text-center">Total{"($)"}</p>
//           </div>
//         )}
//         {/* data */}

//         {cart &&
//           cart.map((item, index) => (
//             <div
//               key={index}
//               className="grid grid-cols-5 sm:grid-cols-7 font-montserrat text-sm gap-1 sm:text-lg p-4 rounded"
//             >
//               <p className="col-span-2 sm:col-span-4">
//                 {item.title.toLocaleString()}
//               </p>
//               <p className="col-span-">${item.price.toLocaleString()}</p>
//               <p className="text-center">{item.quantity}</p>
//               <p className="text-center">
//                 ${(item.price * item.quantity).toLocaleString()}
//               </p>
//             </div>
//           ))}
//       </div>
//       {/* Totals */}
//       {cart.length > 0 && (
//         <div className="grid place-items-center text-center sm:text-lg font-nunito pt-14">
//           <div className="border rounded-lg w-11/12 sm:w-[360px]">
//             {/* subtotal */}
//             <div className="font-bold flex justify-between border px-5 py-2.5">
//               Subtotal:{" "}
//               <span className="text-slate-500 font-normal">
//                 ${totalPrice.toLocaleString()}
//               </span>{" "}
//             </div>
//             {/* taxes */}
//             <div className="font-bold flex justify-between border px-5 py-2.5">
//               Taxes:{" "}
//               <span className="text-slate-500 font-normal">
//                 ${parseFloat((totalPrice * 0.05).toFixed(2)).toLocaleString()}
//               </span>{" "}
//             </div>
//             {/* total */}

//             <div className="font-bold flex justify-between border px-5 py-2.5">
//               Total:{" "}
//               <span className="text-slate-500 font-normal">
//                 ${parseFloat((totalPrice * 1.05).toFixed(2)).toLocaleString()}
//               </span>{" "}
//             </div>
//           </div>
//         </div>
//       )}

//       {cart.length > 0 && (
//         <button
//           onClick={handlePayment}
//           className="bg-black text-white py-3 border-2 border-black hover:bg-white hover:text-black transition-all duration-200 sm:px-36 rounded flex mx-auto mt-12 w-11/12 sm:w-auto text-center justify-center mb-36"
//         >
//           {submitted ? <Loader /> : "Pay Now"}
//         </button>
//       )}

//       <div className="px-5 sm:px-20 pt-1">
//         <p className="text-center sm:text-lg">Add items to your cart</p>
//         {/* @ts-ignore */}
//         <Carousel product={""} onAddToCart={addToCart} />
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Page;

"use client";

import React, { useEffect, useState, useCallback } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import Carousel from "@/components/carousel";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CartItem {
  quantity: number;
  price: number;
  title: string;
}

const stripePromise = loadStripe(
  "pk_test_51RlU08P0Xk5vXGCCOWBOY09fjvmJaqNd6zftgfKtH9Xu1Jn0C8mf3MHi7rTpUjgNjqUpWDAUS72F4iFVkRVSZKFB00tr6ePoiA"
);

const Page = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

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

  const calculatePrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const totalPrice = calculatePrice();

  const fetchClientSecret = useCallback(async () => {
    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
      });
      const data = await res.json();
      setClientSecret(data.client_secret);
    } catch (err) {
      toast("Error creating payment session");
    }
  }, [cart]);

  const jaja = "";

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
    toast("Added to Cart");
  };

  return (
    <div className="font-montserrat" suppressHydrationWarning>
      <div className="bg-slate-50 sm:min-h-[45vh]">
        <Header count={cartCount} cart={cart} clearCart={clearCart} />
        <div className="pt-44 pl-5 md:pl-24 pb-16">
          <p className="text-xl sm:text-3xl text-black font-semibold">
            Thugger
          </p>
          <div className="flex space-x-2 text-sm sm:text-lg font-montserrat font-semibold pt-3">
            <Link href="/">Thugger</Link> <span> {">"} </span>
            <span>Store</span> <span> {">"} </span>
            <Link href={`/products/${""}`} className="text-orange-500">
              SHOPCART
            </Link>
          </div>
        </div>
      </div>

      <div className="pt-8 sm:pt-20 px-0 sm:px-14 lg:px-36">
        {cart.length > 0 && (
          <div className="grid grid-cols-5 sm:grid-cols-7 bg-slate-50 font-montserrat font-semibold gap-1 text-sm p-4 rounded">
            <p className="col-span-2 sm:col-span-4">Product</p>
            <p>Price</p>
            <p className="text-center">Quantity</p>
            <p className="text-center">Total ($)</p>
          </div>
        )}
        {cart.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-5 sm:grid-cols-7 font-montserrat text-sm gap-1 p-4 rounded"
          >
            <p className="col-span-2 sm:col-span-4">{item.title}</p>
            <p>${item.price.toLocaleString()}</p>
            <p className="text-center">{item.quantity}</p>
            <p className="text-center">
              ${(item.price * item.quantity).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="grid place-items-center text-center text-sm font-nunito pt-14">
          <div className="border rounded-lg w-11/12 sm:w-[360px]">
            <div className="font-bold flex justify-between border px-5 py-2.5">
              Subtotal:{" "}
              <span className="text-slate-500 font-normal">
                ${totalPrice.toLocaleString()}
              </span>
            </div>
            <div className="font-bold flex justify-between border px-5 py-2.5">
              Taxes:{" "}
              <span className="text-slate-500 font-normal">
                ${parseFloat((totalPrice * 0.05).toFixed(2)).toLocaleString()}
              </span>
            </div>
            <div className="font-bold flex justify-between border px-5 py-2.5">
              Total:{" "}
              <span className="text-slate-500 font-normal">
                ${parseFloat((totalPrice * 1.05).toFixed(2)).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Stripe Payment Dialog */}
      {cart.length > 0 && (
        <Dialog onOpenChange={(open) => open && fetchClientSecret()}>
          <DialogTrigger asChild>
            <Button className="bg-black text-white py-3 border-2 border-black hover:bg-white hover:text-black transition-all duration-200 sm:px-36 rounded flex mx-auto mt-12 w-11/12 sm:w-auto text-center justify-center mb-36">
              Make Payment
            </Button>
          </DialogTrigger>
          <DialogContent className="my-4 py-12 xl:max-w-screen-xl">
            <DialogTitle className="text-xl font-semibold">
              Checkout
            </DialogTitle>

            {clientSecret && stripePromise && (
              <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={{ clientSecret }}
              >
                <EmbeddedCheckout className="max-h-[80dvh]" />
              </EmbeddedCheckoutProvider>
            )}

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel Payment
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      <div className="px-5 sm:px-20 pt-1">
        <p className="text-center text-sm">Add items to your cart</p>
        {/* @ts-ignore */}
        <Carousel product={""} onAddToCart={addToCart} />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
