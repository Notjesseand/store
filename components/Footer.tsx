import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pb-7 px-5 sm:px-12 md:px-24 pt-20">
      <div className="w-full border-t border-slate-300 md:flex border-b pb-5">
        {/* newletter */}
        <div className="md:w-3/5 sm:min-h-[35vh] flex flex-col justify-center">
          <p className="text-2xl  font-semibold pt-6 md:pt-0">Newsletter</p>
          <div className="">
            <input
              type="email"
              placeholder="email"
              className="py-2.5 rounded-full border-slate-600 w-full sm:w-96 border px-2 mt-2 flex sm:inline mx-auto"
            />
            <div className="flex sm:inline mx-auto justify-center text">
              <button className="mt-3 flex justify-center sm:inline-block ml-1 py-2 px-12 sm:px-16 border border-blue-700 hover:border-orange-600 bg-blue-700 text-white text-lg rounded-full">
                sign up
              </button>
            </div>
          </div>
          <p className="mt-3 text-sm sm:text-base">
            By subscribing, you agree to our{" "}
            <span className="text-blue-600 underline">Terms & Conditions</span>,
            you agree to receive updates & promotions from us.
          </p>
        </div>
        {/* links */}
        <div className=" md:w-2/5 sm:min-h-[35vh] mt-8 flex flex-col justify-center sm:pl-12">
          <div className="sm:border-l border-slate-300 h-2/3 sm:px-6 space-y-3 flex flex-col justify-center ">
            <Link href="/" className="flex">
              Home
            </Link>
            <Link href="/about" className="flex">
              About us
            </Link>
            <Link href="/shop" className="flex">
              Shop
            </Link>
            <Link href="/contact" className="flex">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="text-slate-500">
        <p>© 2024 Thugger. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
