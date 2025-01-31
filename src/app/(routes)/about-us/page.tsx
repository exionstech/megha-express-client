import { MaxWrapper } from '@/components/shared/max-wrapper'
import React from 'react'
import AboutHero from './_components/about-hero'
import OurStory from './_components/our-story'
import OurMisson from './_components/our-misson'
import ShipNow from './_components/ship-now'

const AboutUs = () => {
  return (
    <MaxWrapper className='flex flex-col gap-10'>
        <AboutHero/>
        <OurStory/>
        <ShipNow/>
        <OurMisson/>
    </MaxWrapper>
  )
}

export default AboutUs
