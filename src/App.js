import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LiteracyProgramPage from "./pages/LiteracyProgramPage"; // Uncommented

import BooksCatalogPage from "./pages/BooksCatalogPage";
import ComputerResearchPage from "./pages/ComputerResearchPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import SupportUsPage from "./pages/SupportUsPage";
import MainReadingRoomPage from "./pages/SupportUs/MainReadingRoomPage";
import ComputerResearchCenterPage from "./pages/SupportUs/ComputerResearchCenterPage";
import ChildrensRoomPage from "./pages/SupportUs/ChildrensRoomPage";
import MeditationRoomPage from "./pages/SupportUs/MeditationRoomPage";
import ScienceSectionPage from "./pages/SupportUs/ScienceSectionPage";
import LibraryOfficeAdminPage from "./pages/SupportUs/LibraryOfficeAdminPage";
import DonatePage from "./pages/DonatePage"; // Import DonatePage
import AboutDeveloperPage from "./pages/AboutDeveloperPage"; // Import AboutDeveloperPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/literacy-program" element={<LiteracyProgramPage />} /> {/* Uncommented */}
        <Route path="/books-catalog" element={<BooksCatalogPage />} />
        <Route path="/computer-research" element={<ComputerResearchPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/support-us" element={<SupportUsPage />} />
        <Route path="/support-us/main-reading-room" element={<MainReadingRoomPage />} />
        <Route path="/support-us/computer-research-center" element={<ComputerResearchCenterPage />} />
        <Route path="/support-us/childrens-room" element={<ChildrensRoomPage />} />
        <Route path="/support-us/meditation-room" element={<MeditationRoomPage />} />
        <Route path="/support-us/science-section" element={<ScienceSectionPage />} />
        <Route path="/support-us/library-office-admin" element={<LibraryOfficeAdminPage />} />
        <Route path="/donate" element={<DonatePage />} /> {/* Add route for DonatePage */}
        <Route path="/about-developer" element={<AboutDeveloperPage />} /> {/* Add route for AboutDeveloperPage */}
      </Routes>
    </Router>
  );
}

export default App;
