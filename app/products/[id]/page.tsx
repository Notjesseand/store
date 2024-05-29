"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { fetchData } from "@/api/fetch";
import Rating from "@/components/rating";
import Link from "next/link";
import { LiaShippingFastSolid } from "react-icons/lia";
import Footer from "@/components/Footer";

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

  console.log(data);

  if (!data) {
    return (
      <div className="flex justify-center flex-col items-center h-screen ">
        <div className="w-12 h-12 border-4 border-orange-500 flex border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[#eee] min-h-[45vh]">
        {/* @ts-ignore */}
        <Header />
        <div className="pt-44 pl-5 md:pl-24">
          <p className="text-3xl text-black  font-semibold"> {data.title}</p>

          <div className="flex space-x-2 text-lg font-montserrat font-semibold pt-3">
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
        <div className="col-span-7 pr-5">
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
          <div className="pt-4 space-x-2 justify-center flex sm:inline-block sm:space-x-4">
            <button className="px-8 py-2 font-semibold hover:bg-white hover:text-orange-500 border-2 border-orange-500  bg-orange-500 rounded-lg text-white font-montserrat">
              Shop Now
            </button>

            <button className="px-8 py-2 font-semibold bg-white text-orange-500 border-2 border-orange-500  hover:bg-orange-500 rounded-lg hover:text-white font-montserrat">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
