import { MaxWrapper } from '@/components/shared/max-wrapper'
import React from 'react'
import ShipWithUsHero from './_components/ship-hero'
import ShipOverView from './_components/ship-overview'
import FaqSection from '@/app/(landing)/_components/faq'
import ShipAnytime from './_components/ship-anytime'
import ShipChooseUs from '@/components/shared/ship-choose-us'
import ShipNow from '@/components/shared/ship-now'

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
