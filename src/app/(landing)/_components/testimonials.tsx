"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sukumar Saha",
    role: "Freelance Designer",
    comment: "I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!",
    rating: 5,
    image: "/landing/testimonials/male1.png"
  },
  {
    id: 2,
    name: "Laila Majnu",
    role: "Software Developer",
    comment: "I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.",
    rating: 3,
    image: "/landing/testimonials/female2.png"
  },
  {
    id: 3,
    name: "Suman Das",
    role: "Online Entrepreneur",
    comment: "I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.",
    rating: 1,
    image: "/landing/testimonials/male2.png"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const isMobile = window.innerWidth < 1024;
    const visibleCount = isMobile ? 1 : 3;
    const visibleItems = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visibleItems.push({
        ...testimonials[index],
        position: i
      });
    }
    return visibleItems;
  };

  return (
    <section className="w-full bg-customBlue py-8">
      <div className="w-full max-w-screen-xl px-5 md:px-14 mx-auto flex flex-col gap-5 items-center">
        <div className="w-full text-center flex flex-col gap-3">
          <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-medium text-customBlack select-none pointer-events-none">
            What You Can Do With Megha Express
          </h1>
          <p className="text-red">
            See what our clients say about our service, in-depth understanding,
            and timely deliveries.
          </p>
        </div>
        
        <div className="relative w-full h-full pt-10 pb-20">
          <div className="flex gap-6 px-4 py-1 overflow-hidden">
            {getVisibleTestimonials().map((testimonial, idx) => (
              <motion.div 
                key={testimonial.id}
                className="w-full lg:w-[calc(33.33%-1rem)] flex-shrink-0 bg-white p-4 rounded-lg shadow-sm items-center flex flex-col"
                initial={{ x: 300, opacity: 0 }}
                animate={{ 
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: idx * 0.2,
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }}
                exit={{ x: -300, opacity: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5
                }}
              >
                <p className="text-gray-700 mb-1 text-center line-clamp-6">{testimonial.comment}</p>
                <div className="flex mb-1">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="text-2xl text-yellow-400">
                      {index < testimonial.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className='text-center'>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
            <button
              onClick={prevSlide}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;