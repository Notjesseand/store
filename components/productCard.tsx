import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import Link from "next/link";
import { LiaShippingFastSolid } from "react-icons/lia";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string;
  rating: number;
}
interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log("data in child component", product);
  return (
    <div>
      <Link
        href={`/products/${product.id}`}
        className=" aspect-[2/3] h-full sm:h-64 md:h-72 lg:h-96 rounded-lg flex flex-col mx-auto cursor-pointer  w-11/12 bg-cover bg-center border-2 relative "
      >
        <div
          // src={product.thumbnail}
          style={{ backgroundImage: `url(${product?.images[0]})` }}
          // alt=""
          className="absolute h-full w-full rounded-lg z-10 hover:-z-10 bg-contain bg-no-repeat bg-center bg-white"
        />

        {/* like view bookmark */}
        <div className="absolute w-full h-full z-30 pb-2 sm:pb-5 lg:pb-0 lg:hover:pb-5 lg:z-auto  hover:z-30 bg-transparent transition-all hover:duration-500 ">
          <div className="relative h-full w-full flex flex-col justify-between ">
            <div className="justify-end flex flex-col items-end space-y-1 pr-3  text-black pt-4">
              {/* like */}
              <div className=" bg-white  hover:bg-black hover:text-white rounded-full aspect-square p-2 flex h-10 flex-col w-10 justify-center items-center border border-slate-500">
                <IoMdHeartEmpty className="text-xl cursor-pointer font-bold transition-all duration-200" />
              </div>
              {/* view */}
              <Link
                href={`/products/${product.id}`}
                className=" bg-white hover:bg-black hover:text-white transition-all duration-200 rounded-full aspect-square p-2 flex flex-col justify-center items-center h-10 w-10 border border-slate-500"
              >
                <IoEyeOutline className="text-xl cursor-pointer" />
              </Link>
              {/* bookmark */}
              <div className="hover:bg-black hover:text-white transition-all duration-200 bg-white rounded-full aspect-square p-2 flex flex-col justify-center items-center h-10 w-10 border border-slate-500">
                <IoBookmarkOutline className="text-xl cursor-pointer" />
              </div>
            </div>
            {/* add to cart button */}
            <div className=" flex flex-col justify-center space-y-3 text-black pt-4 w-full px-[7%]">
              <button className=" w-full bg-black text-white mx-auto relative rounded-lg py-2.5 text-sm sm:text-base">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Link>
      <div className="w-4/5 mx-auto  text-center justify-center pt-2">
        <Link
          href={`/products/${product.id}`}
          className="text-center flex  justify-center hover:text-orange-600"
        >
          {product.title.length > 20
            ? product.title.slice(0, 24) + "..."
            : product.title}
        </Link>
        <p className="text-center flex text-lg justify-center mt-2">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
