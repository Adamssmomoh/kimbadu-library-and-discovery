import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar

function LiteracyProgramPage() { // Renamed function
  return (
    <>
      <Navbar /> {/* Add Navbar */}
      <div className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Literacy Program
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Opening doors to learning for adults, youth, and families —
              because it’s never too late to start your journey.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            A Safe and Supportive Space for Learning
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Our program welcomes people who have never had the chance to attend
            school, as well as those who want to improve their reading and writing
            skills. Whether you are a young person, a parent, or an elder in the
            community — we are here to help you grow with patience and respect.
          </p>

          {/* 4 Key Program Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-xl text-blue-800 mb-2">📚 Reading proficiency</h3>
              <p className="text-gray-600">
                Phonetics, educational games.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-xl text-blue-800 mb-2">✍️ Writing Skills</h3>
              <p className="text-gray-600">
                Practice writing letters, filling forms, and expressing yourself
                with confidence.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-xl text-blue-800 mb-2">🧑‍🤝‍🧑 Community Classes</h3>
              <p className="text-gray-600">
                Learn in small, supportive groups where everyone encourages each
                other.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-xl text-blue-800 mb-2">🌐 Digital Literacy</h3>
              <p className="text-gray-600">
                Gain confidence using computers, tablets, and online tools for
                everyday life.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">
              Learning in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Take a glimpse into our classes and community gatherings. Take a look!!!
            </p>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <img
                src="/literacy program/action in learning.jpg"  
                alt="Literacy class"
                className="rounded-xl shadow-md hover:scale-105 transition"
              />
              <img
                src="/literacy program/learning in action.jpg"
                alt="Community class"
                className="rounded-xl shadow-md hover:scale-105 transition"
              />
              <img
                src="/literacy program/learning.jpg"
                alt="Books and teaching"
                className="rounded-xl shadow-md hover:scale-105 transition"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LiteracyProgramPage;