import { MaxWrapper } from "@/components/shared/max-wrapper";
import Hero from "./_components/hero";
import Services from "./_components/services";
import ChooseUs from "./_components/choose-us";
import FaqSection from "./_components/faq";

export default function Home() {
  return (
    <MaxWrapper>
      <Hero/>
      <Services/>
      <ChooseUs/>
      <FaqSection/>
    </MaxWrapper>
  );
}
