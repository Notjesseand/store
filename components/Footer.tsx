import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pb-7 px-5 sm:px-2 md:px-6 pt-3 sm:pt-10 mt-36 bg-[#161c28] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 w-full py-6 gap-y-6 mb-6">
        {/* thugger's store */}
        <div className=" flex flex-col lg:cols-span-1">
          <p className="text-2xl  font-semibold pt-4 md:pt-0">
            Thugger&apos;s Store
          </p>

          <p className="font-nunito mt-2 text-lg">
            Upgrade your style with our curated sets. Choose confidence, embrace
            your unique look.
          </p>
        </div>
        {/* shopping and clothes */}
        <div className="lg:pl-[10%] sm:text-lg font-nunito gap-y-2 flex flex-col">
          <p className="text-lg sm:text-xl font-semibold font-nunito">
            Shopping and Clothes
          </p>
          <Link href={`/categories/womens-dresses`}>Women&apos;s Dresses</Link>
          <Link href="/categories/womens-jewellery">Women&apos;s Jewelry</Link>
          <Link href="/categories/womens-shoes">Women&apos;s Shoes</Link>
          <Link href="/categories/womens-watches">Women&apos;s Watches</Link>
          <Link href="/categories/womens-bags">Women&apos;s Bags</Link>
        </div>

        {/* mens clothes and accessories? */}
        <div className=" flex flex-col lg:pl-[10%] sm:text-lg font-nunito gap-y-2">
          <p className="text-lg sm:text-xl font-semibold font-nunito opacity-0 hidden sm:flex">
            Shopping and Clothes
          </p>
          <Link href={`/categories/tops`}>Tops</Link>
          <Link href="/categories/mens-shirts">Mens Shirts</Link>
          <Link href="/categories/mens-shoes">Men&apos;s Shoes</Link>
          <Link href="/categories/mens-watches">Men&apos;s Watches</Link>
          <Link href="/categories/sunglasses">Sunglassess</Link>
        </div>

        {/* accessories */}
        <div className=" flex flex-col lg:pl-[10%] sm:text-lg font-nunito gap-y-2">
          <p className="text-lg sm:text-xl font-semibold font-nunito">
            Accessories
          </p>
          <Link href={`/categories/smartphones`}>Smartphones</Link>
          <Link href="/categories/laptops">Laptops</Link>
          <Link href="/categories/sports-accessories">Sports Accessories</Link>
          <Link href="/categories/kitchen-accessories">
            Kitchen Accessories
          </Link>
          <Link href="/categories/mobile-accessories">Mobile Accessories</Link>
        </div>

        {/* news letter */}
        <div className=" flex flex-col lg:pl-[10%] sm:text-lg font-nunito gap-y-2">
          <p className="text-lg sm:text-xl font-semibold font-nunito">
            Newsletter
          </p>
          <p className="font-nunito">
            Sign up and receive the latest tips via email.
          </p>
          <input
            type="email"
            name="email"
            placeholder="email"
            id=""
            className="w-full border-2 border-orange-500 rounded-lg bg-[#1f2937] py-3 sm:py-1.5 px-1 mt-2"
          />
          <button className="w-full rounded-lg py-3 sm:py-1.5 text-[#fff] bg-orange-500">
            Subscribe
          </button>
        </div>
      </div>
      <div className="text-slate-300 border-t">
        <p className="pt-4"> © 2024 Thugger. All rights reserved</p>
      </div>
    </div>

    //  <div className="w-full border-t border-slate-300 sm:flex md:grid-cols-5 border-b pb-5">
    //     {/* newletter */}
    //     <div className=" flex flex-col justify-center col-span-1">
    //       <p className="text-2xl  font-semibold pt-6 md:pt-0">
    //         Thugger&apos; Store
    //       </p>
    //       <p className="font-nunito">
    //         Upgrade your style with our curated sets. Choose confidence, embrace
    //         your unique look.
    //       </p>
    //     </div>
    //     {/* links */}
    //     <div className=" md:w-2/5 sm:min-h-[35vh] mt-8 flex flex-col justify-center sm:pl-12">
    //       <div className="sm:border-l border-slate-300 h-2/3 sm:px-6 space-y-3 flex flex-col justify-center ">
    //         <Link href="/" className="flex">
    //           Home
    //         </Link>
    //         <Link href="/about" className="flex">
    //           About us
    //         </Link>
    //         <Link href="/shop" className="flex">
    //           Shop
    //         </Link>
    //         <Link href="/contact" className="flex">
    //           Contact
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default Footer;
