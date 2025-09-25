import React from "react";
import { 
  Heart, Book, Monitor, Baby, FlaskConical, Users, PenTool, AlertCircle 
} from "lucide-react";
import Navbar from "../components/Navbar"; 
import { Link } from "react-router-dom"; 

function SupportUsPage() {
  const supportAreas = [
    {
      name: "Main Reading Room",
      icon: Book,
      challenge: "The chairs and tables are old and uncomfortable, making long reading sessions difficult.",
      need: "We need new furniture and better lighting to create a more welcoming study space.",
      urgency: "Important",
      path: "/support-us/main-reading-room"
    },
    {
      name: "Computer & Research Center",
      icon: Monitor,
      challenge: "Only a few computers are working, and many are outdated.",
      need: "With more computers, we can provide digital access for over 50+ students daily.",
      urgency: "Urgent",
      path: "/support-us/computer-research-center"
    },
    {
      name: "Children’s Room",
      icon: Baby,
      challenge: "Limited colorful books and educational materials for children.",
      need: "We need storybooks, learning games, and art materials to inspire young readers.",
      urgency: "Important",
      path: "/support-us/childrens-room"
    },
    {
      name: "Meditation / Quiet Room",
      icon: Users,
      challenge: "The room lacks proper lighting and comfortable seating for quiet reading.",
      need: "Support us with cushions, soft lighting, and books for mindfulness.",
      urgency: "Future Goal",
      path: "/support-us/meditation-room"
    },
    {
      name: "Science Section",
      icon: FlaskConical,
      challenge: "Outdated science textbooks and lack of basic science kits.",
      need: "We need updated science books, charts, and simple lab kits for students.",
      urgency: "Urgent",
      path: "/support-us/science-section"
    },
    {
      name: "Library Office & Admin",
      icon: PenTool,
      challenge: "We often run short on supplies like printers, paper, and filing materials.",
      need: "Help us with admin tools to keep our library running smoothly.",
      urgency: "Important",
      path: "/support-us/library-office-admin"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-700 to-green-500 text-white text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold">Support Kimbadu Library</h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Help us create a better learning environment for children, youth, and adults.  
            Your contribution makes a real difference.
          </p>
        </div>

        {/* Challenges by Department */}
        <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportAreas.map((area, idx) => (
            <Link
              key={idx}
              to={area.path}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300 flex flex-col justify-between"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <area.icon className="w-10 h-10 text-green-600" />
                  <h2 className="text-xl font-bold">{area.name}</h2>
                </div>
                {/* Urgency Badge */}
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    area.urgency === "Urgent"
                      ? "bg-red-100 text-red-700"
                      : area.urgency === "Important"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {area.urgency}
                </span>
              </div>

              {/* Challenge */}
              <p className="text-gray-600 mb-3 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-500 mt-1" />
                <span><em>{area.challenge}</em></span>
              </p>

              {/* Need */}
              <p className="text-gray-700">
                <span className="font-semibold text-green-600">We Need:</span> {area.need}
              </p>

              {/* Learn More */}
              <div className="mt-6">
                <span className="inline-block mt-4 text-green-700 font-medium hover:underline">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 bg-green-100">
          <Heart className="w-12 h-12 text-green-700 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">You Can Make a Difference</h2>
          <p className="mt-2 text-gray-700 max-w-xl mx-auto">
            Support us with books, equipment, or financial contributions.  
            Every act of kindness helps us move forward.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
              📚 Donate Books
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
              💻 Sponsor Equipment
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
              💵 Give Financially
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportUsPage;
