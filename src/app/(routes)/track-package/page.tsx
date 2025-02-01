import { MaxWrapper } from '@/components/shared/max-wrapper'
import React from 'react'
import TrackOrder from './_components/track-order'
import OverView from './_components/over-view'


const AboutUs = () => {
  return (
    <MaxWrapper className='flex flex-col gap-10 min-h-screen'>
        <TrackOrder/>
        <OverView/>
    </MaxWrapper>
  )
}

export default AboutUs
