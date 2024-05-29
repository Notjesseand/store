"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { fetchData } from "@/api/fetch";
import Rating from "@/components/rating";
import Link from "next/link";

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
      <div className="bg-[#eee] min-h-[45vh] ">
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
      <div className="grid grid-cols-12 pt-7">
        {/* image */}
        <div className="col-span-5">
          <div className="h-96 w-5/6 flex mx-auto">
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
            <div className="flex items-center">
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
              <p className="text-lg pt-6 font-semibold font-montserrat">Overview:</p>
              <p className="text-slate-500 mt-3">{data.description}</p>

            </div>

            shop now
        </div>
      </div>
    </div>
  );
};

export default Page;
