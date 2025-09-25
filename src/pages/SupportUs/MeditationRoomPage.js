import React from "react";
import Navbar from "../../components/Navbar";
import { Users, AlertCircle, Heart } from "lucide-react";

function MeditationRoomPage() { // Renamed function
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-center py-16">
          <Users className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold">Support the Meditation & Quiet Room</h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            A peaceful space where students and community members can relax, reflect, and
            recharge. Help us make it welcoming and supportive.
          </p>
        </div>

        {/* Problem & Needs */}
        <div className="max-w-5xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-red-500" />
              The Challenge
            </h2>
            <p className="text-gray-700 mb-4">
              Our meditation and quiet room is meant to be a calm space, but it currently lacks
              proper lighting, comfortable seating, and the right resources. Students and
              visitors don’t have a relaxing place to read, meditate, or reflect.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">We Need Your Help</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Meditation and mindfulness books</li>
              <li>Cushions, mats, and soft seating</li>
              <li>Warm, soft lighting and lamps</li>
              <li>Donations to help furnish the space</li>
            </ul>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="bg-indigo-100 py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Why It Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              In a busy and sometimes stressful world, having a dedicated quiet space for
              meditation and reflection is important for mental health and well-being. By
              improving this room, we give children and adults a safe place to relax, read,
              and regain focus.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="max-w-6xl mx-auto py-12 px-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
            Meditation Room Today
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img
              src="support image /meadtion children.jpg"
              alt="Current meditation room setup"
              className="rounded-lg shadow-md"
            />
            <img
              src="support image /medation.jpg"
              alt="Room needing soft lighting"
              className="rounded-lg shadow-md"
            />
            <img
              src="support image /medation room shrlf.jpg"
              alt="Space lacking cushions and mats"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 bg-blue-200">
          <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Help Us Build a Peaceful Space</h2>
          <p className="mt-2 text-gray-700 max-w-xl mx-auto">
            You can donate mindfulness books, cushions, or lighting — or give financially so
            we can create a welcoming meditation room for our community.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
              📚 Donate Meditation Books
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
              🪔 Provide Lighting & Cushions
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
              💵 Give Financially
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeditationRoomPage;
