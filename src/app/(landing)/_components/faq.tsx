import Accordion from "@/components/shared/accordian";

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

const FaqSection = () => {
  return (
    <section className='w-full max-w-screen-2xl px-5 md:px-14 2xl:px-20 mx-auto flex flex-col gap-10 items-center'>
        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-medium text-customBlack select-none pointer-events-none">
        Frequently asked questions
        </h1>
        <div className="w-full max-w-screen-xl mx-auto">
        <Accordion items={accordionItems}/>
        </div>
    </section>
  )
}

export default FaqSection;
