import React from 'react'

const Location = () => {
  return (
    <div className='w-full max-w-screen-2xl mx-auto px-5 md:px-14 overflow-hidden'>
      <div className="w-full rounded-lg overflow-hidden shadow-lg aspect-[3/2] md:aspect-[3/1]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.6357365110402!2d88.3895521756279!3d22.442732137717044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271ed79a4cb81%3A0xf327322ba16fe03a!2sVivekananda%20Marg%2C%20Ramchandrapur%2C%20Narendrapur%2C%20West%20Bengal%20700153!5e0!3m2!1sen!2sin!4v1740223834522!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="location map"
              />
            </div>
    </div>
  )
}

export default Location
