import { MaxWrapper } from '@/components/shared/max-wrapper'
import React from 'react'
import ShipWithUsHero from './_components/ship-hero'
import ShipOverView from './_components/ship-overview'
import ShipChooseUs from './_components/ship-choose-us'
import FaqSection from '@/app/(landing)/_components/faq'
import ShipNow from './_components/ship-now'
import ShipAnytime from './_components/ship-anytime'

const ShipWithUsPage = () => {
  return (
    <MaxWrapper className='flex flex-col min-h-screen'>
        <ShipWithUsHero/>
        <ShipOverView/>
        <ShipChooseUs/>
        <ShipAnytime/>
        <ShipNow/>
        <FaqSection/>
    </MaxWrapper>
  )
}

export default ShipWithUsPage
