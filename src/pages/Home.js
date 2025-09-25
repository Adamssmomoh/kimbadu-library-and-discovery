import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LiteracyProgram from "../components/LiteracyProgram";
import BooksCatalog from "../components/BooksCatalog"; // Import BooksCatalog
import Departments from "../components/Departments"; // Import Departments
import UpcomingEvents from "../components/UpcomingEvents";
import Donate from "../components/Donate";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LiteracyProgram />
      <BooksCatalog /> {/* Add BooksCatalog */}
      <Departments /> {/* Add Departments */}
      <UpcomingEvents />
      <Donate />
      <Footer />
    </>
  );
}

export default Home;
