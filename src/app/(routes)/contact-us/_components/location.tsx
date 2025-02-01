import React from 'react'

const Location = () => {
  return (
    <div className='w-full max-w-screen-2xl mx-auto px-5 md:px-14 overflow-hidden'>
      <div className="w-full rounded-lg overflow-hidden shadow-lg aspect-[3/2] md:aspect-[3/1]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.501244011331!2d88.48770200862216!3d22.56034883333806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b007af9ca31%3A0xa3a41f4146303146!2sUEM!5e0!3m2!1sen!2sin!4v1731930397063!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="UEM location map"
              />
            </div>
    </div>
  )
}

export default Location
