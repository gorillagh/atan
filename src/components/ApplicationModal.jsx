import React from "react";
import {
  FaArrowRight,
  FaGraduationCap,
  FaBuilding,
  FaUniversity,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
const ApplicationModal = ({ isModalOpen, toggleModal }) => {
  // Animation variants for modal
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  // Options for the Apply Now modal
  const applyOptions = [
    {
      id: "apprentice",
      title: "Apprentice",
      description: "Start your journey as a technical apprentice",
      path: "https://docs.google.com/forms/d/1QqaMzo8JNZzq_HW-NbF4Whykbf1BuKmKTRXm9qEC2N8/viewform?ts=6798a257&edit_requested=true",
      icon: <FaGraduationCap size={24} className="text-burgundy" />,
    },
    {
      id: "employer",
      title: "Employer",
      path: "https://docs.google.com/forms/d/e/1FAIpQLSfLAqoxl6C4PRUGSyvGPhcd3vA0N_nZ-M4O1WmTnwy8jaYNsQ/viewform",
      description: "Partner with us to find talented apprentices",
      icon: <FaBuilding size={24} className="text-burgundy" />,
    },
    {
      id: "university",
      title: "University",
      path: "https://docs.google.com/forms/d/e/1FAIpQLSfLAqoxl6C4PRUGSyvGPhcd3vA0N_nZ-M4O1WmTnwy8jaYNsQ/viewform",
      description: "Collaborate to enhance technical education",
      icon: <FaUniversity size={24} className="text-burgundy" />,
    },
  ];
  return (
    <div>
      {/* Apply Now Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden"
            >
              <div className="p-5 bg-burgundy/5 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">
                  Choose Application Type
                </h3>
                <button
                  onClick={toggleModal}
                  className="p-2 rounded-full hover:bg-burgundy/10 text-gray-700"
                >
                  <IoMdClose size={20} />
                </button>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Select how you'd like to be part of the Africa Technical
                  Apprentice Network:
                </p>

                <div className="space-y-3">
                  {applyOptions.map((option) => (
                    <motion.a
                      key={option.id}
                      href={`${option.path}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={toggleModal}
                      target="_blank"
                      className="block p-4 border border-gray-200 rounded-lg hover:border-burgundy/30 hover:bg-burgundy/5 transition-all flex items-start gap-2 sm:gap-4"
                    >
                      <div className="mt-1">{option.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {option.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {option.description}
                        </p>
                      </div>
                      <FaArrowRight className="ml-auto text-burgundy self-center opacity-70 flex-shrink-0" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ApplicationModal;
