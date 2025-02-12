import Image from "next/image";

const data = [
  {
    name: "Reliable Shipping",
    image: "/ship-with-us/any-time/scuty.png",
    desc: "Choose from Standard, Express, or Same-Day to get your items delivered on time, every time!",
  },
  {
    name: "Global Shipping",
    image: "/ship-with-us/any-time/global.png",
    desc: "Enjoy Fast, Secure Delivery Worldwide for all your shipping needs and beyond, with seamless tracking.",
  },
  {
    name: "Flexible Delivery ",
    image: "/ship-with-us/any-time/clock.png",
    desc: "Easy Scheduled & On-Demand Shipping, Tailored to Fit Your Busy Lifestyle with Reliable and Flexible Options!",
  },
];

const ShipAnytime = () => {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-5 md:px-14 py-10 flex flex-col items-center gap-10">
      <div className="flex flex-col gap-5 items-center text-center w-full">
        <h1 className="text-4xl 2xl:text-5xl font-semibold text-customBlack select-none pointer-events-none">
          Ship Anytime, Anywhere!
        </h1>
        <p className="select-none pointer-events-none max-w-4xl text-center">
          With our flexible shipping services, you can send packages whenever
          you need, to any location worldwide. Whether it's across the street or
          across the globe, we ensure fast, reliable, and hassle-free delivery
          tailored to your needs.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex w-full flex-col gap-4 items-center text-center p-6 
            bg-white rounded-sm shadow-lg border-t-[0.25px] border-gray-100 transition-all duration-300 
         select-none pointer-events-none"
          >
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={400}
                className="select-none pointer-events-none"
              />
            </div>
            <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-customBlack">
              {item.name}
            </h2>
            <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShipAnytime;
