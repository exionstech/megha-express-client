import Image from "next/image";
import React from "react";

const OurMisson = () => {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-5 md:px-14 flex md:flex-row flex-col-reverse items-center gap-10">
      <div className="md:w-[50%] w-full md:aspect-[3/2] aspect-[4/3] relative select-none pointer-events-none">
        <Image
          src="/about-us/misson.png"
          alt="Our Story"
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <div className="md:w-[50%] w-full flex flex-col gap-5 text-customBlack text-center md:text-start select-none pointer-events-none">
        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-medium text-customBlack">
          Our Misson
        </h1>
        <span className="2xl:text-lg">
          At Megha Express, we are committed to providing reliable, efficient, and secure shipping solutions for businesses and individuals alike. With a focus on fast global delivery, real-time tracking, and customer-centric services, we strive to make every shipment a seamless experience. Our platform is designed to simplify the shipping process, offering flexible options for delivery speed, packaging, and special handling to meet diverse needs. Whether you're shipping locally or internationally, Megha Express ensures your parcels reach their destination safely and on time. Trust us to handle your deliveries with the utmost care and professionalism.
          With a dedicated team and advanced logistics technology, we optimize every step of the shipping journey for maximum efficiency. Our 24/7 customer support ensures you receive timely assistance and updates, giving you peace of mind with every shipment.
        </span>
      </div>
    </section>
  );
};

export default OurMisson;