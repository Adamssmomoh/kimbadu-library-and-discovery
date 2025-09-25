import React from "react";
import { FaGlobe, FaBookReader, FaPrint, FaChalkboardTeacher } from "react-icons/fa";
import Navbar from "../components/Navbar"; // Import Navbar

const services = [
  {
    icon: <FaGlobe className="text-blue-600 text-4xl mb-4" />,
    title: "Internet Access",
    desc: "Fast and reliable internet for research, browsing, and communication."
  },
  {
    icon: <FaBookReader className="text-green-600 text-4xl mb-4" />,
    title: "Research Assistance",
    desc: "Our staff helps you find credible sources and academic materials."
  },
  {
    icon: <FaPrint className="text-purple-600 text-4xl mb-4" />,
    title: "Printing & Scanning",
    desc: "Affordable printing, photocopying, and scanning services."
  },
  {
    icon: <FaChalkboardTeacher className="text-orange-600 text-4xl mb-4" />,
    title: "Digital Learning",
    desc: "Access online courses, e-learning platforms, and educational tools."
  }
];

function ComputerResearchPage() { // Renamed function
  return (
    <>
      <Navbar /> {/* Add Navbar */}
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-gray-900 to-blue-800 text-white text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold">Computer & Research Center</h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Empowering the community with technology, research, and digital learning opportunities.
          </p>
        </div>

        {/* About Section */}
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">About the Center</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our Computer & Research Center provides access to essential digital resources for
              students, researchers, and the community. Whether you need to browse online,
              conduct academic research, print important documents, or explore digital learning,
              we are here to help you thrive in the modern information age.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We aim to bridge the digital divide by making technology accessible and
              approachable for everyone — from beginners to advanced researchers.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="computer rome image/about the center image.jpg"
              alt="Computer Lab"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
            <p className="text-center text-gray-600 mt-2 mb-10">
              Explore the facilities available at the Computer & Research Center
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">Gallery</h2>
          <p className="text-center text-gray-600 mt-2 mb-10">
            A glimpse of our Computer & Research Center in action
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[              "computer rome image/gallery-1.jpg",
              "computer rome image/gallery-2.jpg",
              "computer rome image/gallery-3.jpg"
            ].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="rounded-xl shadow-md hover:shadow-lg transition"
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-700 text-white text-center py-12">
          <h2 className="text-2xl font-bold">Visit Our Computer & Research Center</h2>
          <p className="mt-2 text-lg">Open Monday – Friday, 9 AM – 5 PM</p>
          <button className="mt-4 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

export default ComputerResearchPage;