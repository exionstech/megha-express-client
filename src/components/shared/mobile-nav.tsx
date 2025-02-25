"use client"
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { AlignJustify, ArrowRight } from 'lucide-react';
import NavitemSection from './navitem-section';
import Logo from './logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
        <AlignJustify className="h-8 w-8 shrink-0" />
      </SheetTrigger>
      <SheetContent className='py-20 flex flex-col gap-10' side={"left"}>
        <div className="flex items-center justify-center">
        <Logo/>
        </div>
        <NavitemSection/>
        <Link
          href={"/ship-with-us"}
          className="text-white font-medium bg-red rounded-xl py-2 px-3 flex items-center justify-center"
        >
          SHIP WITH US
          <ArrowRight className="w-6 h-6 ml-2" />
        </Link>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav;
