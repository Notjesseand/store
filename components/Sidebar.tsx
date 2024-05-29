import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiBars2 } from "react-icons/hi2";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          {" "}
          <HiBars2 className="text-5xl cursor-pointer flex z-50 text-white" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="text-center w-full space-y-3 pt-14 text-xl font-nunito">
              <Link href="/" className="flex text-center justify-center">
                Home
              </Link>
              <Link href="/shop" className="flex text-center justify-center">
                Shop
              </Link>
              <Link href="/about" className="flex text-center justify-center">
                About Us
              </Link>
              {/* <Link href="" className="flex text-center justify-center">News</Link> */}
              <Link href="/contact" className="flex text-center justify-center">
                Contact
              </Link>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
