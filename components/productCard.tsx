import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string;
  rating: number;
  // Add other fields as necessary
}
interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log("data in child component", product);
  return (
    <div>
      <div className="h-96 rounded-lg flex flex-col mx-auto cursor-pointer w-5/6 bg-cover bg-center border-2 relative ">
        <div
          // src={product.thumbnail}
          style={{ backgroundImage: `url(${product?.images[0]})` }}
          // alt=""
          className="absolute h-full w-full rounded-lg z-10 hover:-z-10 transition-all duration-100 bg-contain bg-no-repeat bg-center bg-white"
        />

        {/* like view bookmark */}
        <div className="absolute w-full h-full hover:h-[90%] transition-all duration-500 z-0 hover:z-30 bg-transparent ">
          <div className="relative h-full w-full flex flex-col justify-between ">
            <div className="justify-end flex flex-col items-end space-y-3 pr-3  text-black pt-4 transition-all duration-100">
              {/* like */}
              <div className=" bg-white rounded-full aspect-square p-2 flex h-10 flex-col w-10 justify-center items-center">
                <IoMdHeartEmpty className="text-xl cursor-pointer font-bold" />
              </div>
              {/* view */}
              <div className=" bg-white rounded-full aspect-square p-2 flex flex-col justify-center items-center h-10 w-10">
                <IoEyeOutline className="text-xl cursor-pointer" />
              </div>
              {/* bookmark */}
              <div className=" bg-white rounded-full aspect-square p-2 flex flex-col justify-center items-center h-10 w-10">
                <IoBookmarkOutline className="text-xl cursor-pointer" />
              </div>
            </div>
            {/* add to cart button */}
            <div className=" flex flex-col justify-center space-y-3 text-black pt-4 transition-all pb-3 duration-300 w-full px-[7%]">
              <button className=" w-full bg-black text-white mx-auto relative rounded-lg py-2.5 ">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto  text-center justify-center pt-2">
        <p className="text-center flex text-lg justify-center">
          {product.title.length > 20
            ? product.title.slice(0, 24) + "..."
            : product.title}
        </p>
        <p className="text-center flex text-lg justify-center mt-2">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
