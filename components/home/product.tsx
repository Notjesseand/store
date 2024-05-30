import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/scroll";
import { BsPhone } from "react-icons/bs";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { varianty } from "@/hooks/variant";
import Link from "next/link";
import ProductCard from "@/components/productCard";
import { fetchAll } from "@/api/fetchAll";

const Product = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.01 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.01 });

  const variants = {
    hidden: { opacity: 0, x: 250 },
    visible: { opacity: 1, x: 0 },
  };
  const variant2 = {
    hidden: { opacity: 0, y: 250 },
    visible: { opacity: 1, y: 0 },
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchAll();
      setProducts(data?.products);
    })();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center w-full pt-24">
      <p className="text-2xl text-center font-montserrat font-semibold p">
        New Arrival Products
      </p>
      <p className="text-slate-400 font-custom text-center text-lg pt-1">
        Shop the latest products from the most popular collections
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-y-6 px-1.5  md:px-12 lg:px-20 pt-9">
        {products &&
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Product;
