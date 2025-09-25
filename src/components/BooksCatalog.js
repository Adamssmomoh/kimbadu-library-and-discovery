import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { bookCategories } from "../data/bookCategories";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function BooksCatalog() {
  return (
    <section id="catalog" className="px-8 py-20 bg-gray-50">
      <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
        {/* Left side - Swiper of cards */}
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {bookCategories.map((category, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3 text-center font-semibold">{category.name}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right side - Text */}
        <div className="w-full md:w-1/2">
          
          <h2 className="text-3xl font-bold mb-4">Books & Catalog</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            KLDC offers access to the updated
            technology and resources.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BooksCatalog;