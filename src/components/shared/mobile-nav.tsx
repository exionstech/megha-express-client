import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { AlignJustify } from 'lucide-react';
import NavitemSection from './navitem-section';

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
        <AlignJustify className="h-8 w-8 shrink-0" />
      </SheetTrigger>
      <SheetContent className='py-20' side={"left"}>
        <NavitemSection/>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav;
