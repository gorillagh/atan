import React, { useState } from "react";
import {
  FaBriefcase,
  FaLightbulb,
  FaUserGraduate,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";
import { BsCheck2Circle, BsX } from "react-icons/bs";
import { FaCalculator } from "react-icons/fa";
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
        icon: <FaCalculator size={20} />,
        title: "Cost-Effective Talent",
        description:
          "Benefit from cost-sharing support, reducing your financial investment.",
      },
      {
        icon: <FaUserGraduate size={20} />,
        title: "Access to Fresh Skills",
        description:
          "Access fresh skills from vetted graduates, reducing your team's hiring time and effort.",
      },

      {
        icon: <FaLightbulb size={20} />,
        title: "Drive Innovation",
        description: "Bring new perspectives and ideas into your organization.",
      },
    ],
    ctaText: "Join as an SME Partner",
    ctaSecondaryText: "Learn More",
    bgColor: "bg-gradient-to-b from-gray-50 to-gray-100",
    ctaLink: "https://forms.gle/TZcHRgcGkxY4UU6w8",
      // "https://docs.google.com/forms/d/e/1FAIpQLSfLAqoxl6C4PRUGSyvGPhcd3vA0N_nZ-M4O1WmTnwy8jaYNsQ/viewform",
  };

  return (
    <section
      id={employersContent.id}
      className={`py-20 ${employersContent.bgColor}`}
    >
      {/* Mobile title and description (hidden on desktop) */}
      <div className="flex flex-col md:hidden px-6">
        <div className="flex items-center gap-3 mb-4">
          <employersContent.icon className="text-orange text-2xl" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            For <span className="text-orange">{employersContent.title}</span>
          </h2>
        </div>

        <p className="text-xl text-gray-600 mb-8">
          {employersContent.description}
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side: Features (opposite of Apprentices) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="space-y-6 mb-8">
              {employersContent.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/40 backdrop-blur-md shadow-sm border border-white/50"
                >
                  <div className="mt-1 bg-orange/10 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons - for both mobile and desktop */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={employersContent.ctaLink}
                target="_blank"
                className="inline-flex items-center px-8 py-3 bg-orange text-white font-medium rounded-full hover:bg-orange/90 transition-colors"
              >
                {employersContent.ctaText} <FaArrowRight className="ml-2" />
              </a>

              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center px-8 py-3 bg-transparent text-orange font-medium rounded-full border border-orange hover:bg-orange/5 transition-colors"
              >
                {employersContent.ctaSecondaryText}
              </button>
            </div>
          </motion.div>

          {/* Right side: Title, description, image (opposite of Apprentices) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            {/* Desktop title and description (hidden on mobile) */}
            <div className="hidden md:flex flex-col ">
              <div className="flex items-center gap-3 mb-4">
                <employersContent.icon className="text-orange text-2xl" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  For{" "}
                  <span className="text-orange">{employersContent.title}</span>
                </h2>
              </div>

              <p className="text-xl text-gray-600 mb-8">
                {employersContent.description}
              </p>
            </div>

            {/* Main image with overlay */}
            <div className="relative rounded-3xl overflow-hidden bg-white/30 backdrop-blur-md shadow-xl border border-white/50 aspect-[4/3]">
              <div className="absolute inset-0 bg-[url(/employers1.avif)] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-purple/30"></div>

              {/* Stats overlay at bottom */}
              {/* <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/50">
                <h3 className="font-bold text-gray-900 mb-3">
                  Business Impact
                </h3>
                <div className="flex justify-between text-sm">
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center mx-auto">
                      40%
                    </div>
                    <p className="mt-1">Cost savings</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center mx-auto">
                      85%
                    </div>
                    <p className="mt-1">Retention</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center mx-auto">
                      3x
                    </div>
                    <p className="mt-1">ROI</p>
                  </div>
                </div>
              </div> */}
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
                  SME Partnership Program
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-orange transition-colors"
                >
                  <BsX size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-orange/5 p-5 rounded-xl border border-orange/10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Bridging the Talent Gap
                  </h4>
                  <p className="text-gray-700">
                    As a small or medium enterprise, finding the right technical
                    talent can be challenging and costly. ATAN connects you with
                    motivated, recently graduated technical professionals at a
                    fraction of the usual cost, helping you grow while
                    developing Africa's future workforce.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Benefits for Your Business
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-orange text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Cost-Effective Talent:</strong> Benefit from
                        cost-sharing arrangements, reducing your financial
                        investment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-orange text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Pre-Vetted Graduates:</strong> Access
                        technically skilled graduates who have been screened for
                        quality
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-orange text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Low-Risk Trial Period:</strong> Test potential
                        permanent hires in a structured apprenticeship
                        environment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-orange text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Fresh Perspectives:</strong> Bring new ideas and
                        contemporary technical knowledge into your organization
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    The Partnership Process
                  </h4>
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-orange text-white flex-shrink-0 flex items-center justify-center font-bold mr-3">
                        1
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Register</p>
                        <p className="text-gray-700">
                          Complete our business registration form detailing your
                          technical needs
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-orange text-white flex-shrink-0 flex items-center justify-center font-bold mr-3">
                        2
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Match</p>
                        <p className="text-gray-700">
                          We'll connect you with graduates who match your
                          business requirements
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-orange text-white flex-shrink-0 flex items-center justify-center font-bold mr-3">
                        3
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Interview</p>
                        <p className="text-gray-700">
                          Select candidates who best fit your team and culture
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-orange text-white flex-shrink-0 flex items-center justify-center font-bold mr-3">
                        4
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Onboard</p>
                        <p className="text-gray-700">
                          Welcome your apprentice with ATAN's structured support
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-orange text-white flex-shrink-0 flex items-center justify-center font-bold mr-3">
                        5
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Grow</p>
                        <p className="text-gray-700">
                          Develop your apprentice and potentially convert them
                          to a full-time team member
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="mt-6 flex justify-end">
                  <a
                    href={employersContent.ctaLink}
                    target="_blank"
                    className="inline-flex items-center px-8 py-3 bg-orange text-white font-medium rounded-full hover:bg-orange/90 transition-colors"
                  >
                    {employersContent.ctaText}
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

export default Employers;
