import Image from "next/image";
import Heading from "./heading";

const data = [
  {
    imageUrl: "/common/what-we-do/1.png",
    title: "Domestic Service",
    des: "We offer a list of domestic services for time critical deliveries within West Bengal",
  },
  {
    imageUrl: "/common/what-we-do/2.png",
    title: "International Service",
    des: "The best way to send or receive parcels to/from any destination in the world",
  },
  {
    imageUrl: "/common/what-we-do/3.png",
    title: "Cash on Delivery",
    des: "Specially tailored for ecommerce companies in the UAE, so you don't lose out on any business",
  },
  {
    imageUrl: "/common/what-we-do/4.png",
    title: "E-com courier service",
    des: "End-to-end logistics for speedy, safe and reliable delivery services for the ecommerce sector",
  },
  {
    imageUrl: "/common/what-we-do/5.png",
    title: "last Mile delivery service",
    des: "Trust-worthy, on-demand last mile logistics executed for the fastest and smoothest deliveries",
  },
  {
    imageUrl: "/common/what-we-do/6.png",
    title: "project logistics",
    des: "Avail 360 degree Project Logistics with our reliable and secure shipments",
  },
];

const WhatWeDo = () => {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-5 md:px-14 py-14 flex flex-col gap-10">
      <Heading title={"What we do"}/>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item) => (
          <div
            key={item.title}
            className="w-full border-r-[0.01px] border-b-[0.01px] border-black/10 rounded-xl shadow-lg p-5 select-none pointer-events-none flex flex-col gap-5"
          >
            <div className="w-full flex items-center justify-center">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={450}
              height={450}
              className="shrink-0 object-cover rounded-sm"
            />
            </div>
            <h1 className="text-2xl font-semibold text-center capitalize">{item.title}</h1>
            <p className="text-center">{item.des}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
