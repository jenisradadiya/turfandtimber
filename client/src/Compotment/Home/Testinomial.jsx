import React from "react";
import testimonials from "./Testinomials.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function Testimonial() {
  const slidesPerView = 3;

  // Duplicate slides if too few to avoid blank previews
  const loopTestimonials =
    testimonials.length < slidesPerView
      ? [...testimonials, ...testimonials, ...testimonials]
      : testimonials;

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-600 mb-10">
          Real feedback from our satisfied clients
        </p>

        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          loop={true}
          loopedSlides={loopTestimonials.length} // duplicate for smooth loop
          grabCursor={true}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1, navigation: false },
            768: { slidesPerView: 2, navigation: true },
            1024: { slidesPerView: 3, navigation: true },
          }}
        >
          {loopTestimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-transform duration-300
                swiper-slide-active:scale-105">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-gray-200"
                />

                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.role}</p>
                <p className="text-gray-700 italic">"{item.message}"</p>

                <div className="flex justify-center mt-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
