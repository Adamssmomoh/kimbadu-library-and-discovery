import React from "react";
import SupportPageLayout from "./SupportPageLayout";
import { Monitor } from "lucide-react";

const computerResearchData = {
  heroIcon: <Monitor className="w-16 h-16 mx-auto mb-4" />,
  heroTitle: "Support the Computer & Research Center",
  heroSubtitle: "Digital access is key to education. Help us repair, upgrade, and expand our Computer & Research Center for students in Sierra Leone.",
  heroBackgroundColor: "bg-gradient-to-r from-green-700 to-green-500",
  challengeTitle: "Current Challenges",
  challengeText: "Only 4 out of 6 computers are working, and the others are outdated and slow. The Starlink internet is costly to maintain, and we have no working printer for students or staff.",
  needsTitle: "How You Can Help",
  needsList: [
    "Donate or sponsor modern computers to replace our 4 outdated ones.",
    "Provide a reliable printer for student assignments.",
    "Sponsor our monthly Starlink internet subscription for smooth learning.",
    "Support with funds to help cover staff salaries and office supplies.",
  ],
  whyItMattersTitle: null, // This page doesn't have a "Why it matters" section
  galleryTitle: "A Glimpse of the Center",
  galleryImages: [
    { src: "computer rome image/gallery-1.jpg", alt: "Computer Room" },
    { src: "computer rome image/gallery-2.jpg", alt: "Old Computers" },
    { src: "computer rome image/gallery-3.jpg", alt: "Students" },
  ],
  ctaTitle: "Support the Computer Center",
  ctaText: "Your contribution will provide the technology and resources students need to succeed in the digital age.",
  ctaBackgroundColor: "bg-green-100",
  ctaButtons: [
    { text: "💻 Donate Equipment", color: "bg-green-600" },
    { text: "💵 Give Financially", color: "bg-green-600" },
  ],
};

function ComputerResearchCenterPage() {
  return <SupportPageLayout {...computerResearchData} />;
}

export default ComputerResearchCenterPage;
