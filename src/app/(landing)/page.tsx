import { MaxWrapper } from "@/components/shared/max-wrapper";
import Hero from "./_components/hero";
import Services from "./_components/services";
import ChooseUs from "./_components/choose-us";
import FaqSection from "./_components/faq";
import UniqueValue from "./_components/unique-value";
import Testimonials from "./_components/testimonials";

export default function Home() {
  return (
    <MaxWrapper className="flex flex-col gap-16">
      <Hero/>
      <Services/>
      <ChooseUs/>
      <UniqueValue/>
      <Testimonials/>
      <FaqSection/>
    </MaxWrapper>
  );
}
