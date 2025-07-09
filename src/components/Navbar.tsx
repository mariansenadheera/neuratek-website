import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img src="/Neura_Tek_Logo_-_Edited.png" alt="NeuraTek Logo" className="h-10 sm:h-12" />
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-black hover:text-[#FF6F00] font-medium transition-colors">
              About
            </a>
            <a href="#services" className="text-black hover:text-[#FF6F00] font-medium transition-colors">
              Services
            </a>
            <a href="#industries" className="text-black hover:text-[#FF6F00] font-medium transition-colors">
              Industries
            </a>
            <a href="#use-cases" className="text-black hover:text-[#FF6F00] font-medium transition-colors">
              Use Cases
            </a>
            <a href="#contact" className="bg-[#FF6F00] text-white px-5 py-2 rounded-md hover:bg-[#FF8F00] transition-colors">
              Contact Us
            </a>
          </nav>
          {/* Mobile menu button */}
          <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <nav className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <a href="#about" className="block text-black hover:text-[#FF6F00] font-medium transition-colors py-2">
              About
            </a>
            <a href="#services" className="block text-black hover:text-[#FF6F00] font-medium transition-colors py-2">
              Services
            </a>
            <a href="#industries" className="block text-black hover:text-[#FF6F00] font-medium transition-colors py-2">
              Industries
            </a>
            <a href="#use-cases" className="block text-black hover:text-[#FF6F00] font-medium transition-colors py-2">
              Use Cases
            </a>
            <a href="#contact" className="block bg-[#FF6F00] text-white px-5 py-2 rounded-md hover:bg-[#FF8F00] transition-colors text-center">
              Contact Us
            </a>
          </div>
        </nav>}
    </header>;
}