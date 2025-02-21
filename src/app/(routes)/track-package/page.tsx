import { MaxWrapper } from '@/components/shared/max-wrapper'
import React from 'react'
import TrackOrder from './_components/track-order'
import OverView from './_components/over-view'
import FaqSection from './_components/faq'
import ShipNow from '@/components/shared/ship-now'



const AboutUs = () => {
  return (
    <MaxWrapper className='flex flex-col min-h-screen'>
        <TrackOrder/>
        <OverView/>
        <ShipNow/>
        <FaqSection/>
    </MaxWrapper>
  )
}

export default AboutUs
