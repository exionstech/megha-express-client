"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const testimonials = [
  {
    id: 1,
    name: "Sukumar Saha",
    role: "E-commerce Business Owner",
    comment: "Megha Express has transformed how I handle deliveries for my online store. Their same-day delivery service and real-time tracking have significantly improved my customers' satisfaction. The delivery staff is professional and always handles packages with care. Highly recommend!",
    rating: 5,
    image: "/landing/testimonials/male1.png"
  },
  {
    id: 2,
    name: "Sneha Sharma",
    role: "Restaurant Chain Manager",
    comment: "We've partnered with Megha Express for our food delivery services, and they've proven to be incredibly reliable. Their temperature-controlled delivery ensures our food reaches customers fresh and hot. The delivery times are consistent, and their customer service is excellent.",
    rating: 5,
    image: "/landing/testimonials/female2.png"
  },
  {
    id: 3,
    name: "Suman Das",
    role: "Retail Store Owner",
    comment: "As a busy retail store owner, I need a delivery partner I can count on. Megha Express handles all our local deliveries efficiently, and their bulk shipping rates are very competitive. Their tech platform makes it easy to schedule pickups and manage deliveries.",
    rating: 4,
    image: "/landing/testimonials/male2.png"
  },
  {
    id: 4,
    name: "Ananya Banerjee",
    role: "Boutique Owner",
    comment: "I run a boutique and often need quick, safe deliveries for my customers. Megha Express has been a lifesaver! Their timely and careful handling of packages keeps my customers happy.",
    rating: 5,
    image: "/landing/testimonials/female3.png"
  },
  {
    id: 5,
    name: "Rajesh Chatterjee",
    role: "Freelance Photographer",
    comment: "I frequently send delicate photography equipment to clients. Megha Express ensures everything reaches safely and on time. Their tracking system is fantastic!",
    rating: 4,
    image: "/landing/testimonials/male3.png"
  },
  {
    id: 6,
    name: "Indrani Ghosh",
    role: "Homemade Food Seller",
    comment: "I sell homemade snacks online and Megha Express has been the perfect delivery partner. Their punctuality and professional service keep my customers returning for more.",
    rating: 5,
    image: "/landing/testimonials/female4.png"
  },
  {
    id: 7,
    name: "Debojyoti Mukherjee",
    role: "IT Consultant",
    comment: "I often need to send urgent documents and gadgets across the city. Megha Express delivers reliably every time, making my job much easier.",
    rating: 4,
    image: "/landing/testimonials/male4.png"
  },
  {
    id: 8,
    name: "Madhumita Sen",
    role: "Florist",
    comment: "Freshness matters in my business, and Megha Express ensures my flower deliveries arrive in perfect condition. Their temperature-controlled logistics are a game-changer.",
    rating: 5,
    image: "/landing/testimonials/female5.png"
  },
  {
    id: 9,
    name: "Abhijit Roy",
    role: "Electronics Store Owner",
    comment: "I rely on Megha Express for secure and timely deliveries of gadgets. Their professionalism and careful handling of fragile products make them my go-to service.",
    rating: 5,
    image: "/landing/testimonials/male5.png"
  },
  {
    id: 10,
    name: "Paromita Dutta",
    role: "Handicraft Business Owner",
    comment: "My handmade products need safe and prompt deliveries. Megha Express never disappoints, and my customers appreciate the fast shipping.",
    rating: 4,
    image: "/landing/testimonials/female6.png"
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
    <section className="w-full bg-customBlue py-8">
      <div className="w-full max-w-screen-xl px-5 md:px-14 mx-auto flex flex-col gap-5 items-center">
        <div className="w-full text-center flex flex-col gap-3">
          <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-medium text-customBlack select-none">
            What You Can Do With Megha Express
          </h1>
          <p className="text-red select-none">
            See what our clients say about our service, in-depth understanding,
            and timely deliveries.
          </p>
        </div>
        
        <div className="relative w-full pt-10 pb-20">
          {/* Navigation Buttons */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 z-10">
            <button className="custom-prev-button w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button className="custom-next-button w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.custom-prev-button',
              nextEl: '.custom-next-button',
            }}
            loop={true}  // Enable infinite loop
            loopAdditionalSlides={3} // Ensures smooth transition for loop
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
      `}</style>
    </section>
  );
};



export default Testimonials;