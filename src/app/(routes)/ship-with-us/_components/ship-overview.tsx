import CustomIcon from "@/components/shared/custom-icon";

const data = [
  {
    src: "/track-order/location.svg",
    alt: "location",
    overview: "24,000+",
    des: "pin codes covered",
  },
  {
    src: "/track-order/doller.svg",
    alt: "doller",
    overview: "Upto 40%",
    des: "reduction in cost",
  },
  {
    src: "/track-order/car.svg",
    alt: "Track Order",
    overview: "50K+",
    des: "tonnes PTL delivered",
  },
  {
    src: "/track-order/contact.svg",
    alt: "Track Order",
    overview: "2,000+",
    des: "happy clients",
  },
];

const ShipOverView = () => {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-5 md:px-16 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
      {data.map((item) => (
        <div className="flex flex-col items-center justify-center gap-3">
          <CustomIcon src={item.src} alt={item.alt} size={30}/>
          <div className="flex flex-col gap-1 text-center select-none pointer-events-none">
          <h1 className="text-3xl font-semibold text-customBlack">{item.overview}</h1>
          <p className="text-customBlack">{item.des}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ShipOverView;
