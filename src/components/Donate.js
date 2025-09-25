import React from "react";
import { Link } from "react-router-dom"; // Import Link

function Donate() {
  return (
    <section className="py-16 bg-indigo-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Support Kimbadu Library & Discovery Center
        </h2>
        <p className="text-lg mb-6">
          Help us grow our literacy programs, expand our book collection, and
          provide digital learning access to the community. Every contribution
          makes a difference!
        </p>
        <Link
          to="/donate" // Link to the DonatePage
          className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-200 transition"
        >
          Donate Now
        </Link>
      </div>
    </section>
  );
}

export default Donate;