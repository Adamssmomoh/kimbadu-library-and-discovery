import React from "react";
import Navbar from "../components/Navbar";
import { Heart, Gift, Users, Book, Globe, Phone } from "lucide-react";

function DonationPage() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-700 to-green-500 text-white text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold">Support Kimbadu Library</h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Together we can build a brighter future for children, youth, and the entire community in Sierra Leone.
          </p>
          <a href="#donate" className="mt-6 inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
            Donate Now
          </a>
        </div>

        {/* Step 1 - Why Support */}
        <div className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Step 1: Why Support Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <Book className="w-8 h-8 text-green-600 mb-3" />
              <p><strong>Books for students:</strong> Giving children access to African and global knowledge.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <Globe className="w-8 h-8 text-green-600 mb-3" />
              <p><strong>Computers & Internet:</strong> Helping over 50+ students Weekly.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <Users className="w-8 h-8 text-green-600 mb-3" />
              <p><strong>Safe Space:</strong> A quiet place for learning, reading, and growth.</p>
            </div>
          </div>
        </div>

        {/* Step 2 - Ways to Support */}
        <div id="donate" className="bg-green-100 py-12">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Step 2: Ways to Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <Heart className="w-8 h-8 text-red-500 mb-3" />
                <h3 className="font-bold mb-2">Financial Support</h3>
                <p className="text-gray-600">Donate locally or internationally through bank, mobile money, or PayPal.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <Gift className="w-8 h-8 text-purple-500 mb-3" />
                <h3 className="font-bold mb-2">In-Kind Support</h3>
                <p className="text-gray-600">Books, computers, science kits, or children’s games are all welcome.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <Users className="w-8 h-8 text-blue-500 mb-3" />
                <h3 className="font-bold mb-2">Volunteer</h3>
                <p className="text-gray-600">Support with your time, skills, or spreading the word.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 - How to Give */}
        <div className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Step 3: How to Give</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="font-bold mb-2 text-green-700">🇸🇱 Local Donations (Sierra Leone)</h3>
              <p className="text-gray-700">Orange Money / Africell Money (+232 33-990-910, +232 76-530-520)</p>
             
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="font-bold mb-2 text-green-700">🌍 International Donations</h3>
              <p className="text-gray-700">GoFundMe: <a href="https://www.gofundme.com/f/support-kimbadu-librarys-sustainable-future?attribution_id=sl:314f2c41-f520-43dd-8902-65def212cf2a&lang=en_US&ts=1756127393&utm_campaign=man_sharesheet_dash&utm_content=amp13_t1&utm_medium=customer&utm_source=copy_link" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GoFundMe Link</a></p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="font-bold mb-2 text-green-700">📦 In-Kind Donations</h3>
              <p className="text-gray-700">For books, supplies, or equipment, please contact us to arrange delivery.</p>
              <p className="text-gray-700 flex items-center gap-2"><Phone className="w-4 h-4" /> +232 33-990-910, +232 76-530-520</p>
            </div>
          </div>
        </div>

        {/* Step 4 - After You Give */}
        <div className="bg-green-50 py-12">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Step 4: After You Give</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              We’ll send you a thank-you message and updates about how your donation is helping the library.  
            </p>
          </div>
        </div>

        {/* Step 5 - Call to Action */}
        <div className="text-center py-12 bg-green-200">
          <Heart className="w-12 h-12 text-green-700 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Every Gift Counts</h2>
          <p className="mt-2 text-gray-700 max-w-xl mx-auto">
            No gift is too small — from a single book to sponsoring equipment, your kindness makes a real difference.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
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

export default DonationPage;