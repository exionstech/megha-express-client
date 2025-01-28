import React from 'react'
import Logo from './logo'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="fixed right-0 left-0 top-0 z-10 shadow-sm w-full bg-white">
        <div className='max-w-screen-2xl mx-auto px-12 md:flex hidden items-center justify-between w-full py-3'>
        <Logo/>
      <div className="">
        navitems
      </div>
      <Button className='flex gap-2 text-white py-6'>
        SHIP WITH US
        <ArrowRight className='size-6'/>
      </Button>
    </div>
    </div>
  )
}

export default Navbar
