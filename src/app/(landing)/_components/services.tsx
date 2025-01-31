import { cn } from "@/lib/utils";
import Image from "next/image";

const LargeScreen = () => {
  return (
    <div className="w-full px-10 lg:px-20 2xl:px-28 flex-col gap-16 lg:gap-10 mt-5 items-center md:flex hidden">
      {/* First Service */}
      <div className="w-full flex justify-between gap-5 lg:pb-4">
        <div className="w-1/2 flex items-center justify-center">
          <div className="flex flex-col gap-4 select-none pointer-events-none">
            <div className="flex gap-5 items-center">
              <div className="flex items-center justify-center rounded-full size-8 bg-[#053C8E] text-lg font-semibold text-white">
                1
              </div>
              <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-red">
                Order
              </h2>
            </div>
            <p className="text-[#353535] lg:w-[60%]">
              Easily schedule your deliveries within minutes using our
              streamlined and intuitive booking system, designed for
              convenience.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <Image
            src="/landing/services/order.png"
            width={250}
            height={250}
            alt="Order service"
            className="shrink-0 select-none pointer-events-none"
          />
        </div>
      </div>

      {/* arrow image */}
      <div className="relative w-full">
        <Image
          src="/landing/services/vector-1.png"
          width={430}
          height={430}
          alt="Arrow"
          className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:flex hidden"
        />
        <Image
          src="/landing/services/vector-1.png"
          width={250}
          height={250}
          alt="Arrow"
          className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:hidden"
        />
      </div>
      {/* Second Service */}
      <div className="w-full flex flex-row-reverse justify-between gap-5">
        <div className="w-1/2 flex items-center justify-center">
          <div className="flex flex-col gap-4 select-none pointer-events-none lg:items-end">
            <div className="flex gap-5 items-center lg:w-[60%]">
              <div className="flex items-center justify-center rounded-full size-8 bg-[#053C8E] text-lg font-semibold text-white">
                2
              </div>
              <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-red">
                Track
              </h2>
            </div>
            <p className="text-[#353535] lg:w-[60%]">
              Stay updated on the status of your shipments with real-time
              tracking, ensuring full visibility and timely updates at every
              step.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-start">
          <Image
            src="/landing/services/track.png"
            width={230}
            height={230}
            alt="Track service"
            className="shrink-0 select-none pointer-events-none"
          />
        </div>
      </div>

      {/* arrow image */}
      <div className="relative w-full">
        <Image
          src="/landing/services/vector-2.png"
          width={430}
          height={430}
          alt="Arrow"
          className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:flex hidden"
        />
        <Image
          src="/landing/services/vector-2.png"
          width={250}
          height={250}
          alt="Arrow"
          className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:hidden"
        />
      </div>
      {/* Third Service */}
      <div className="w-full flex justify-between gap-5">
        <div className="w-1/2 flex items-center justify-center">
          <div className="flex flex-col gap-4 select-none pointer-events-none">
            <div className="flex gap-5 items-center">
              <div className="flex items-center justify-center rounded-full size-8 bg-[#053C8E] text-lg font-semibold text-white">
                3
              </div>
              <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-red">
                Customize
              </h2>
            </div>
            <p className="text-[#353535] lg:w-[60%]">
              Tailor your shipping experience with options like packaging
              preferences, delivery speed, and special handling instructions.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <Image
            src="/landing/services/customize.png"
            width={230}
            height={230}
            alt="Customize service"
            className="shrink-0 select-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    title: "Order",
    description:
      "Easily schedule your deliveries within minutes using our streamlined and intuitive booking system, designed for convenience.",
    image: "/landing/services/order.png",
  },
  {
    id: 2,
    title: "Track",
    description:
      "Stay updated on the status of your shipments with real-time tracking, ensuring full visibility and timely updates at every step.",
    image: "/landing/services/track.png",
  },
  {
    id: 3,
    title: "Customize",
    description:
      "Tailor your shipping experience with options like packaging preferences, delivery speed, and special handling instructions.",
    image: "/landing/services/customize.png",
  },
];

const SmallScreen = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-8 md:hidden">
      {data.map((item) => (
        <div key={item.title} className="flex flex-col mb-2">
          <div className="w-full flex flex-col">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <div className="flex items-center justify-center rounded-full size-8 bg-[#053C8E] text-lg font-semibold text-white">
                {item.id}
              </div>
              <h2 className="text-3xl font-semibold text-red">{item.title}</h2>
            </div>
            <p className="text-[#353535]">
              {item.description}
            </p>
          </div>
          <div className="">
            <Image
              src={item.image}
              width={item.id === 1 ? 260 : 230}
              height={item.id === 1 ? 260 : 230}
              alt={item.title}
              className="shrink-0 select-none pointer-events-none"
            />
          </div>
        </div>
        {
          item.id !==3 && (
            <div className="items-center justify-center flex">
          <Image
            src={item.id === 1 ? "/landing/services/vector-3.png" : item.id === 2 ? "/landing/services/vector-4.png" : ""}
            width={100}
            height={100}
            alt="Arrow"
            className="shrink-0 select-none pointer-events-none"
          />
        </div>
          )
        }
        </div>
      ))}
    </div>
  );
};

const Services = () => {
  return (
    <section className="w-full max-w-screen-2xl px-5 md:px-14 flex flex-col mx-auto gap-10">
      <div className="w-full text-center">
        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-medium text-customBlack select-none pointer-events-none">
          What You Can Do With Megha Express
        </h1>
      </div>
      <LargeScreen />
      <SmallScreen />
    </section>
  );
};

export default Services;
