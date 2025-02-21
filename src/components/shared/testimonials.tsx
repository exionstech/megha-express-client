"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Heading from '@/components/shared/heading';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const testimonials = [
  {
    id: 1,
    name: "Sukumar Saha",
    role: "E-commerce Business Owner",
    comment: "Megha Express has transformed how I handle deliveries. Their same-day service and tracking have improved my customers' satisfaction. Their staff is professional and careful. Highly recommend!",
    rating: 5,
    image: "/landing/testimonials/male1.png"
  },
  {
    id: 2,
    name: "Sneha Sharma",
    role: "Restaurant Chain Manager",
    comment: "We've partnered with Megha Express for food delivery. Their temperature-controlled logistics ensure food reaches fresh and hot. Delivery times are consistent, and service is excellent.",
    rating: 5,
    image: "/landing/testimonials/female2.png"
  },
  {
    id: 3,
    name: "Suman Das",
    role: "Retail Store Owner",
    comment: "As a busy retailer, I need a reliable partner. Megha Express handles local deliveries efficiently, and their bulk rates are great. Their tech platform makes scheduling easy.",
    rating: 4,
    image: "/landing/testimonials/male2.png"
  },
  {
    id: 4,
    name: "Ananya Banerjee",
    role: "Boutique Owner",
    comment: "I run a boutique and need safe, quick deliveries. Megha Express has been a lifesaver! Their careful handling and on-time service keep my customers happy.",
    rating: 5,
    image: "/landing/testimonials/female3.png"
  },
  {
    id: 5,
    name: "Rajesh Chatterjee",
    role: "Freelance Photographer",
    comment: "I send delicate photography gear often. Megha Express ensures safe, timely deliveries. Their tracking system is excellent, keeping me and my clients updated.",
    rating: 4,
    image: "/landing/testimonials/male3.png"
  },
  {
    id: 6,
    name: "Indrani Ghosh",
    role: "Homemade Food Seller",
    comment: "Selling homemade snacks requires punctual deliveries. Megha Express has been a great partner with their timely, professional service. My customers love it!",
    rating: 5,
    image: "/landing/testimonials/female4.png"
  },
  {
    id: 7,
    name: "Debojyoti Mukherjee",
    role: "IT Consultant",
    comment: "I send urgent documents and gadgets often. Megha Express delivers reliably every time, making my job much easier. Highly dependable and professional service.",
    rating: 4,
    image: "/landing/testimonials/male4.png"
  },
  {
    id: 8,
    name: "Madhumita Sen",
    role: "Florist",
    comment: "Fresh flowers need careful delivery, and Megha Express ensures they arrive in perfect condition. Their temperature-controlled logistics are a game-changer.",
    rating: 5,
    image: "/landing/testimonials/female5.png"
  },
  {
    id: 9,
    name: "Abhijit Roy",
    role: "Electronics Store Owner",
    comment: "I rely on Megha Express for secure gadget deliveries. Their careful handling and professionalism make them my go-to service for all my store's needs.",
    rating: 5,
    image: "/landing/testimonials/male5.png"
  },
  {
    id: 10,
    name: "Paromita Dutta",
    role: "Handicraft Business Owner",
    comment: "My handmade products need safe, fast deliveries. Megha Express never disappoints, ensuring my customers get their orders promptly and in perfect condition.",
    rating: 4,
    image: "/landing/testimonials/female3.png"
  }
];

interface TestimonialCardProps {
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ name, role, comment, rating, image } : TestimonialCardProps) => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm flex flex-col items-center select-none">
      <p className="text-gray-700 mb-1 text-center line-clamp-4">{comment}</p>
      <div className="flex mb-1">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-2xl text-yellow-400">
            {index < rating ? "★" : "☆"}
          </span>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className='text-center'>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="w-full bg-customBlue py-10 md:py-14 relative mt-16">
      <div className="w-full max-w-screen-xl px-5 md:px-14 mx-auto flex flex-col gap-5 items-center">
        <div className="w-full text-center flex flex-col gap-3">
          <Heading title='What other says'/>
          <p className="text-red select-none">
            See what our clients say about our service, in-depth understanding,
            and timely deliveries.
          </p>
        </div>
        
        <div className="relative w-full pt-10 pb-20">
          {/* Swiper */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.custom-prev-button',
              nextEl: '.custom-next-button',
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            loopAdditionalSlides={3}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons - Moved inside the section but outside the Swiper container */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2" style={{ zIndex: 1 }}>
            <button className="custom-prev-button w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button className="custom-next-button w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom styles for removing default Swiper button styles */}
      <style jsx global>{`
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          display: none;
        }
        
        .testimonials-swiper .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Ensure the testimonials section stays below the navbar */
        section {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;