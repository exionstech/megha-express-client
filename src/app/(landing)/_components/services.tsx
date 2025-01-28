import { cn } from "@/lib/utils";
import Image from "next/image";

const status = [
  {
    id: 1,
    title: "Order",
    des: "Easily schedule your deliveries within minutes using our streamlined and intuitive booking system, designed for convenience.",
    image: "/landing/services/order.png",
  },
  {
    id: 2,
    title: "Track",
    des: "Stay updated on the status of your shipments with real-time tracking, ensuring full visibility and timely updates at every step.",
    image: "/landing/services/track.png",
  },
  {
    id: 3,
    title: "Customize",
    des: "Tailor your shipping experience with options like packaging preferences, delivery speed, and special handling instructions.",
    image: "/landing/services/customize.png",
  },
];
const Services = () => {
  return (
    <section className="w-full max-w-screen-2xl min-h-screen px-5 md:px-14 flex flex-col py-10 mx-auto gap-10">
      <div className="w-full text-center mt-5">
        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-medium text-customBlack select-none pointer-events-none">
          What You Can Do With Megha Express
        </h1>
      </div>
      <div className="w-full lg:px-20 2xl:px-28 flex flex-col gap-10 mt-5 items-center">
        {status.map((item) => (
          <div
            key={item.id}
            className={cn(
              "w-full flex justify-between gap-5",
              item.id % 2 === 0 && "flex-row-reverse justify-between"
            )}
          >
            <div className="md:w-1/2 w-full flex items-center justify-center">
              <div
                className={cn(
                  "flex flex-col gap-4 select-none pointer-events-none",
                  item.id % 2 === 0 && "items-end"
                )}
              >

                  <div className={cn("flex gap-5 items-center", item.id % 2 === 0 && "lg:w-[60%]")}>
                    <div className="flex items-center justify-center rounded-full size-8 bg-[#053C8E] text-lg font-semibold text-white">
                      {item.id}
                    </div>
                    <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-red">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-[#353535] lg:w-[60%]">{item.des}</p>
              </div>
            </div>
            <div
              className={cn(
                "md:w-1/2 w-full flex items-center justify-end",
                item.id % 2 === 0 && "justify-start"
              )}
            >
              <Image
                src={item.image}
                width={230}
                height={230}
                alt="service"
                className="shrink-0 select-none pointer-events-none"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
