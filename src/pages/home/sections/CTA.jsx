import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import ApplicationModal from "../../../components/ApplicationModal";

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] right-[5%] w-80 h-80 bg-burgundy/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[5%] left-[10%] w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden relative"
        >
          {/* Main CTA Card with Glass Effect */}
          <div className="relative bg-gradient-to-r from-burgundy/80 to-burgundy p-8 sm:p-12 md:p-16 backdrop-blur-lg overflow-hidden">
            {/* Glass overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

            {/* Glass decorative elements */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full backdrop-blur-sm"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full backdrop-blur-md"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left max-w-xl">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
                >
                  Ready to{" "}
                  <span className="text-white underline decoration-4 decoration-white/30">
                    Transform
                  </span>{" "}
                  Your Future?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-6 text-lg sm:text-xl text-white/90 max-w-lg"
                >
                  Whether you're a talented graduate seeking experience or an
                  SME looking for innovation, ATAN connects you to opportunities
                  that matter.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
              >
                <button
                  onClick={toggleModal}
                  className="px-8 py-4 bg-white text-burgundy font-semibold rounded-full hover:bg-white/90 transition-colors flex items-center justify-center shadow-lg group"
                >
                  Apply Now
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#contact"
                  className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="w-14 h-14 bg-burgundy/10 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-burgundy"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              For Employers
            </h3>
            <p className="text-gray-600">
              Access talented technical graduates eager to make an impact at
              your company.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="w-14 h-14 bg-burgundy/10 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-burgundy"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              For Graduates
            </h3>
            <p className="text-gray-600">
              Launch your career with meaningful experience and professional
              development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="w-14 h-14 bg-burgundy/10 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-burgundy"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              For Universities
            </h3>
            <p className="text-gray-600">
              Partner with us to provide your graduates with pathways to
              meaningful employment.
            </p>
          </motion.div>
        </div>
      </div>

      <ApplicationModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </section>
  );
};

export default CTA;
