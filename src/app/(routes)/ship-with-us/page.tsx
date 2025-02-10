import { MaxWrapper } from '@/components/shared/max-wrapper'
import React from 'react'
import ShipWithUsHero from './_components/ship-hero'
import ShipOverView from './_components/ship-overview'
import ShipChooseUs from './_components/ship-choose-us'

const ShipWithUsPage = () => {
  return (
    <MaxWrapper className='flex flex-col min-h-screen'>
        <ShipWithUsHero/>
        <ShipOverView/>
        <ShipChooseUs/>
    </MaxWrapper>
  )
}

export default ShipWithUsPage
