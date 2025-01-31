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
      <SheetContent className='py-20 flex flex-col gap-10' side={"left"}>
        <div className="flex items-center justify-center">
        <Logo/>
        </div>
        <NavitemSection/>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav;
