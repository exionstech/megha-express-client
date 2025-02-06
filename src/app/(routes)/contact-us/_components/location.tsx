import React from 'react'

const Location = () => {
  return (
    <div className='w-full max-w-screen-2xl mx-auto px-5 md:px-14 overflow-hidden'>
      <div className="w-full rounded-lg overflow-hidden shadow-lg aspect-[3/2] md:aspect-[3/1]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3687.656501950976!2d88.39082479999999!3d22.441950999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDI2JzMxLjAiTiA4OMKwMjMnMjcuMCJF!5e0!3m2!1sen!2sin!4v1738852903454!5m2!1sen!2sin"
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
