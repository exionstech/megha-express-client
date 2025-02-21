import { MaxWrapper } from "@/components/shared/max-wrapper";
import Hero from "./_components/hero";
import FaqSection from "./_components/faq";
import UniqueValue from "./_components/unique-value";
import Testimonials from "./_components/testimonials";
import ShipChooseUs from "../../components/shared/ship-choose-us";
import WhatWeDo from "@/components/shared/what-we-do";

export default function Home() {
  return (
    <MaxWrapper className="flex flex-col">
      <Hero/>
      <WhatWeDo/>
      <ShipChooseUs/>
      <UniqueValue/>
      <Testimonials/>
      <FaqSection className="mt-16"/>
    </MaxWrapper>
  );
}
