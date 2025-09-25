import React from "react";
import SupportPageLayout from "./SupportPageLayout";
import { PenTool } from "lucide-react";

const officeAdminData = {
  heroIcon: <PenTool className="w-16 h-16 mx-auto mb-4" />,
  heroTitle: "Support Library Office & Admin",
  heroSubtitle: "Behind every great library is a team working tirelessly to keep it running. Help us provide supplies and fair stipends for our dedicated staff.",
  heroBackgroundColor: "bg-gradient-to-r from-gray-700 to-gray-500",
  challengeText: "Our office runs on limited resources. We often run short on printers, ink, paper, and basic filing supplies. More importantly, our dedicated staff receive very little financial support, even though they work hard to keep the library organized and open for students daily.",
  needsList: [
    "Printer, ink, paper, and office supplies",
    "Filing cabinets and organizational materials",
    "Monthly stipends/salaries for library staff",
    "Financial donations to sustain daily operations",
  ],
  whyItMattersTitle: "Why It Matters",
  whyItMattersText: "Our library staff are the backbone of Kimbadu Library. They welcome children, organize resources, and ensure the space is safe and ready for learning. By supporting the office and admin team, you’re helping keep the entire library running smoothly for the community.",
  whyItMattersBackgroundColor: "bg-gray-100",
  galleryTitle: "Library Office & Admin Today",
  galleryImages: [
    { src: "support image /office area.jpg", alt: "Printer and office desk" },
    { src: "support image /office room.jpg", alt: "Staff workspace" },
    { src: "support image /office section.jpg", alt: "Office supplies shelf" },
  ],
  ctaTitle: "Support the People Who Keep Us Running",
  ctaText: "Your support ensures our office has the supplies it needs and that our staff can receive fair stipends for their hard work.",
  ctaBackgroundColor: "bg-gray-200",
  ctaButtons: [
    { text: "🖨️ Donate Office Supplies", color: "bg-gray-700" },
    { text: "👩‍💼 Sponsor Staff Stipends", color: "bg-gray-700" },
    { text: "💵 Give Financially", color: "bg-gray-700" },
  ],
};

function LibraryOfficeAdminPage() {
  return <SupportPageLayout {...officeAdminData} />;
}

export default LibraryOfficeAdminPage;