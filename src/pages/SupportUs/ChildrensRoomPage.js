import React from "react";
import SupportPageLayout from "./SupportPageLayout";
import { Baby } from "lucide-react";

const childrensRoomData = {
  heroIcon: <Baby className="w-16 h-16 mx-auto mb-4" />,
  heroTitle: "Support the Children’s Room",
  heroSubtitle: "Help us inspire the youngest readers in Sierra Leone with books, puzzles, and games that spark imagination and learning.",
  heroBackgroundColor: "bg-gradient-to-r from-pink-500 to-yellow-400",
  challengeText: "Our children’s section has very few books, and most of them are old. Our children’s favorite books are those that reflect Sierra Leonean culture—where they can recognize themselves and their stories. Unfortunately, we don’t have enough of these, and there are also very limited puzzles or games to play. This makes it difficult to create a fun and engaging learning environment for the youngest learners.",
  needsList: [
    "Colorful Sierra Leonean children’s storybooks",
    "Educational puzzles and board games",
    "Art and craft supplies (crayons, drawing books, paints)",
    "Donations to buy books locally and support activities",
  ],
  whyItMattersTitle: "Why It Matters",
  whyItMattersText: "Children who grow up surrounded by books and playful learning materials develop a lifelong love for reading. By providing Sierra Leonean stories, puzzles, and art supplies, we make reading fun and culturally relevant. This not only builds literacy but also strengthens their identity and creativity.",
  whyItMattersBackgroundColor: "bg-yellow-100",
  galleryTitle: "Children’s Room Today",
  galleryImages: [
    { src: "support image /children reading.jpg", alt: "Children reading in the library" },
    { src: "support image /children game.jpg", alt: "Few books available for children" },
    { src: "support image /children.jpg", alt: "Children's play corner" },
  ],
  ctaTitle: "Make Reading Fun for Kids",
  ctaText: "You can donate Sierra Leonean children’s books, send puzzles and games, or give financially so we can purchase these items locally. Every small act makes a big difference for our children.",
  ctaBackgroundColor: "bg-pink-200",
  ctaButtons: [
    { text: "📚 Donate Books", color: "bg-pink-600" },
    { text: "🎲 Send Puzzles & Games", color: "bg-pink-600" },
    { text: "💵 Give Financially", color: "bg-pink-600" },
  ],
};

function ChildrensRoomPage() {
  return <SupportPageLayout {...childrensRoomData} />;
}

export default ChildrensRoomPage;