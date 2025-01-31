import { MaxWrapper } from '@/components/shared/max-wrapper'
import React from 'react'
import AboutHero from './_components/about-hero'
import OurStory from './_components/our-story'

const AboutUs = () => {
  return (
    <MaxWrapper className='flex flex-col gap-10'>
        <AboutHero/>
        <OurStory/>
        {/* <OurMisson/> */}
    </MaxWrapper>
  )
}

export default AboutUs
