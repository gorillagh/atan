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
      "Enhance graduate outcomes by providing a clear pathway from education to meaningful employment for your technical students.",
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
      className={`py-24 ${universitiesContent.bgColor} relative overflow-hidden`}
      aria-labelledby="universities-heading"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-purple/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-purple/5 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header section with subtle accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue/10 text-blue mb-6"
            role="presentation"
          >
            <universitiesContent.icon
              className="text-blue"
              aria-hidden="true"
            />
            <span className="font-medium">For Education Partners</span>
          </div>

          <h2
            id="universities-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Elevating{" "}
            <span className="text-blue relative">
              {universitiesContent.title}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue/20 rounded-full"></span>
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            {universitiesContent.description}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          {/* Left column with features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 flex flex-col"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 flex-grow">
              {universitiesContent.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/70 shadow-sm hover:shadow-md transition-all hover:bg-white/90 focus-within:ring-2 focus-within:ring-blue/30"
                  tabIndex={0}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-blue/10 p-3 rounded-lg group-hover:bg-blue/20 transition-colors group-focus-within:bg-blue/20">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 pl-14">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-5 items-center">
              <a
                href={universitiesContent.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-8 py-3.5 bg-blue text-white font-medium rounded-full hover:bg-blue/90 transition-all hover:shadow-lg hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-blue/50 focus:ring-offset-2"
                aria-label="Join as a University Partner - Opens in a new tab"
              >
                {universitiesContent.ctaText}{" "}
                <FaArrowRight className="ml-2" aria-hidden="true" />
              </a>

              <button
                onClick={() => setShowModal(true)}
                className="relative group flex items-center text-blue font-medium transition-colors focus:outline-none focus:underline"
                aria-haspopup="dialog"
                aria-expanded={showModal}
              >
                Learn more about partnerships
                <span
                  className="ml-1 group-hover:ml-2 transition-all duration-300"
                  aria-hidden="true"
                >
                  →
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </button>
            </div>
          </motion.div>

          {/* Right column with image and testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            {/* Main image with overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8 aspect-video">
              <img
                src="/universities.avif"
                alt="University students and professors collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple/40 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent h-1/3"></div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">
                  Connecting Education & Industry
                </h3>
                <p className="text-white/80 text-sm">
                  Bridging the gap between academic learning and practical
                  application
                </p>
              </div>
            </div>
            {/* Added accent card for visual appeal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue/10 to-white/80 p-6 rounded-xl border border-white/70 shadow-md mb-8"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="w-1 h-6 bg-blue rounded-full mr-3"></span>
                Creating Seamless Educational Pathways
              </h4>
              <p className="text-gray-700 leading-relaxed">
                ATAN believes that education doesn't end at graduation. By
                creating structured transitions into the workforce, we help
                universities fulfill their mission of preparing students for
                successful futures while connecting them with SMEs that can
                benefit from their technical expertise.
              </p>
            </motion.div>
            {/* Testimonial section */}
            {/* <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-md p-6">
              <div className="absolute text-purple/10 top-6 left-4">
                <FaQuoteLeft size={80} aria-hidden="true" />
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  What Our Partner Universities Say
                </h3>

                <div className="relative overflow-hidden h-[150px]">
                  {testimonials.map((testimonial, index) => (
                    <AnimatePresence mode="wait" initial={false} key={index}>
                      {currentTestimonial === index && (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          <p className="text-gray-700 mb-6 italic">
                            "{testimonial.quote}"
                          </p>
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-purple/10 text-purple flex items-center justify-center font-bold mr-3">
                              {testimonial.initials}
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">
                                {testimonial.author}
                              </p>
                              <p className="text-sm text-gray-600">
                                {testimonial.title}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ))}
                </div>

               
                <div className="flex justify-between items-center mt-8">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          currentTestimonial === index
                            ? "bg-blue w-5"
                            : "bg-gray-300"
                        }`}
                        aria-label={`View testimonial ${index + 1}`}
                      ></button>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() =>
                        setCurrentTestimonial(
                          (prev) =>
                            (prev - 1 + testimonials.length) %
                            testimonials.length
                        )
                      }
                      className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <FaChevronLeft size={14} className="text-gray-600" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentTestimonial(
                          (prev) => (prev + 1) % testimonials.length
                        )
                      }
                      className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <FaChevronRight size={14} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
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
