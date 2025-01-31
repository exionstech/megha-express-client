import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { AlignJustify } from 'lucide-react';
import NavitemSection from './navitem-section';
import Logo from './logo';

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
        <AlignJustify className="h-8 w-8 shrink-0" />
      </SheetTrigger>
      <SheetContent className='py-20 flec flex-col gap-10' side={"left"}>
        <Logo/>
        <NavitemSection/>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav;
