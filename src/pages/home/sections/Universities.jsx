import React, { useState, useEffect } from "react";
import {
  FaUniversity,
  FaChartLine,
  FaHandshake,
  FaGraduationCap,
  FaArrowRight,
  FaChevronRight,
  FaChevronLeft,
  FaQuoteLeft,
} from "react-icons/fa";
import { BsCheck2Circle, BsX } from "react-icons/bs";
import { MdSchool, MdBusinessCenter, MdAccessibility } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Universities = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Track window size for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Manage keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal]);

  // Testimonial data
  const testimonials = [
    {
      quote:
        "Our partnership with ATAN has significantly improved graduate employment rates and industry relevance of our curriculum. The structured pathway they provide has been invaluable for our students.",
      author: "Prof. Ada Johnson",
      title: "University of Technology, Lagos",
      initials: "AJ",
    },
    {
      quote:
        "Since joining ATAN's network, we've seen a 40% increase in technical graduate placements. The feedback loop from industry partners has helped us refine our teaching approach.",
      author: "Dr. Samuel Okafor",
      title: "Lagos State University",
      initials: "SO",
    },
    {
      quote:
        "The data-driven insights from ATAN have transformed how we prepare students for the workforce. Our engineering department now boasts a 92% employment rate within 6 months of graduation.",
      author: "Prof. Elizabeth Nwaneri",
      title: "Federal University of Technology, Akure",
      initials: "EN",
    },
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const universitiesContent = {
    id: "universities",
    title: "Universities",
    icon: FaUniversity,
    description:
      "Enhancing graduate outcomes by providing clear pathways from education to meaningful employment for technical students across universities, TVETs, colleges, and youth-focused organizations.",
    features: [
      {
        icon: <FaChartLine size={22} />,
        title: "Improved Employment Outcomes",
        description:
          "Enhance your institution's graduate employment statistics.",
      },
      {
        icon: <MdBusinessCenter size={22} />,
        title: "Industry Connections",
        description:
          "Strengthen relationships with local and regional businesses.",
      },
      {
        icon: <MdSchool size={22} />,
        title: "Curriculum Insights",
        description:
          "Gain valuable feedback on industry needs to inform teaching.",
      },
      {
        icon: <FaGraduationCap size={22} />,
        title: "Increased Attractiveness",
        description: "Offer prospective students a clear path to employment.",
      },
    ],
    ctaText: "Join as a University Partner",
    bgColor: "bg-gradient-to-br from-white via-blue-50/20 to-gray-50",
    ctaLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfLAqoxl6C4PRUGSyvGPhcd3vA0N_nZ-M4O1WmTnwy8jaYNsQ/viewform",
  };

  return (
    <section
      id={universitiesContent.id}
      className={`py-20 ${universitiesContent.bgColor}`}
    >
      <div className="flex flex-col px-6 md:hidden">
        <div className="flex items-center gap-3 mb-4">
          <universitiesContent.icon className="text-blue text-2xl" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            For <span className="text-blue">{universitiesContent.title}</span>
          </h2>
        </div>

        <p className="text-xl text-gray-600 mb-8">
          {universitiesContent.description}
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="space-y-6 mb-8">
              {universitiesContent.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/40 backdrop-blur-md shadow-sm border border-white/50 hover:shadow-md hover:bg-white/60 transition-all"
                >
                  <div className="mt-1 bg-blue/10 p-2 rounded-lg text-blue">
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
                className="inline-flex items-center px-8 py-3 bg-blue text-white font-medium rounded-full hover:bg-blue/90 transition-colors shadow-sm hover:shadow"
              >
                {universitiesContent.ctaText} <FaArrowRight className="ml-2" />
              </a>

              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center text-blue font-medium hover:text-blue/80 transition-colors underline"
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
            <div className="hidden md:flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <universitiesContent.icon className="text-blue text-2xl" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  For{" "}
                  <span className="text-blue">{universitiesContent.title}</span>
                </h2>
              </div>

              <p className="text-xl text-gray-600 mb-8">
                {universitiesContent.description}
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden bg-white/30 backdrop-blur-md shadow-xl border border-white/50 aspect-[4/3] hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-[url(/universities.avif)] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-purple/30"></div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/50">
                <h3 className="font-bold text-gray-900 mb-3">
                  Your Partnership Journey
                </h3>
                <div className="flex justify-between text-sm">
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center mx-auto">
                      1
                    </div>
                    <p className="mt-1">Connect</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center mx-auto">
                      2
                    </div>
                    <p className="mt-1">Integrate</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center mx-auto">
                      3
                    </div>
                    <p className="mt-1">Match</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center mx-auto">
                      4
                    </div>
                    <p className="mt-1">Support</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center mx-auto">
                      5
                    </div>
                    <p className="mt-1">Grow</p>
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setShowModal(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                <h3
                  id="modal-title"
                  className="text-2xl font-bold text-gray-900"
                >
                  University Partnership Program
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
                  aria-label="Close dialog"
                >
                  <BsX size={24} />
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Why Partner with ATAN?
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Joining forces with ATAN creates a powerful connection
                    between your university and the technical workforce. Here's
                    how your institution benefits:
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-blue text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Enhanced Graduate Outcomes:</strong> Improve
                        employment statistics and deliver on promises to
                        students.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-blue text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Curriculum Relevance:</strong> Gain industry
                        feedback to keep programs aligned with market needs.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-blue text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Business Connections:</strong> Build sustainable
                        relationships with SMEs across various sectors.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-blue text-xl mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Data-Driven Insights:</strong> Access analytics
                        on skills gaps and market demands for better planning.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 bg-blue/5 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    The Partnership Process
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Our collaborative approach integrates seamlessly with your
                    existing programs:
                  </p>

                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-blue text-white flex-shrink-0 flex items-center justify-center font-bold mr-3">
                        1
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Collaborate</p>
                        <p className="text-gray-700">
                          We work with your career services and academic
                          departments to understand graduate profiles and
                          strengths.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-blue text-white flex-shrink-0 flex items-center justify-center font-bold mr-3">
                        2
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Connect</p>
                        <p className="text-gray-700">
                          We match your graduates with SMEs that need their
                          specific technical skills and knowledge.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-blue text-white flex-shrink-0 flex items-center justify-center font-bold mr-3">
                        3
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Support</p>
                        <p className="text-gray-700">
                          Throughout the apprenticeship, we provide mentorship
                          and professional development resources.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-blue text-white flex-shrink-0 flex items-center justify-center font-bold mr-3">
                        4
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Feedback</p>
                        <p className="text-gray-700">
                          We share insights from SMEs about graduate performance
                          and skills gaps to help refine your programs.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Success Metrics
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Our university partners typically see:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-3xl font-bold text-blue">40%</p>
                      <p className="text-gray-700">
                        Increase in technical graduate employment rates
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-3xl font-bold text-blue">85%</p>
                      <p className="text-gray-700">
                        Of apprentices secure permanent roles after the program
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-3xl font-bold text-blue">25+</p>
                      <p className="text-gray-700">
                        New SME connections per university on average
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-3xl font-bold text-blue">92%</p>
                      <p className="text-gray-700">
                        Satisfaction rate among partner universities
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-100">
                  <a
                    href={universitiesContent.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-3 bg-blue text-white font-medium rounded-full hover:bg-blue/90 transition-colors"
                  >
                    {universitiesContent.ctaText}{" "}
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

export default Universities;
