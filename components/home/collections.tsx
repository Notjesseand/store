import React, { useEffect, useState } from "react";
import { fetchData } from "@/api/fetch";
import CollectionsCarousel from "./collectionsCarousel";
import Link from "next/link";
import { IoMdArrowDown, IoMdArrowForward } from "react-icons/io";

interface Data {
  name: string;
  url: string;
  slug: string;
}

const Collections = () => {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetchData("categories");
      if (response) {
        setData(response);
      }
    };
    getData();
  }, []);

  return (
    <div className="sm:px-5 lg:px-12">
      <p className="text-center text-3xl mt-14 sm:mt-24 font-semibold font-montserrat">
        Collections
      </p>
      <p className="text-center bounce mt-5 text-lg font-nunito        font-normal">
        Browse our collections <IoMdArrowDown className="inline" />
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-6 text-black px-3 text-sm sm:px-1 lg:px-7 text-center gap-y-2 sm:text-base lg:text-lg ">
        {data.map((item, index) => (
          <Link
            key={index}
            href={`/categories/${item.slug}`}
            className="py-1.5 px-1 bg-slate-100 mt-1 flex w-11/12 text-center justify-center rounded items-center border-2 border-orange-600 mx-auto font-nunito"
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* <CollectionsCarousel data={data} /> */}
    </div>
  );
};

export default Collections;
