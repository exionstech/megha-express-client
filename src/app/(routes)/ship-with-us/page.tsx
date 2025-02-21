import { MaxWrapper } from '@/components/shared/max-wrapper'
import React from 'react'
import ShipWithUsHero from './_components/ship-hero'
import ShipOverView from './_components/ship-overview'
import FaqSection from '@/app/(landing)/_components/faq'
import ShipNow from '@/components/shared/ship-now'
import WhatWeDo from '@/components/shared/what-we-do'

const ShipWithUsPage = () => {
  return (
    <MaxWrapper className='flex flex-col min-h-screen'>
        <ShipWithUsHero/>
        <ShipOverView className='bg-slate-100'/>
        <WhatWeDo/>
        <ShipNow/>
        <FaqSection className='pt-10'/>
    </MaxWrapper>
  )
}

export default ShipWithUsPage
