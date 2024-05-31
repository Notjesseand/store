"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { fetchData } from "@/api/fetch";
import Rating from "@/components/rating";
import Link from "next/link";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoPerson } from "react-icons/io5";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Spinner } from "@material-tailwind/react";
import { useToast } from "@/components/ui/use-toast";
import { fetchAll } from "@/api/fetchAll";
import Carousel from "@/components/carousel";

interface CartItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string;
  rating: number;
  quantity: number;
}
const Page = ({ params }: { params: any }) => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const getData = async () => {
      const response = await fetchData(params.id);
      if (response) {
        setData(response);
      }
    };
    getData();
  }, [params.id]);

  // format date
  const formatDate = (isoDate: any) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // handling form input submission
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setFormValues({ name: "", email: "", comment: "" });
      setLoading(false);
      toast({
        title: "Review added",
      });
    }, 3000);
  };

  const [cart, setCart] = useState<CartItem[]>([]);
  // const addToCart = (newItem: any) => {
  //   setCart((prevCart: any) => {
  //     const itemInCart = prevCart.find(
  //       (cartItem: any) => cartItem.id === newItem.id
  //     );

  //     if (itemInCart) {
  //       return prevCart.map((cartItem: any) =>
  //         cartItem.id === newItem.id
  //           ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //           : cartItem
  //       );
  //     } else {
  //       return [...prevCart, { ...newItem, quantity: 1 }];
  //     }
  //   });
  //   toast({
  //     title: "Added to Cart",
  //     //  "Friday, February 10, 2023 at 5:57 PM",
  //   });
  // };

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

  // total quantity of all items in the cart
  const totalCount = getTotalItemCount();

  const getItemQuantity = (id: any) => {
    const item = cart.find((cartItem: any) => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  if (!data) {
    return (
      <div className="flex justify-center flex-col items-center h-screen ">
        <div className="w-12 h-12 border-4 border-orange-500 flex border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div>
      <div className="bg-[#eee] sm:min-h-[45vh]">
        {/* @ts-ignore */}
        <Header count={totalCount} cart={cart} />
        <div className="pt-44 pl-5 md:pl-24 pb-16">
          <p className="text-xl sm:text-3xl text-black  font-semibold">
            {" "}
            {data.title}
          </p>

          <div className="flex space-x-2 text-sm sm:text-lg font-montserrat font-semibold pt-3">
            {" "}
            <Link href="/">Thugger</Link> <span> {">"} </span>{" "}
            <span>Store</span> <span> {">"} </span>{" "}
            <Link href={`/products/${data.id}`} className="text-orange-500">
              {data.title}
            </Link>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="md:grid md:grid-cols-12 px-3 sm:px-7  lg:px-0 pt-7">
        {/* image */}
        <div className="md:col-span-5 w-full">
          <div className="lg:h-96 w-5/6 flex mx-auto">
            <img
              src={data.images[0]}
              alt=""
              className="h-full w-auto flex mx-auto"
            />
          </div>
        </div>
        {/* description */}
        <div className="col-span-7 md:pr-5">
          {/* title */}
          <p className="text-2xl font-semibold">{data.title}</p>
          <div className="flex space-x-5 pt-1">
            {/* price */}
            <p className="text-lg text-slate-600 font-semibold">
              ${data.price}
            </p>
            {/* rating */}
            <div className="flex items-center pb-1">
              <Rating rating={data.rating} />
              <span className="text-slate-600 font-semibold ml-2">
                {data.rating} {"("}
                {data.reviews.length}
                {")"}
              </span>
            </div>
          </div>
          {/* overview */}
          <div>
            <p className="text-lg pt-6 font-semibold font-montserrat">
              Overview:
            </p>
            <p className="text-slate-500 mt-3">{data.description}</p>
            <p className="flex items-center space-x-2 text-slate-500 mt-5">
              <span className="font-semibold font-montserrat">
                {data.shippingInformation}
              </span>{" "}
              <LiaShippingFastSolid className="text-2xl text-orange-500" />
            </p>
            {/* warranty information */}
            <p className="text-orange-500 font-montserrat">
              {data.warrantyInformation}*
            </p>
            <p className="text-slate-500 ">{data.returnPolicy}</p>
          </div>
          {/* shop now and add to cart */}
          <div className="pt-4 space-x-2 justify-center flex sm:inline-block sm:space-x-4 w-full md:w-auto">
            <button className="sm:px-8 w-1/2 sm:w-auto py-2 font-semibold hover:bg-white hover:text-orange-500 border-2 border-orange-500  bg-orange-500 rounded-lg text-white font-montserrat">
              Shop Now
            </button>

            <button
              onClick={() => addToCart(data)}
              className="sm:px-8 w-1/2 sm:w-auto  py-2 font-semibold bg-white text-orange-500 border-2 border-orange-500  hover:bg-orange-500 rounded-lg hover:text-white font-montserrat"
            >
              Add to cart
            </button>
          </div>

          {/* reviews */}
          <p className="mt-10">Reviews</p>
          <div className="w-full mt-2 sm:mt-4 border-2 rounded space-y-4 p-4">
            {/* comment card */}
            {data.reviews.map((item: any, index: number) => (
              <div key={index}>
                {/* user info */}
                <div className="flex gap-2 font-montserrat">
                  <IoPerson className="text-5xl p-1 border-2 border-slate-400 rounded-full" />
                  <div className=" flex flex-col justify-center leading-4">
                    <p className="font-bold text-lg">{item.reviewerName}</p>
                    <p className="text-sm">{formatDate(item.date)}</p>
                  </div>
                </div>
                {/* comment */}
                <div className="w-full min-h-[5rem] p-2  bg-slate-100 rounded-lg mt-3">
                  {item.comment}
                </div>
              </div>
            ))}
            {/* leave a comment */}
            <div className="w-full p-2  bg-slate-white border-2 border-slate-300 rounded-lg mt-3 font-montserrat sm:pt-3 sm:px-3">
              <p className="sm:text-lg font-montserrat font-semibold">
                Leave a Review
              </p>{" "}
              {/* form */}
              <div className="">
                <div className="inline sm:flex w-full gap-5">
                  {/* name */}
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    placeholder="name"
                    className="w-full sm:w-1/2 rounded-lg py-2 px-2 outline-none border-2 border-slate-300 mt-3 flex"
                  />
                  {/* email */}
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="email"
                    className="w-full sm:w-1/2 rounded-lg py-2 px-2 outline-none border-2 border-slate-300 mt-3 flex"
                  />
                </div>
                <textarea
                  value={formValues.comment}
                  name="comment"
                  onChange={handleChange}
                  placeholder="leave a comment"
                  className="w-full rounded-lg min-h-[120px] px-2 outline-none border-2 border-slate-300 mt-3 flex"
                />
                <button
                  onClick={handleSubmit}
                  className="bg-black py-3  text-white font-semibold w-full mt-3 rounded-lg"
                >
                  {loading ? <Spinner className=" flex mx-auto" /> : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* new arrivals */}
      <div className=" pt-20 sm:py-20 sm:px-10">
        <p className="text-center text-2xl sm:text-3xl font-montserrat font-semibold sm:pt-10">
          New arrivals
        </p>

        <Carousel product={data} onAddToCart={addToCart} />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
