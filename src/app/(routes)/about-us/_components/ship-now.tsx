import Link from 'next/link';
import React from 'react'

const ShipNow = () => {
  return (
    <section className='bg-customBlue w-full py-14'>
      <div className="w-full max-w-screen-2xl px-5 md:px-14 mx-auto flex items-center flex-col gap-6 text-darkBlue text-center">
        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-medium select-none pointer-events-none">Ship Smarter, Faster, and Safer with <br className='hidden md:block'/> Megha Express!</h1>
        <span className='md:w-[60%] select-none pointer-events-none'>Ready to experience hassle-free shipping? Whether you're sending a package across town or across the globe, Megha Express has you covered with reliable, secure, and fast delivery solutions.</span>
        <Link 
        href={"/"} 
        className='bg-red px-4 py-2 rounded-md text-center text-white hover:bg-[#dc0f0f]'
        >
        Ship Now
        </Link>
      </div>
    </section>
  )
}

export default ShipNow;
