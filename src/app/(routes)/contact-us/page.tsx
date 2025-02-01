import { MaxWrapper } from '@/components/shared/max-wrapper'
import ContactHero from './_components/contact-hero'
import ContactUs from './_components/contact-us'
import Location from './_components/location'


const AboutUs = () => {
  return (
    <MaxWrapper className='flex flex-col gap-10 min-h-screen'>
        <ContactHero/>
        <ContactUs/>
        <Location/>
    </MaxWrapper>
  )
}

export default AboutUs
