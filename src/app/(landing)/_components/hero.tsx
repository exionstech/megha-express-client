import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen pt-20 bg-[#E5EFFF]">
      <div className="max-w-screen-2xl w-full mx-auto px-5 md:px-14 h-full flex flex-col md:flex-row gap-5 items-center py-10">
        <div className="w-full md:w-1/2 2xl:w-[55%] flex flex-col gap-5 h-full">
          <h1 className="md:text-5xl 2xl:text-6xl text-4xl font-semibold text-[#353535]">
            <span className="bg-gradient-to-l from-[#FF0000] to-[#0F3F8C] text-transparent bg-clip-text">
              Megha Express,
            </span>
            <br />
            your best delivery partner
          </h1>
          <p className="text-[#353535] text-xl 2xl:text-2xl md:w-[95%]">
            Megha Express is here to revolutionize your shipping experience with
            speed, reliability, and convenience. With Megha Express, enjoy peace
            of mind knowing your shipments are in capable hands, no matter where
            they’re headed.
          </p>
          <Button className="text-white py-6 w-fit">
            TRACK ORDER
            <ArrowRight className="w-7 h-7" />
          </Button>
        </div>
        <div className="w-full md:w-1/2 2xl:w-[45%] p-4 overflow-hidden">
          <Image
            src="/landing/hero/truck.png"
            width={300}
            height={300}
            layout="responsive"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
