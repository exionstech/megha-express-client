import { MaxWrapper } from '@/components/shared/max-wrapper'
import React from 'react'
import TrackOrder from './_components/track-order'
import OverView from './_components/over-view'
import ShipNow from './_components/ship-now'
// import FaqSection from './_components/faq'



const AboutUs = () => {
  return (
    <MaxWrapper className='flex flex-col min-h-screen'>
        <TrackOrder/>
        <OverView/>
        <ShipNow/>
        {/* <FaqSection/> */}
    </MaxWrapper>
  )
}

export default AboutUs
