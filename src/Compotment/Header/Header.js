import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-green-700">
          Turf & Timber
        </div>

        {/* Center: Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-green-700">Home</a>
          <a href="#" className="hover:text-green-700">Blog</a>
          <a href="#" className="hover:text-green-700">Services</a>
          <a href="#" className="hover:text-green-700">About Us</a>
          <a href="#" className="hover:text-green-700">Contact Us</a>
        </nav>

        {/* Right: Button + Phone (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-gray-700 font-semibold">
            📞 +49 123 456 789
          </span>
          <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition">
            Get Costing
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            <a href="#" className="hover:text-green-700">Home</a>
            <a href="#" className="hover:text-green-700">Blog</a>
            <a href="#" className="hover:text-green-700">Services</a>
            <a href="#" className="hover:text-green-700">About Us</a>
            <a href="#" className="hover:text-green-700">Contact Us</a>

            <div className="pt-4 border-t">
              <p className="mb-2 font-semibold">📞 +49 123 456 789</p>
              <button className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition">
                Get Costing
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
