// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <motion.a
                href="/"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <span className="text-2xl font-bold text-burgundy">ATAN</span>
                <span className="ml-2 text-sm text-gray-600">
                  Africa Technical Apprentice Network
                </span>
              </motion.a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a
                href="#"
                className="text-gray-800 hover:text-burgundy px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-800 hover:text-burgundy px-3 py-2 text-sm font-medium transition-colors"
              >
                About ATAN
              </a>
              <a
                href="#employers"
                className="text-gray-800 hover:text-burgundy px-3 py-2 text-sm font-medium transition-colors"
              >
                For Employers
              </a>
              <a
                href="#universities"
                className="text-gray-800 hover:text-burgundy px-3 py-2 text-sm font-medium transition-colors"
              >
                For Universities
              </a>
              <a
                href="#apprentices"
                className="text-gray-800 hover:text-burgundy px-3 py-2 text-sm font-medium transition-colors"
              >
                For Apprentices
              </a>
              <a
                href="#contact"
                className="bg-burgundy text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-burgundy/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-burgundy focus:outline-none"
            >
              {isOpen ? (
                <IoMdClose size={24} />
              ) : (
                <HiOutlineMenuAlt3 size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-burgundy/10 hover:text-burgundy"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-burgundy/10 hover:text-burgundy"
            >
              About ATAN
            </a>
            <a
              href="#employers"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-burgundy/10 hover:text-burgundy"
            >
              For Employers
            </a>
            <a
              href="#universities"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-burgundy/10 hover:text-burgundy"
            >
              For Universities
            </a>
            <a
              href="#apprentices"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-burgundy/10 hover:text-burgundy"
            >
              For Apprentices
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-burgundy text-white hover:bg-burgundy/90"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
