import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import ApplicationModal from "../../../components/ApplicationModal";
import tesla from "/tesla.svg";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const logos = [
    { path: "/tesla.svg", name: "Tesla" },
    { path: "/google.svg", name: "Google" },
    { path: "/mtn.svg", name: "MTN" },
    { path: "/vival.svg", name: "Vival" },
    { path: "/vodafone.svg", name: "Vodafone" },
  ];

  const changingContent = [
    {
      text: "SMEs",
      image: "/employers1.avif",
    },
    {
      text: "Talented Apprentices",
      image: "/employers3.avif",
    },
  ];

  // Text animation effect
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % changingContent.length
      );
    }, 5000); // Changed from 3000 to 5000 for a slower transition

    return () => clearInterval(textInterval);
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-6 flex flex-col justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[5%] w-96 h-96 bg-blue/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 mb-8 lg:mb-0"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Connect with{" "}
              </h1>
              <div className="sm:my-3 md:my-4 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentTextIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange leading-tight"
                  >
                    {changingContent[currentTextIndex].text}
                  </motion.h1>
                </AnimatePresence>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                For Growth
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl">
                Unlock the potential of your SME by connecting with talented
                recent graduates eager to make a difference. Jumpstart your
                career by gaining real-world or hands-on experience with
                innovative SMEs looking for fresh talent like you.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  toggleModal();
                }}
                className="px-8 py-3 bg-purple text-white font-medium rounded-full hover:bg-purple/90 transition-colors flex items-center"
              >
                Apply Now <FaArrowRight className="ml-2" />
              </button>
              <a
                href="#about"
                className="px-8 py-3 flex items-center bg-transparent text-purple font-medium rounded-full border border-purple hover:bg-purple/5 transition-colors"
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
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden bg-white/40 backdrop-blur-md shadow-xl border border-white/50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentTextIndex}
                  src={changingContent[currentTextIndex].image}
                  alt={`Image representing ${changingContent[currentTextIndex].text}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </AnimatePresence>
              {/* <div className="absolute inset-0 bg-gradient-to-t from-purple/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
                <p className="text-white text-lg sm:text-xl font-bold">
                  Access a Diverse Pool of Graduates
                </p>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partner Logos with Carousel */}
    </div>
  );
};

export default Hero;
