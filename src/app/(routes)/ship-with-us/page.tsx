import { MaxWrapper } from '@/components/shared/max-wrapper'
import React from 'react'
import ShipWithUsHero from './_components/ship-hero'
import ShipOverView from './_components/ship-overview'

const ShipWithUsPage = () => {
  return (
    <MaxWrapper className='flex flex-col min-h-screen'>
        <ShipWithUsHero/>
        <ShipOverView/>
    </MaxWrapper>
  )
}

export default ShipWithUsPage
