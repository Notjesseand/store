"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { fetchData } from "@/api/fetch";
import Rating from "@/components/rating";
import Link from "next/link";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoPerson } from "react-icons/io5";
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

  // format date
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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

            <button className="sm:px-8 w-1/2 sm:w-auto  py-2 font-semibold bg-white text-orange-500 border-2 border-orange-500  hover:bg-orange-500 rounded-lg hover:text-white font-montserrat">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
