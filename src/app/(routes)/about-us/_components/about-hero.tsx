"use client"
import React, { useEffect, useState } from 'react';

const AboutHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = '/about-us/hero.png';
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <section className='w-full h-[50vh] md:h-[80vh] 2xl:h-[70vh] relative overflow-hidden'>
      {/* Skeleton background with pulse animation */}
      <div className={`absolute inset-0 bg-muted animate-pulse transition-opacity duration-300 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}></div>
      
      {/* Background image with fade-in effect */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: imageLoaded ? 'url(/about-us/hero.png)' : 'none' }}
      ></div>
      
      {/* Content */}
      <div className='relative z-10 h-full flex items-center justify-center pt-10'>
        <div className='text-center'>
          <h1 className='text-6xl 2xl:text-7xl font-bold text-white'>About Us</h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;