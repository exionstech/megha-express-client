import React from "react";

const ShipChooseUs = () => {
  return (
    <section className="w-full ship-choose-bg">
      <div className="w-full max-w-screen-2xl mx-auto px-5 md:px-14 flex items-center md:justify-end py-20">
        <div className="w-full md:w-[50%] flex flex-col gap-5">
                <h1 className="text-5xl 2xl:text-6xl text-white font-semibold text-center md:text-start select-none pointer-events-none">
                Why Choose Us
                </h1>
                <p className="text-white lg:w-[90%] text-center md:text-start select-none pointer-events-none">
                Choose Megha Express for fast, reliable, and hassle-free shipping. We offer affordable rates, real-time tracking, and secure deliveries to ensure your packages reach their destination safely and on time. Our dedicated customer support team is always ready to assist you, making your shipping experience smooth and stress-free. Trust Megha Express for all your delivery needs!
                </p>
        </div>
      </div>
    </section>
  );
};

export default ShipChooseUs;
