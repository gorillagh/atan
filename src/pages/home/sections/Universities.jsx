import React, { useState } from "react";
import {
  FaUniversity,
  FaChartLine,
  FaHandshake,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";
import { BsCheck2Circle, BsX } from "react-icons/bs";
import { MdSchool, MdBusinessCenter } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Universities = () => {
  const [showModal, setShowModal] = useState(false);

  const universitiesContent = {
    id: "universities",
    title: "Universities",
    icon: FaUniversity,
    description:
      "Enhance graduate outcomes by providing a clear pathway from education to meaningful employment for your technical students.",
    features: [
      {
        icon: <FaChartLine size={20} />,
        title: "Improved Employment Outcomes",
        description:
          "Enhance your institution's graduate employment statistics.",
      },
      {
        icon: <MdBusinessCenter size={20} />,
        title: "Industry Connections",
        description:
          "Strengthen relationships with local and regional businesses.",
      },
      {
        icon: <MdSchool size={20} />,
        title: "Curriculum Insights",
        description:
          "Gain valuable feedback on industry needs to inform teaching.",
      },
      {
        icon: <FaGraduationCap size={20} />,
        title: "Increased Attractiveness",
        description: "Offer prospective students a clear path to employment.",
      },
    ],
    ctaText: "Join as a University Partner",
    bgColor: "bg-gradient-to-br from-white via-blue-50/30 to-gray-50",
    ctaLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfLAqoxl6C4PRUGSyvGPhcd3vA0N_nZ-M4O1WmTnwy8jaYNsQ/viewform",
  };

  return (
    <section
      id={universitiesContent.id}
      className={`py-20 ${universitiesContent.bgColor}`}
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
              <universitiesContent.icon className="text-burgundy text-2xl" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                For{" "}
                <span className="text-burgundy">
                  {universitiesContent.title}
                </span>
              </h2>
            </div>

            <p className="text-xl text-gray-600 mb-8">
              {universitiesContent.description}
            </p>

            <div className="space-y-6 mb-8">
              {universitiesContent.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm shadow-sm border border-white/70"
                >
                  <div className="mt-1 bg-burgundy/10 p-2 rounded-lg">
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
                href={universitiesContent.ctaLink}
                target="_blank"
                className="inline-flex items-center px-8 py-3 bg-burgundy text-white font-medium rounded-full hover:bg-burgundy/90 transition-colors"
              >
                {universitiesContent.ctaText} <FaArrowRight className="ml-2" />
              </a>

              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center text-burgundy font-medium hover:text-burgundy/80 transition-colors underline"
              >
                Learn more about partnerships
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
            <div className="relative rounded-3xl overflow-hidden bg-white/40 backdrop-blur-md shadow-xl border border-white/50 aspect-[4/3]">
              <div className="absolute inset-0 bg-[url(/for_universities.webp)] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-lg p-5 shadow-lg border border-white/50">
                <h3 className="font-bold text-gray-900 mb-2">
                  Partner Success Story
                </h3>
                <p className="text-gray-600 italic">
                  "Our partnership with ATAN has significantly improved graduate
                  employment rates and industry relevance of our curriculum. The
                  structured pathway they provide has been invaluable for our
                  students."
                </p>
                <p className="font-medium text-burgundy mt-2">
                  — Prof. Ada Johnson, University of Technology, Lagos
                </p>
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
              className="bg-white/95 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-white/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  University Partnership Program
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-burgundy transition-colors"
                >
                  <BsX size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-burgundy/10 to-blue-50/50 p-5 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Partner with ATAN to Strengthen Your Graduate Success
                  </h4>
                  <p className="text-gray-700">
                    Universities strive to prepare students for successful
                    careers, but the transition from education to employment
                    remains challenging. By partnering with ATAN, you can
                    provide your technical graduates with a clear pathway to
                    meaningful employment.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Benefits of University Partnership
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        icon: <FaChartLine className="text-burgundy" />,
                        title: "Improved Employment Outcomes",
                        desc: "Enhance your institution's graduate employment statistics",
                      },
                      {
                        icon: <MdBusinessCenter className="text-burgundy" />,
                        title: "Industry Connections",
                        desc: "Strengthen relationships with local and regional businesses",
                      },
                      {
                        icon: <MdSchool className="text-burgundy" />,
                        title: "Curriculum Insights",
                        desc: "Gain valuable feedback on industry needs to inform teaching",
                      },
                      {
                        icon: <FaGraduationCap className="text-burgundy" />,
                        title: "Increased Attractiveness",
                        desc: "Offer prospective students a clear path from education to employment",
                      },
                      {
                        icon: <FaHandshake className="text-burgundy" />,
                        title: "Alumni Success",
                        desc: "Build a network of successful graduates in technical fields",
                      },
                    ].map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm"
                      >
                        <div className="mt-1 text-xl">{benefit.icon}</div>
                        <div>
                          <h5 className="font-bold text-gray-900">
                            {benefit.title}
                          </h5>
                          <p className="text-sm text-gray-600">
                            {benefit.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    How the Partnership Works
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        We connect your technical graduates with SMEs seeking
                        their specific skills
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Graduates participate in structured, 12-month
                        apprenticeships
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Universities can stay connected with graduates
                        throughout their apprenticeship journey
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        Potential opportunities for academic credit arrangements
                        (contact us to discuss options)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Creating Seamless Educational Pathways
                  </h4>
                  <p className="text-gray-700 mb-4">
                    ATAN believes that education doesn't end at graduation. By
                    creating structured transitions into the workforce, we help
                    universities fulfill their mission of preparing students for
                    successful futures.
                  </p>
                  <div className="p-4 bg-burgundy/5 rounded-xl border border-burgundy/10">
                    <h5 className="font-bold text-gray-900 mb-2">
                      Join Our Educational Network
                    </h5>
                    <p className="text-gray-700 mb-4">
                      Partner with ATAN to create stronger connections between
                      your educational offerings and the needs of employers in
                      your region.
                    </p>
                    <a
                      href={universitiesContent.ctaLink}
                      target="_blank"
                      className="inline-flex items-center px-6 py-2 bg-burgundy text-white font-medium rounded-full hover:bg-burgundy/90 transition-colors text-sm"
                    >
                      Become a University Partner{" "}
                      <FaArrowRight className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Universities;
