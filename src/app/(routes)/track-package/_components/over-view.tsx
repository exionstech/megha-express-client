import CustomIcon from "@/components/shared/custom-icon";
import { NumberTicker } from "@/components/shared/number-ticker";

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
    src: "/track-order/car.svg",
    alt: "Track Order",
    overview: "50",
    quantity: "k+",
    des: "tonnes PTL delivered",
  },
  {
    src: "/track-order/contact.svg",
    alt: "Track Order",
    overview: "2000",
    quantity: "+",
    des: "happy clients",
  },
];

const OverView = () => {
  return (
    <section className="w-full py-16">
      <div className="w-full max-w-screen-2xl mx-auto px-5 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div 
            key={index}
          className="flex flex-col items-center justify-center gap-3">
            <CustomIcon src={item.src} alt={item.alt} size={30} />
            <div className="flex flex-col gap-1 text-center select-none pointer-events-none">
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
    </section>
  );
};

export default OverView;
