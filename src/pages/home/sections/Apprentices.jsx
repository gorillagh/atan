import React, { useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaHandsHelping,
  FaNetworkWired,
  FaArrowRight,
} from "react-icons/fa";
import { BsCheck2Circle, BsX } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Apprentices = () => {
  const [showModal, setShowModal] = useState(false);

  const apprenticesContent = {
    id: "apprentices",
    title: "Graduates",
    icon: FaGraduationCap,
    description:
      "Launch your career with real experience - bridge the gap between education and employment through our 12-month, paid apprenticeships.",
    features: [
      {
        icon: <FaBriefcase size={20} />,
        title: "Practical Experience",
        description:
          "Apply your technical knowledge to real-world projects with leading SMEs.",
      },
      {
        icon: <IoDocumentText size={20} />,
        title: "Financial Support",
        description:
          "Receive a living stipend throughout your 12-month apprenticeship.",
      },
      {
        icon: <FaHandsHelping size={20} />,
        title: "Professional Mentorship",
        description:
          "Learn directly from industry professionals who guide your growth.",
      },
      {
        icon: <FaNetworkWired size={20} />,
        title: "Career Acceleration",
        description:
          "Over 80% of our apprentices secure full-time employment after the program.",
      },
    ],
    ctaText: "Apply as a Graduate",
    bgColor: "bg-gradient-to-b from-blue-50 to-gray-50",
    ctaLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfPHPeWc8FbB99jihGCxXbCDs5VKjlDO2689srTy9NHNu3P4w/viewform?ts=6798a257&edit_requested=true",
  };

  return (
    <section
      id={apprenticesContent.id}
      className={`py-20 ${apprenticesContent.bgColor}`}
    >
      <div className="flex flex-col px-6 md:hidden">
        <div className="flex items-center gap-3 mb-4">
          <apprenticesContent.icon className="text-blue text-2xl" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            For <span className="text-blue">{apprenticesContent.title}</span>
          </h2>
        </div>

        <p className="text-xl text-gray-600 mb-8">
          {apprenticesContent.description}
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="space-y-6 mb-8">
              {apprenticesContent.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/40 backdrop-blur-md shadow-sm border border-white/50"
                >
                  <div className="mt-1 bg-blue/10 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={apprenticesContent.ctaLink}
                target="_blank"
                className="inline-flex items-center px-8 py-3 bg-blue text-white font-medium rounded-full hover:bg-blue/90 transition-colors"
              >
                {apprenticesContent.ctaText} <FaArrowRight className="ml-2" />
              </a>

              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center text-blue font-medium hover:text-blue/80 transition-colors underline"
              >
                Learn more about apprenticeships
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="hidden md:flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <apprenticesContent.icon className="text-blue text-2xl" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  For{" "}
                  <span className="text-blue">{apprenticesContent.title}</span>
                </h2>
              </div>

              <p className="text-xl text-gray-600 mb-8">
                {apprenticesContent.description}
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden bg-white/30 backdrop-blur-md shadow-xl border border-white/50 aspect-[4/3]">
              <div className="absolute inset-0 bg-[url(/apprentices.avif)] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-purple/30"></div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/50">
                <h3 className="font-bold text-gray-900 mb-3">
                  Your Apprenticeship Journey
                </h3>
                <div className="flex justify-between text-sm">
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center mx-auto">
                      1
                    </div>
                    <p className="mt-1">Apply</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center mx-auto">
                      2
                    </div>
                    <p className="mt-1">Match</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center mx-auto">
                      3
                    </div>
                    <p className="mt-1">Interview</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center mx-auto">
                      4
                    </div>
                    <p className="mt-1">Apprentice</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center mx-auto">
                      5
                    </div>
                    <p className="mt-1">Launch</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Detailed Information Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-white/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Graduate Apprenticeship Program
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-blue transition-colors"
                >
                  <BsX size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-blue/5 p-5 rounded-xl border border-blue/10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Bridge the Experience Gap
                  </h4>
                  <p className="text-gray-700">
                    You've earned your degree, but employers want experience.
                    ATAN helps you break this cycle by placing you in a
                    12-month, paid apprenticeship with a small or medium
                    enterprise where your skills are needed.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Why Choose an ATAN Apprenticeship?
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-blue text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Practical Experience: Apply your technical knowledge to
                        real-world projects
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-blue text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Financial Support: Receive a living stipend throughout
                        your apprenticeship
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-blue text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Professional Mentorship: Learn directly from industry
                        professionals who guide your growth
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-blue text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Career Acceleration: Over 80% of our apprentices secure
                        full-time employment after the program
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Eligibility Requirements
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-blue text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Recent graduate with a technical degree (computer
                        science, engineering, etc.)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-blue text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Strong academic performance and demonstrated interest in
                        the field
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-blue text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Willingness to commit to a 12-month full-time
                        apprenticeship
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-blue text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Passion for learning and contributing to an SME's growth
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue/5 p-5 rounded-xl border border-blue/10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Application Process
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Our streamlined application process connects you with the
                    right opportunity:
                  </p>
                  <ol className="space-y-3 list-decimal list-inside text-gray-700">
                    <li>Complete our online application form</li>
                    <li>
                      Participate in our screening process to assess your skills
                      and interests
                    </li>
                    <li>
                      Interview with SMEs that match your profile and career
                      goals
                    </li>
                    <li>Receive placement and begin your apprenticeship</li>
                    <li>
                      Transition to full-time employment or other opportunities
                      after 12 months
                    </li>
                  </ol>
                </div>

                <div className="mt-6 flex justify-end">
                  <a
                    href={apprenticesContent.ctaLink}
                    target="_blank"
                    className="inline-flex items-center px-8 py-3 bg-blue text-white font-medium rounded-full hover:bg-blue/90 transition-colors"
                  >
                    {apprenticesContent.ctaText}
                    <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Apprentices;
