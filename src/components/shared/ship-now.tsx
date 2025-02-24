"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';




const ShipNow = () => {
  const router = useRouter()

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <section className='ship-now w-full py-14'>
      <div className="w-full max-w-screen-2xl px-5 md:px-14 mx-auto flex items-center flex-col gap-6 text-white text-center">
        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-medium select-none pointer-events-none">Ship Smarter, Faster, and Safer with <br className='hidden md:block' /> Megha Express!</h1>
        <span className='md:w-[60%] select-none pointer-events-none'>Ready to experience hassle-free shipping? Whether you're sending a package across town or across the globe, Megha Express has you covered with reliable, secure, and fast delivery solutions.</span>
        <Button
          onClick={scrollToTop}
          className='bg-red px-5 py-[10px] rounded-md font-medium text-center text-white hover:bg-[#dc0f0f]'
        >
          Ship Now
        </Button>
      </div>
    </section>
  )
}

export default ShipNow;
