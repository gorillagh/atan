import React, { useState } from "react";
import {
  FaBriefcase,
  FaLightbulb,
  FaUserGraduate,
  FaHandshake,
} from "react-icons/fa";
import { BsCheck2Circle, BsX } from "react-icons/bs";
import { FaCalculator, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Employers = () => {
  const [showModal, setShowModal] = useState(false);

  const employersContent = {
    id: "employers",
    title: "SMEs",
    icon: FaBriefcase,
    description:
      "Grow your business with fresh talent - access motivated, recently graduated technical professionals at a fraction of the usual cost.",
    features: [
      {
        icon: <FaUserGraduate size={20} />,
        title: "Access to Fresh Skills",
        description:
          "Tap into the latest technical knowledge from university graduates.",
      },
      {
        icon: <FaCalculator size={20} />,
        title: "Cost-Effective Talent",
        description:
          "Benefit from cost-sharing support, reducing your financial investment.",
      },
      {
        icon: <FaHandshake size={20} />,
        title: "Build Your Pipeline",
        description:
          "Test potential employees in a low-risk environment before making permanent hires.",
      },
      {
        icon: <FaLightbulb size={20} />,
        title: "Drive Innovation",
        description: "Bring new perspectives and ideas into your organization.",
      },
    ],
    ctaText: "Join as an SME Partner",
    bgColor: "bg-gradient-to-b from-gray-50 to-gray-100",
    ctaLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfLAqoxl6C4PRUGSyvGPhcd3vA0N_nZ-M4O1WmTnwy8jaYNsQ/viewform",
  };

  return (
    <section
      id={employersContent.id}
      className={`py-20 ${employersContent.bgColor}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <employersContent.icon className="text-burgundy text-2xl" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                For{" "}
                <span className="text-burgundy">{employersContent.title}</span>
              </h2>
            </div>

            <p className="text-xl text-gray-600 mb-8">
              {employersContent.description}
            </p>

            <div className="space-y-6 mb-8">
              {employersContent.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100"
                >
                  <div className="mt-1 bg-burgundy/10 p-2 rounded-md">
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
                href={employersContent.ctaLink}
                target="_blank"
                className="inline-flex items-center px-8 py-3 bg-burgundy text-white font-medium rounded-md hover:bg-burgundy/90 transition-colors"
              >
                {employersContent.ctaText} <FaArrowRight className="ml-2" />
              </a>

              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center text-burgundy font-medium hover:text-burgundy/80 transition-colors underline"
              >
                Learn more about the program
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
            <div className="relative rounded-2xl overflow-hidden bg-white/40 backdrop-blur-md shadow-xl border border-white/50 aspect-[4/3]">
              <div className="absolute inset-0 bg-[url(/for_employers.webp)] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-burgundy/40"></div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/50">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <FaCalculator className="mr-2 text-burgundy" /> ROI Calculator
                  Preview
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  See how hiring apprentices can benefit your organization
                </p>
                <div className="bg-gray-100 rounded-md p-2 text-sm">
                  Average ROI:{" "}
                  <span className="font-bold text-burgundy">124%</span> within
                  first year
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
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  SME Partnership Program
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-burgundy transition-colors"
                >
                  <BsX size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Why Partner with ATAN?
                  </h4>
                  <p className="text-gray-700">
                    As a small or medium enterprise, finding the right technical
                    talent can be challenging and costly. ATAN gives you access
                    to motivated, recently graduated technical professionals at
                    a fraction of the usual cost.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Benefits for Your Business
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Access to Fresh Skills: Tap into the latest technical
                        knowledge from university graduates
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Cost-Effective Talent: Benefit from cost-sharing
                        support, reducing your financial investment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Build Your Pipeline: Test potential employees in a
                        low-risk environment before making permanent hires
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Drive Innovation: Bring new perspectives and ideas into
                        your organization
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Mentorship Opportunities: Develop your existing team's
                        leadership skills through mentoring
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    How It Works
                  </h4>
                  <ol className="space-y-3 ml-6 list-decimal">
                    <li className="text-gray-700 pl-2">
                      <span className="font-medium">Join Our Platform:</span>{" "}
                      Register your business and share your technical needs
                    </li>
                    <li className="text-gray-700 pl-2">
                      <span className="font-medium">Meet Candidates:</span>{" "}
                      We'll match you with qualified graduates in your field
                    </li>
                    <li className="text-gray-700 pl-2">
                      <span className="font-medium">Structured Support:</span>{" "}
                      Receive guidance on creating effective apprenticeship
                      experiences
                    </li>
                    <li className="text-gray-700 pl-2">
                      <span className="font-medium">Shared Investment:</span>{" "}
                      Contribute to the apprentice's stipend with support from
                      ATAN
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Participation Requirements
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Provide a supportive learning environment with
                        meaningful projects
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Assign a dedicated mentor to guide the apprentice
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Commit to the 12-month program duration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Contribute to the apprentice's stipend (with
                        cost-sharing from ATAN)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mt-6">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Ready to Grow Your Team?
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Join the community of forward-thinking SMEs who are building
                    their businesses while developing the next generation of
                    technical talent.
                  </p>
                  <a
                    href={employersContent.ctaLink}
                    target="_blank"
                    className="inline-flex items-center px-6 py-2 bg-burgundy text-white font-medium rounded-md hover:bg-burgundy/90 transition-colors text-sm"
                  >
                    Apply as an SME Partner <FaArrowRight className="ml-2" />
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

export default Employers;
