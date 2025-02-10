import { MaxWrapper } from '@/components/shared/max-wrapper'
import React from 'react'
import ShipWithUsHero from './_components/ship-hero'

const ShipWithUsPage = () => {
  return (
    <MaxWrapper className='flex flex-col min-h-screen'>
        <ShipWithUsHero/>
    </MaxWrapper>
  )
}

export default ShipWithUsPage
