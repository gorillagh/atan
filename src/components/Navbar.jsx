// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import ApplicationModal from "./ApplicationModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close the mobile menu when a link is clicked
  const handleLinkClick = (linkId) => {
    setIsOpen(false);
    setActiveLink(linkId);
  };

  // Toggle Apply Now modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Detect scrolling for navbar background
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");

      // Add a buffer to give some space before triggering the active state
      const buffer = 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - buffer;
        const sectionId = section.getAttribute("id");

        if (window.scrollY >= sectionTop) {
          setActiveLink(sectionId);
        }
      });

      // If at the top of the page, set active to home
      if (window.scrollY < 100) {
        setActiveLink("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links data
  const navLinks = [
    { id: "home", text: "Home", href: "#" },
    { id: "about", text: "About", href: "#about" },
    { id: "employers", text: "Employers", href: "#employers" },
    { id: "apprentices", text: "Apprentices", href: "#apprentices" },
    { id: "universities", text: "Universities", href: "#universities" },
    { id: "contact", text: "Contact", href: "#contact" },
  ];

  // Animation variants for the sidebar
  const sidebarVariants = {
    closed: {
      x: "100%",
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  // Animation variants for the overlay
  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <a href="#" className="flex flex-col items-start">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-burgundy to-burgundy/80 bg-clip-text text-transparent">
                  ATAN
                </span>
                <span className="text-sm italic sm:text-xs  tracking-tight bg-gradient-to-r from-burgundy to-burgundy/80 bg-clip-text text-transparent">
                  Africa Technical Apprentice Network
                </span>
              </a>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:block ml-auto">
              <div className="flex items-center space-x-0 sm:space-x-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative px-2 sm:px-3 lg:px-4 py-2 text-sm rounded-md font-medium transition-colors ${
                      activeLink === link.id
                        ? "text-burgundy"
                        : "text-gray-700 hover:text-burgundy"
                    }`}
                  >
                    {link.text}
                    {activeLink === link.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                ))}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleModal}
                  className="ml-1 sm:ml-2 px-3 sm:px-4 lg:px-5 py-2 bg-burgundy text-white text-sm font-medium rounded-md hover:bg-burgundy/90 transition-all shadow-md hover:shadow-lg flex items-center"
                >
                  Apply <span className="hidden sm:inline ml-1">Now</span>{" "}
                  <FaChevronDown className="ml-1 sm:ml-2 text-xs" />
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-burgundy focus:outline-none"
                aria-label="Toggle menu"
              >
                <HiOutlineMenuAlt3 size={28} />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden"
              transition={{ duration: 0.3 }}
            />

            {/* Side Drawer */}
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-xs bg-white shadow-xl z-50 md:hidden flex flex-col"
            >
              <div className="flex justify-between items-center p-5 border-b border-gray-100">
                <div className="text-xl font-bold bg-gradient-to-r from-burgundy to-burgundy/80 bg-clip-text text-transparent">
                  ATAN
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <IoMdClose size={24} />
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                <div className="px-4 space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => handleLinkClick(link.id)}
                      className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                        activeLink === link.id
                          ? "bg-burgundy/10 text-burgundy font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.text}
                      {activeLink === link.id && (
                        <motion.div
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="w-1.5 h-1.5 rounded-full bg-burgundy"
                        />
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t border-gray-100">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    toggleModal();
                  }}
                  className="w-full py-3 bg-burgundy text-white font-medium rounded-md hover:bg-burgundy/90 transition-colors flex items-center justify-center shadow-md"
                >
                  Apply Now <FaChevronDown className="ml-1 text-xs" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Apply Now Modal */}
      <ApplicationModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
};

export default Navbar;
