import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full hero pt-20 relative">
      <div className="max-w-screen-2xl w-full mx-auto px-5 md:px-10 lg:px-14 h-full flex lg:aspect-[5/2] items-center">
        <div className="absolute left-0 top-0 bottom-0 md:w-[50%] 2xl:w-[65%] w-full bg-gradient-to-r from-white via-white/80 to-transparent"/>
        <div className="w-full md:w-1/2 2xl:w-[55%] flex flex-col md:gap-8 gap-5 text-center md:text-start items-center md:items-start justify-center py-20 md:py-10 z-10">
          <div className="text-3xl lg:text-4xl 2xl:text-5xl font-medium text-[#353535] select-none pointer-events-none">
            <div className="bg-gradient-to-l from-[#FF0000] to-[#0F3F8C] text-transparent bg-clip-text text-4xl lg:text-5xl 2xl:text-6xl py-2">
              Megha Express,
            </div>
            <div className="leading-tight">
              your best delivery partner
            </div>
          </div>
          <p className="text-[#353535] 2xl:text-xl md:w-full lg:w-[85%] select-none pointer-events-none">
            Megha Express is here to revolutionize your shipping experience with
            speed, reliability, and convenience. With Megha Express, enjoy peace
            of mind knowing your shipments are in capable hands, no matter where
            they're headed.
          </p>
          <Link href={"/track-package"} className="text-white font-medium bg-red rounded-lg py-[10px] px-3 flex w-fit items-center">
            TRACK ORDER
            <ArrowRight className="w-6 h-6 ml-2"/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;