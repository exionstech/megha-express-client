import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-5 md:px-14 flex md:flex-row flex-col items-center gap-10">
      <div className="md:w-[50%] w-full flex flex-col gap-5 text-customBlack text-center md:text-start select-none pointer-events-none 2xl:text-lg">
        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-medium text-customBlack">
          Our Story
        </h1>
        <span>
          Megha Express was founded with a vision to revolutionize the shipping
          industry by making deliveries faster, safer, and more reliable. What
          started as a small initiative has grown into a trusted logistics
          partner for businesses and individuals worldwide. Driven by innovation
          and a passion for excellence, we have built a platform that simplifies
          the shipping process, ensuring convenience at every step.
        </span>
        <span>
          From our early days, we have focused on leveraging cutting-edge
          technology, real-time tracking, and customer-centric solutions to meet
          the evolving demands of modern logistics. Whether it's a small parcel
          or bulk shipments, we take pride in delivering with precision and
          care.
        </span>
        <span>
          As we continue to grow, our commitment remains the same—providing
          seamless shipping experiences that empower businesses and connect
          people globally. At Megha Express, every delivery is a promise
          fulfilled.
        </span>
      </div>
      <div className="md:w-[50%] w-full md:aspect-[4/3] aspect-square relative select-none pointer-events-none">
        <Image
          src="/about-us/story.png"
          alt="Our Story"
          fill
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default OurStory;
