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
  const [ref4, isVisible4] = useOnScreen({ threshold: 0.01 });
  const [ref5, isVisible5] = useOnScreen({ threshold: 0.01 });
  const [ref6, isVisible6] = useOnScreen({ threshold: 0.01 });
  const [ref7, isVisible7] = useOnScreen({ threshold: 0.01 });
  const [ref8, isVisible8] = useOnScreen({ threshold: 0.01 });
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

  console.log("kayife bu data", products);

  return (
    <div className="min-h-screen flex flex-col justify-center w-full pt-10">
      <div className="grid grid-cols-4 items-center justify-center gap-6">
        {products && products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
