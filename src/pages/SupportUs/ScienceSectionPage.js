import React from "react";
import Navbar from "../../components/Navbar";
import { FlaskConical, AlertCircle, Heart } from "lucide-react";

function ScienceSectionPage() { // Renamed function
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-purple-700 to-indigo-600 text-white text-center py-16">
          <FlaskConical className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold">Support the Science Section</h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Science inspires curiosity, discovery, and innovation.  
            Help us equip our library’s science section with the tools and books our students need.
          </p>
        </div>

        {/* Challenge & Needs */}
        <div className="max-w-5xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-red-500" />
              The Challenge
            </h2>
            <p className="text-gray-700 mb-4">
              Our science section has very few updated textbooks and lacks basic lab kits. 
              Without proper learning materials, children struggle to understand key scientific 
              concepts in biology, chemistry, and physics.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">We Need Your Help</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Updated science textbooks (biology, chemistry, physics)</li>
              <li>Educational posters and charts</li>
              <li>Basic lab kits for hands-on experiments</li>
              <li>Donations to purchase learning resources</li>
            </ul>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="bg-purple-100 py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-700 mb-4">Why It Matters</h2>
            <p className="text-gray-700 leading-relaxed">
            Science education helps children think critically and prepares them for future careers in medicine, technology, and research. We are excited about our new microscope and would love to have more science tools to share. With the right resources, we can inspire Sierra Leone’s next generation of scientists and innovators.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="max-w-6xl mx-auto py-12 px-6">
          <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
            Science Section Today
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img
              src="support image /science.jpg"
              alt="Outdated science textbooks"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="support image /science room area.jpg"
              alt="Students using old resources"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src="support image /science-reading.jpg"
              alt="Empty shelves needing science books"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 bg-purple-200">
          <Heart className="w-12 h-12 text-purple-700 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Equip the Next Generation of Scientists</h2>
          <p className="mt-2 text-gray-700 max-w-xl mx-auto">
            You can donate science books, charts, or lab kits — or give financially so we can 
            improve the science section for our students.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg shadow-lg transition">
              📚 Donate Science Books
            </button>
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg shadow-lg transition">
              🔬 Provide Lab Kits
            </button>
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg shadow-lg transition">
              💵 Support Financially
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScienceSectionPage;
