import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import ApplicationModal from "../../../components/ApplicationModal";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const changingTexts = ["SMEs", "Apprentices", "Universities"];

  // Text animation effect
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % changingTexts.length
      );
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(textInterval);
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-burgundy/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Connect Talented{" "}
              </h1>
              <div className="h-[64px] mt-4 sm:h-[60px] md:h-[76px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentTextIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-burgundy leading-tight"
                  >
                    {changingTexts[currentTextIndex]}
                  </motion.h1>
                </AnimatePresence>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                For Growth
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl">
                Unlock the potential of your SME by connecting with talented
                recent graduates eager to make a difference
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  toggleModal();
                }}
                className="px-8 py-3 bg-burgundy text-white font-medium rounded-md hover:bg-burgundy/90 transition-colors flex items-center"
              >
                Apply Now <FaArrowRight className="ml-2" />
              </button>
              <a
                href="#about"
                className="px-8 py-3 bg-white text-burgundy font-medium rounded-md border border-burgundy hover:bg-burgundy/5 transition-colors"
              >
                Learn More
              </a>
            </div>
            <ApplicationModal
              isModalOpen={isModalOpen}
              toggleModal={toggleModal}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-white/40 backdrop-blur-md shadow-xl border border-white/50">
              <img
                src="/hero_image.webp"
                alt="Diverse group of graduates"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-white text-xl font-bold">
                  Accessing Diverse Pool of Graduates
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partner Logos with Carousel */}
      <div className="bg-white/70 backdrop-blur-md py-12 mt-8 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8 text-sm font-medium uppercase tracking-wider">
            Trusted by leading institutions across Africa
          </p>

          {/* Logo Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex">
              <motion.div
                className="flex items-center gap-12"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                style={{ paddingRight: "12px" }} // Ensure no gap between loops
              >
                {/* First set of logos */}
                <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                  Logo 1
                </div>
                <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                  Logo 2
                </div>
                <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                  Logo 3
                </div>
                <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                  Logo 4
                </div>
                <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                  Logo 5
                </div>

                {/* Duplicated logos for seamless looping - exact copies */}
                <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                  Logo 1
                </div>
                <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                  Logo 2
                </div>
                <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                  Logo 3
                </div>
                <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                  Logo 4
                </div>
                <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                  Logo 5
                </div>

                {/* Additional duplicates to ensure continuous flow */}
                <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                  Logo 1
                </div>
                <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                  Logo 2
                </div>
                <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                  Logo 3
                </div>
                <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                  Logo 4
                </div>
                <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                  Logo 5
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
