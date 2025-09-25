import React from "react";
import SupportPageLayout from "./SupportPageLayout";
import { Book } from "lucide-react";

const mainReadingRoomData = {
  heroIcon: <Book className="w-16 h-16 mx-auto mb-4" />,
  heroTitle: "Support the Main Reading Room",
  heroSubtitle: "Help us transform the heart of Kimbadu Library into a comfortable and inspiring place for all — with special focus on Sierra Leonean books for our children.",
  heroBackgroundColor: "bg-gradient-to-r from-green-700 to-green-500",
  challengeText: "We don’t have enough chairs and tables to accommodate the growing number of visitors in our main reading room, making it difficult for students and community members to study comfortably for long hours. The lighting is poor, and we also lack sufficient space to house our expanding collection of Sierra Leonean books.",
  needsList: [
    "New chairs and study tables for students",
    "Better lighting to make reading easier",
    "More shelves for Sierra Leone books",
    "Funding to buy local Sierra Leone literature",
  ],
  whyItMattersTitle: "Why It Matters",
  whyItMattersText: "The Main Reading Room is the heart of our library. It is where children discover the joy of reading, where youth prepare for exams, and where adults come to learn. By focusing on Sierra Leonean books, we help young people connect with their culture and identity while encouraging lifelong learning.",
  whyItMattersBackgroundColor: "bg-green-100",
  galleryTitle: "Inside the Main Reading Room",
  galleryImages: [
    { src: "/support image /main reading chear.jpg", alt: "Reading Room Chairs" },
    { src: "/support image /main room.jpg", alt: "Bookshelves with Sierra Leone books" },
    { src: "/support image /main room library .jpg", alt: "Students studying" },
  ],
  ctaTitle: "Be Part of the Change",
  ctaText: "You can help us create a better reading environment by donating books, furniture, or funds. Every contribution counts!",
  ctaBackgroundColor: "bg-green-200",
  ctaButtons: [
    { text: "📚 Donate Sierra Leone Books", color: "bg-green-600" },
    { text: "🪑 Sponsor Furniture", color: "bg-green-600" },
    { text: "💵 Give Financially", color: "bg-green-600" },
  ],
};

function MainReadingRoomPage() {
  return <SupportPageLayout {...mainReadingRoomData} />;
}

export default MainReadingRoomPage;
