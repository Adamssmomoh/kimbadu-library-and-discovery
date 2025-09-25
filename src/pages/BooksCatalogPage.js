import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import Navbar from "../components/Navbar"; // Import Navbar

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Shelf Images
const shelfImages = [
  {
    url: "book-catalog-image/shelf 1.JPG",
    caption: "Fiction Shelf",
  },
  {
    url: "book-catalog-image/shelf 2.JPG",
    caption: "Non-Fiction Shelf",
  },
  {
    url: "book-catalog-image/shelf 3.jpeg",
    caption: "Science Shelf",
  },
  {
    url: "book-catalog-image/shelf 4.jpeg",
    caption: "Children's Books",
  },
  {
    url: "book-catalog-image/shelf 6.jpeg",
    caption: "Art & Creativity",
  },
  {
    url: "book-catalog-image/shelf 7.jpeg",
    caption: "Research Collection",
  },
  {
    url: "book-catalog-image/shelf 8.jpeg",
    caption: "Digital Learning Shelf",
  },
  {
    url: "book-catalog-image/shelf 9.jpeg",
    caption: "Mystery & Novels",
  },
];

// Sample Books Data
const books = [
  {
    title: "School books",
    author: "F. Scott Fitzgerald",
    category: "school books",
    cover: "book-catalog-image/Sierra Leone school books.jpg",
  },
  {
    title: "Primary Books",
    author: "Yuval Noah Harari",
    category: "Primary Books",
    cover: "book-catalog-image/Primary 1 - 6.jpg",
  },
  {
    title: "Science & nature",
    author: "Various Authors",
    category: "Science",
    cover: "book-catalog-image/Science and nature.jpg",
  },
  {
    title: "Children's  Games",
    author: "J.K. Rowling",
    category: "Children",
    cover: "book-catalog-image/Games.jpg",
  },
  {
    title: "Sierra Leone school books",
    author: "Sierra Leone Writer",
    category: "Sierra Leone school books",
    cover: "book-catalog-image/Sierra Leone school books.jpg",
  },
  {
    title: "Young Adults",
    author: "Cultural Writers",
    category: "Young adults",
    cover: "book-catalog-image/Young adults .jpg",
  },
];

function BooksCatalogPage() {
  return (
    <>
      <Navbar /> {/* Add Navbar */}
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex items-center justify-center text-center text-white">
          <img
            src="book-catalog-image/main hero iamge.JPG"
            alt="Library background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Our Library Collection
            </h1>
            <p className="mt-4 text-lg md:text-xl opacity-90">
              Discover the shelves of Kimbadu Library & Discovery Center
            </p>
            <a
              href="#shelves"
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-medium shadow-lg"
            >
              Explore Shelves
            </a>
          </div>
        </div>

        {/* Shelf Carousel */}
        <div id="shelves" className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10">
            Library Shelves
          </h2>
          <Swiper
            modules={[Autoplay, Navigation, Pagination, EffectFade]}
            spaceBetween={20}
            slidesPerView={1}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="rounded-2xl shadow-lg"
          >
            {shelfImages.map((shelf, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative">
                  <img
                    src={shelf.url}
                    alt={shelf.caption}
                    className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white py-3 text-center rounded-b-2xl">
                    <p className="text-lg font-medium">{shelf.caption}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Book Catalog Grid */}
        <div className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10">
            Featured Books
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {books.map((book, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600">by {book.author}</p>
                  <span className="inline-block mt-3 text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    {book.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksCatalogPage;
