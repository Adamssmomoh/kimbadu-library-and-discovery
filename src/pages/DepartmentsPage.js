import React from "react";
import {
  BookOpen,
  Monitor,
  Baby,
  Brain,
  Building,
  FlaskConical,
} from "lucide-react";
import Navbar from "../components/Navbar"; // Import Navbar

const departments = [
  {
    name: "Main Reading Room",
    icon: <BookOpen className="w-10 h-10 text-blue-600" />,
    desc: "Spacious area with shelves, books, and study tables for everyone.",
  },
  {
    name: "Computer Room",
    icon: <Monitor className="w-10 h-10 text-green-600" />,
    desc: "Access to computers, internet, and digital research tools.",
  },
  {
    name: "Children’s Room",
    icon: <Baby className="w-10 h-10 text-pink-600" />,
    desc: "Colorful and safe space dedicated to young readers.",
  },
  {
    name: "Meditation / Quiet Room",
    icon: <Brain className="w-10 h-10 text-purple-600" />,
    desc: "Peaceful room for private reading and quiet reflection.",
  },
  {
    name: "Office & Admin Space",
    icon: <Building className="w-10 h-10 text-gray-600" />,
    desc: "Small working offices for staff and library administration.",
  },
  {
    name: "Science Section",
    icon: <FlaskConical className="w-10 h-10 text-red-600" />,
    desc: "Dedicated shelves for science and research materials.",
  },
];

// 🔹 Temporary sample images (replace with your real photos later)
const roomImages = [
  {
    name: "Main Reading Room",
    img: "departments image/main reading room.jpg", // Local image
    note: "Our spacious main reading room filled with shelves and tables.",
  },
  {
    name: "Computer Room",
    img: "departments image/computer room.jpg", // Local image
    note: "Equipped with modern computers for study and research.",
  },
  {
    name: "Children’s Room",
    img: "departments image/children room.jpg", // Local image
    note: "A colorful space designed for children to enjoy reading.",
  },
  {
    name: "Meditation Room",
    img: "departments image/medation room.jpg", // Local image
    note: "Quiet meditation space for private reading & reflection.",
  },
  {
    name: "Admin Office",
    img: "departments image/office space.jpg", // Local image
    note: "Small office space for staff and library management.",
  },
  {
    name: "Science Section",
    img: "departments image/science room.jpg", // Local image
    note: "Shelves filled with science books and research materials.",
  },
];

function DepartmentsPage() { // Renamed function
  return (
    <>
      <Navbar /> {/* Add Navbar */}
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-indigo-700 to-indigo-500 text-white text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold">Our Library Spaces</h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Explore the various rooms and departments in Kimbadu Library & Discovery Center
          </p>
        </div>

        {/* Departments Grid */}
        <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">{dept.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{dept.name}</h2>
              <p className="text-gray-600">{dept.desc}</p>
            </div>
          ))}
        </div>

        {/* 🔹 Gallery Section */}
        <div className="bg-white py-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            A Look Inside Our Library
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {roomImages.map((room, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={room.img}
                  alt={room.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{room.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">{room.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DepartmentsPage;
