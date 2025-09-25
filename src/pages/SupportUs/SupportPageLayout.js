import React from "react";
import Navbar from "../../components/Navbar";
import { Heart, AlertCircle } from "lucide-react";

function SupportPageLayout({
  heroIcon,
  heroTitle,
  heroSubtitle,
  heroBackgroundColor,
  challengeTitle = "The Challenge",
  challengeIcon = <AlertCircle className="w-6 h-6 text-red-500" />,
  challengeText,
  needsTitle = "We Need Your Help",
  needsList,
  whyItMattersTitle,
  whyItMattersText,
  whyItMattersBackgroundColor,
  galleryTitle,
  galleryImages,
  ctaTitle,
  ctaText,
  ctaBackgroundColor,
  ctaButtons,
}) {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className={`relative ${heroBackgroundColor} text-white text-center py-16`}>
          {heroIcon}
          <h1 className="text-4xl md:text-5xl font-bold">{heroTitle}</h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            {heroSubtitle}
          </p>
        </div>

        {/* Problem & Needs */}
        <div className="max-w-5xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4 flex items-center gap-2">
              {challengeIcon}
              {challengeTitle}
            </h2>
            <p className="text-gray-700 mb-4">{challengeText}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">{needsTitle}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {needsList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why It Matters */}
        {whyItMattersTitle && (
          <div className={`${whyItMattersBackgroundColor} py-12 px-6`}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-700 mb-4">{whyItMattersTitle}</h2>
              <p className="text-gray-700 leading-relaxed">{whyItMattersText}</p>
            </div>
          </div>
        )}

        {/* Image Gallery */}
        <div className="max-w-6xl mx-auto py-12 px-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            {galleryTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center py-12 ${ctaBackgroundColor}`}>
          <Heart className="w-12 h-12 text-gray-700 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">{ctaTitle}</h2>
          <p className="mt-2 text-gray-700 max-w-xl mx-auto">{ctaText}</p>
          <div className="mt-6 flex justify-center gap-4">
            {ctaButtons.map((button, index) => (
              <button key={index} className={`${button.color} hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-lg transition`}>
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportPageLayout;
