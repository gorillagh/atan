// src/sections/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-burgundy/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Bridging the gap between{" "}
              <span className="text-burgundy">education and employment</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              The Africa Technical Apprentice Network connects employers,
              universities, and apprentices to foster technical skills
              development and create employment opportunities across Africa.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="px-8 py-3 bg-burgundy text-white font-medium rounded-md hover:bg-burgundy/90 transition-colors flex items-center"
              >
                Apply Now <FaArrowRight className="ml-2" />
              </a>
              <a
                href="#about"
                className="px-8 py-3 bg-white text-burgundy font-medium rounded-md border border-burgundy hover:bg-burgundy/5 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-white/40 backdrop-blur-md shadow-xl border border-white/50">
              {/* Replace with actual image of African apprentices in a tech environment */}
              <div className="absolute inset-0 bg-[url('/api/placeholder/600/500')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-white text-xl font-bold">
                  Transforming Africa's tech landscape
                </p>
                <p className="text-white/90 mt-2">
                  Connecting talent with opportunity
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="bg-white/70 backdrop-blur-md py-12 mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8 text-sm font-medium uppercase tracking-wider">
            Trusted by leading institutions across Africa
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {/* Replace with actual partner logos */}
            <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center">
              Logo 1
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center">
              Logo 2
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center">
              Logo 3
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center">
              Logo 4
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center">
              Logo 5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
