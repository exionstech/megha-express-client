import { MaxWrapper } from '@/components/shared/max-wrapper'
import ContactHero from './_components/contact-hero'
import ContactUs from './_components/contact-us'


const AboutUs = () => {
  return (
    <MaxWrapper className='flex flex-col gap-10 min-h-screen'>
        <ContactHero/>
        <ContactUs/>
    </MaxWrapper>
  )
}

export default AboutUs
