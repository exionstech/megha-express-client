import Heading from "@/components/shared/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils";

interface FaqSectionProps {
  className?: string;
}

const accordionItems = [
    {
      title: 'How can I know the status of my orders?',
      content: 'You can track your order status through our tracking portal using your AWB number.',
    },
    {
      title: 'Whom shall I contact if I have concerns?',
      content: 'You can reach out to our customer support team through email or phone for any concerns.',
    },
    {
      title: 'Where can I find the AWB or order id?',
      content: 'We sent your AWB tracking number to you via Email & SMS upon order confirmation. You can find it there.',
    }
  ];

const FaqSection = (
  { className }: FaqSectionProps
) => {
  return (
    <section className={cn('w-full max-w-screen-2xl px-5 md:px-14 2xl:px-20 mx-auto flex flex-col gap-10 items-center', className)}>
        <Heading title={"Frequently asked questions"}/>
        <div className="w-full max-w-screen-xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
                {accordionItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>{item.content}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </section>
  )
}

export default FaqSection;
