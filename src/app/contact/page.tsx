"use client";
import React from "react";
import Header from "@/components/Header";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#091627] to-[#091627f1] font-montserrat">
      {/* @ts-ignore */}
      <Header />
      <div className=" pt-28 md:pt-36 px-7 md:px-16 lg:px-28">
        <p className="text-white text-5xl mt-20 font-semibold">contact</p>
        <div className="grid md:grid-cols-3 gap-x-20 pt-10 md:mt-12 gap-y-12">
          {/* customer service */}
          <div className="justify-center ">
            <RiCustomerService2Line className="text-slate-400 text-5xl " />
            <p className="text-slate-400 text-lg">Customer support</p>
            <p className="text-lg text-white">1-001-234-5678</p>
          </div>
          {/* mailing address */}
          <div className="justify-center ">
            <RiCustomerService2Line className="text-slate-400 text-5xl " />
            <p className="text-slate-400 text-lg">Mailing address</p>
            <p className="text-lg text-white">
              3 Rockaway St., New Rochelle, NY 10801
            </p>
          </div>
          {/* email */}
          <div className="justify-center ">
            <MdOutlineMail className="text-slate-400 text-5xl " />
            <p className="text-slate-400 text-lg">Email</p>
            <p className="text-lg text-white">info@thugger.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
