"use client";
import React, { useEffect, useState } from "react";

import Header from "@/components/Header";
import Product from "@/components/home/product";
import Innovations from "@/components/home/innovations";
import Hero from "@/components/home/hero";
import Experts from "@/components/home/experts";
import Footer from "@/components/Footer";
import { fetchAll } from "@/api/fetchAll";

export default function Page() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const data = await fetchAll();
  //     setProducts(data.products);
  //   })();
  // }, []);

  // console.log("products bu ", products);

  return (
    <div className=" my-0 py-0 font-custom overflow-hidden">
      <div className="min-h-screen bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1716943138/3-ps-compressed_mxf2eh.jpg)] bg-cover flex flex-col relative text-white bg-fixed bg-center">
        <Header count={0} cart={[]} />
        <Hero />
      </div>
      <Product />

      <Footer />
    </div>
  );
}
