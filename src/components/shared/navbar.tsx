import React from "react";
import Logo from "./logo";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import NavitemSection from "./navitem-section";
import MobileNav from "./mobile-nav";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed right-0 left-0 top-0 z-10 shadow-sm w-full bg-white">
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 flex items-center justify-between w-full py-3">
        <Logo />
        <div className="md:flex hidden">
          <NavitemSection />
        </div>
        <Link
          href={"/ship-with-us"}
          className="text-white font-medium bg-red rounded-lg py-[10px] px-3 md:flex w-fit items-center hidden"
        >
          SHIP WITH US
          <ArrowRight className="w-6 h-6 ml-2" />
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
