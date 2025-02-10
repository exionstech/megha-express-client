import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen 2xl:min-h-[80vh] pt-20 bg-[#E5EFFF] flex items-center justify-center">
      <div className="max-w-screen-2xl w-full mx-auto px-5 md:px-10 lg:px-14 h-full flex flex-col md:flex-row gap-5 items-center justify-center">
        <div className="w-full md:w-1/2 2xl:w-[55%] flex flex-col md:gap-8 gap-5 text-center md:text-start items-center md:items-start">
          <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-[#353535] leading-normal select-none pointer-events-none">
            <span className="bg-gradient-to-l from-[#FF0000] to-[#0F3F8C] text-transparent bg-clip-text text-4xl lg:text-5xl 2xl:text-6xl mb-1">
              Megha Express,
            </span><br />
            your best delivery partner
          </h1>
          <p className="text-[#353535] 2xl:text-xl md:w-full lg:w-[85%] select-none pointer-events-none">
            Megha Express is here to revolutionize your shipping experience with
            speed, reliability, and convenience. With Megha Express, enjoy peace
            of mind knowing your shipments are in capable hands, no matter where
            they're headed.
          </p>
          <Link href={"/track-package"} className="text-white font-medium bg-red rounded-lg py-3 px-3 flex w-fit items-center">
            TRACK ORDER
            <ArrowRight className="w-6 h-6"/>
          </Link>
        </div>
        <div className="w-full md:w-1/2 2xl:w-[45%] p-2 md:p-3 lg:p-4 overflow-hidden">
          <Image
            src="/landing/hero/truck.png"
            width={300}
            height={300}
            layout="responsive"
            alt="hero"
            className="select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
