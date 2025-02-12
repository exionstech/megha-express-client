import CustomIcon from "@/components/shared/custom-icon";
import { NumberTicker } from "@/components/shared/number-ticker";
import Image from "next/image";

const data = [
  {
    src: "/track-order/location.svg",
    alt: "location",
    overview: "24000",
    quantity: "+",
    des: "pin codes covered",
  },
  {
    src: "/track-order/doller.svg",
    alt: "doller",
    overview: "200",
    quantity: "+",
    des: "international countries",
  },
  {
    src: "/track-order/contact.svg",
    alt: "Track Order",
    overview: "2000",
    quantity: "+",
    des: "happy clients",
  },
];

const LargeScreen = () => {
  return (
    <div className="w-full max-w-screen-2xl px-14 mx-auto md:flex flex-row items-center gap-5 hidden">
      <div className="w-1/2 overflow-hidden">
        <Image
          src="/landing/choose-us/car.png"
          width={500}
          height={500}
          alt="choose us"
          className="select-none pointer-events-none shrink-0"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-6">
        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-medium text-customBlack select-none pointer-events-none text-center md:text-start">
          Why Choose Us
        </h1>
        <div className="grid grid-cols-3 gap-3">
          {data.map((item) => (
            <div
              key={item.alt}
              className="flex flex-col items-center justify-center gap-1"
            >
              <CustomIcon src={item.src} alt={item.alt} size={25} />
              <div className="flex flex-col text-center select-none pointer-events-none">
                <div className="flex items-center justify-center">
                  <NumberTicker
                    value={parseInt(item.overview)}
                    className="text-3xl font-semibold text-customBlack"
                  />
                  <h1 className="text-3xl font-semibold text-customBlack">
                    {item.quantity}
                  </h1>
                </div>
                <p className="text-customBlack">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SmallScreen = () => {
  return (
    <div className="w-full max-w-screen-2xl px-5 flex flex-col gap-5 md:hidden">
      <h1 className="text-4xl 2xl:text-5xl font-medium text-customBlack select-none pointer-events-none text-center md:text-start">
        Why Choose Us
      </h1>
      <div className="w-full overflow-hidden">
        <Image
          src="/landing/choose-us/car.png"
          width={500}
          height={500}
          alt="choose us"
          className="select-none pointer-events-none shrink-0"
        />
      </div>
      <div className="w-full flex justify-between items-center px-2">
        {data.slice(0, 2).map((item) => (
          <div
            key={item.alt}
            className="flex flex-col items-center justify-center gap-2"
          >
            <CustomIcon src={item.src} alt={item.alt} size={25} />
            <div className="flex flex-col text-center select-none pointer-events-none">
            <div className="flex items-center justify-center">
              <NumberTicker
                value={parseInt(item.overview)}
                className="text-3xl font-semibold text-customBlack"
              />
              <h1 className="text-3xl font-semibold text-customBlack">
                {item.quantity}
              </h1>
            </div>
              <p className="text-customBlack">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        {data.slice(2).map((item) => (
          <div
            key={item.alt}
            className="flex flex-col items-center justify-center gap-2"
          >
            <CustomIcon src={item.src} alt={item.alt} size={25} />
            <div className="flex flex-col text-center select-none pointer-events-none">
            <div className="flex items-center justify-center">
              <NumberTicker
                value={parseInt(item.overview)}
                className="text-3xl font-semibold text-customBlack"
              />
              <h1 className="text-3xl font-semibold text-customBlack">
                {item.quantity}
              </h1>
            </div>
              <p className="text-customBlack">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChooseUs = () => {
  return (
    <section className="w-full bg-customBlue py-5">
      <LargeScreen />
      <SmallScreen />
    </section>
  );
};

export default ChooseUs;
