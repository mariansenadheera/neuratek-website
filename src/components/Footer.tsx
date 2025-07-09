import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
export function Footer() {
  return <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img src="/Neura_Tek_Logo_-_Edited.png" alt="NeuraTek Logo" className="h-12 mb-4" />
            <p className="text-gray-400 mb-4 max-w-md">
              NeuraTek is a technology company focused on building solutions
              that empower businesses to make smarter, faster, and more accurate
              decisions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FF6F00] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6F00] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6F00] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6F00] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#FF6F00] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#FF6F00] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#industries" className="text-gray-400 hover:text-[#FF6F00] transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#use-cases" className="text-gray-400 hover:text-[#FF6F00] transition-colors">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#FF6F00] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">London, UK</li>
              <li>
                <a href="mailto:info@neuratek.co.uk" className="text-gray-400 hover:text-[#FF6F00] transition-colors">
                  info@neuratek.co.uk
                </a>
              </li>
              <li>
                <a href="https://www.neuratek.co.uk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF6F00] transition-colors">
                  www.neuratek.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NeuraTek. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-[#FF6F00] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-[#FF6F00] text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
}