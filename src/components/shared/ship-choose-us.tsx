import CustomIcon from "@/components/shared/custom-icon";
import { NumberTicker } from "@/components/shared/number-ticker";
import Heading from "./heading";

const data = [
  {
    src: "/common/ship-choose-us/location.svg",
    alt: "location",
    overview: "24000",
    quantity: "+",
    des: "pin codes covered",
  },
  {
    src: "/common/ship-choose-us/doller.svg",
    alt: "doller",
    overview: "200",
    quantity: "+",
    des: "international countries",
  },
  {
    src: "/common/ship-choose-us/car.svg",
    alt: "Track Order",
    overview: "50",
    quantity: "k+",
    des: "tonnes PTL delivered",
  },
  {
    src: "/common/ship-choose-us/contact.svg",
    alt: "Track Order",
    overview: "2000",
    quantity: "+",
    des: "happy clients",
  },
];

const ShipChooseUs = () => {
  return (
    <section className="w-full ship-choose-bg">
      <div className="w-full max-w-screen-2xl aspect-[1/1.2] md:aspect-[4/1.5] lg:aspect-[4/1.2] mx-auto px-5 md:px-14 flex flex-col gap-10 items-center justify-center">
      <Heading title="Why choose us" className="text-white"/>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8">
        {data.map((item, index) => (
        <div
          key={index}
         className="flex flex-col items-center justify-center gap-3">
          <CustomIcon src={item.src} alt={item.alt} size={35} />
          <div className="flex flex-col gap-1 text-center select-none pointer-events-none">
            <div className="flex items-center justify-center">
              <NumberTicker
                value={parseInt(item.overview)}
                className="text-3xl font-medium text-white"
              />
              <h1 className="text-3xl font-medium text-white">
                {item.quantity}
              </h1>
            </div>
            <p className="text-white">{item.des}</p>
          </div>
        </div>
      ))}
        </div>
      </div>
    </section>
  );
};

export default ShipChooseUs;
