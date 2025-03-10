import { MaxWrapper } from '@/components/shared/max-wrapper'
import React from 'react'
import ApplyUsHero from './_components/apply-hero';

const ApplyUsPage = () => {
  return (
    <MaxWrapper className='flex flex-col gap-10 min-h-screen'>
        <ApplyUsHero/>
    </MaxWrapper>
  )
}

export default ApplyUsPage;
