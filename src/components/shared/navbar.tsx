import React from "react";
import Logo from "./logo";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import NavitemSection from "./navitem-section";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  return (
    <div className="fixed right-0 left-0 top-0 z-10 shadow-sm w-full bg-white">
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-12 flex items-center justify-between w-full py-3">
        <Logo />
        <div className="md:flex hidden">
            <NavitemSection/>
        </div>
        <Button className="gap-2 text-white py-6 md:flex hidden">
          SHIP WITH US
          <ArrowRight className="size-6" />
        </Button>
        <div className="md:hidden">
        <MobileNav/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
