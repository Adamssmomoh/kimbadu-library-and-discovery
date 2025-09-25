import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-8 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="home image/KLDC logo .jpg" alt="Kimbadu Library Logo" className="h-8 w-auto" /> {/* Actual logo */}
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-sm">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/literacy-program" className="hover:text-yellow-400">Literacy Program</Link></li>
          <li><Link to="/books-catalog" className="hover:text-yellow-400">Books & Catalog</Link></li>
          <li><Link to="/computer-research" className="hover:text-yellow-400">Computer & Research Center</Link></li>
          <li><Link to="/departments" className="hover:text-yellow-400">Departments</Link></li>
          <li><Link to="/support-us" className="hover:text-yellow-400">Support Us</Link></li>
        </ul>

        {/* Donate Button */}
        <Link to="/donate" className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500">Donate</Link>
        <Link to="/about-developer" className="hidden md:block bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 ml-4">Let's Build Yours</Link>

        {/* Hamburger Menu for small screens */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 right-0 h-[fit-content] w-1/2 !important bg-gray-900 bg-opacity-95 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 text-white">
          <X size={32} />
        </button>
        <ul className="flex flex-col items-end gap-4 text-xl pr-8 pt-8">
            <li className="w-full text-right pb-4 border-b border-gray-700"><Link to="/" className="hover:text-yellow-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li className="w-full text-right pb-4 border-b border-gray-700"><Link to="/books-catalog" className="hover:text-yellow-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Books & Catalog</Link></li>
            <li className="w-full text-right pb-4 border-b border-gray-700"><Link to="/literacy-program" className="hover:text-yellow-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Literacy Program</Link></li>
            <li className="w-full text-right pb-4 border-b border-gray-700"><Link to="/computer-research" className="hover:text-yellow-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Computer & Research Center</Link></li>
            <li className="w-full text-right pb-4 border-b border-gray-700"><Link to="/departments" className="hover:text-yellow-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Departments</Link></li>
            <li className="w-full text-right pb-4 border-b border-gray-700">
              <Link to="/support-us" className="hover:text-yellow-400 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Support Us</Link>
            </li>
            <li className="w-full text-right pb-4 border-b border-gray-700">
              <Link to="/donate" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200 mt-4 w-full">Donate</Link>
            </li>
            <li className="w-full text-right pb-4 border-b border-gray-700">
              <Link to="/about-developer" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 mt-4 w-full">Let's Build Yours</Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;
