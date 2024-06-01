import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/scroll";
import { BsPhone } from "react-icons/bs";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { varianty } from "@/hooks/variant";
import Link from "next/link";
import ProductCard from "@/components/productCard";
import { fetchAll } from "@/api/fetchAll";
import { useToast } from "../ui/use-toast";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string;
  rating: number;
  // quantity: any;
}
interface ProductProps {
  onAddToCart: (product: Product) => void;
}

const Product: React.FC<ProductProps> = ({ onAddToCart }) => {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchAll();
      setProducts(data?.products);
    })();
  }, []);

  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen flex flex-col justify-center w-full  pt-14 sm:pt-24">
      <p className="text-2xl text-center font-montserrat font-semibold p">
        New Arrival Products
      </p>
      <p className="text-slate-400 font-custom text-center text-base sm:text-lg pt-1 px-10">
        Shop the latest products from the most popular collections
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-y-6 px-1.5  md:px-12 lg:px-20 pt-9">
        {products &&
          products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
      </div>
    </div>
  );
};

export default Product;
