import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
      style={{ backgroundImage: "url('/home image/literacy.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          KIMBADU LIBRARY <br /> AND DISCOVERY CENTER
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Inspiring knowledge, literacy, and discovery for all
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/books-catalog" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500">
            Explore Catalog
          </Link>
          <Link to="/support-us" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Support Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
