import { MaxWrapper } from "@/components/shared/max-wrapper";
import Hero from "./_components/hero";
import FaqSection from "./_components/faq";
import UniqueValue from "./_components/unique-value";
import Testimonials from "./_components/testimonials";
import ShipChooseUs from "./_components/ship-choose-us";

export default function Home() {
  return (
    <MaxWrapper className="flex flex-col gap-16">
      <Hero/>
      <ShipChooseUs/>
      <UniqueValue/>
      <Testimonials/>
      <FaqSection/>
    </MaxWrapper>
  );
}
