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
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-burgundy/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-burgundy/5 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 blur-3xl"></div>

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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy mb-6"
            role="presentation"
          >
            <universitiesContent.icon
              className="text-burgundy"
              aria-hidden="true"
            />
            <span className="font-medium">For Education Partners</span>
          </div>

          <h2
            id="universities-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Elevating{" "}
            <span className="text-burgundy relative">
              {universitiesContent.title}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-burgundy/20 rounded-full"></span>
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
                  className="group p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/70 shadow-sm hover:shadow-md transition-all hover:bg-white/90 focus-within:ring-2 focus-within:ring-burgundy/30"
                  tabIndex={0}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-burgundy/10 p-3 rounded-lg group-hover:bg-burgundy/20 transition-colors group-focus-within:bg-burgundy/20">
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

            {/* Added accent card for visual appeal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-burgundy/10 to-white/80 p-6 rounded-xl border border-white/70 shadow-md mb-8"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="w-1 h-6 bg-burgundy rounded-full mr-3"></span>
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

            <div className="flex flex-wrap gap-5 items-center">
              <a
                href={universitiesContent.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-8 py-3.5 bg-burgundy text-white font-medium rounded-full hover:bg-burgundy/90 transition-all hover:shadow-lg hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-burgundy/50 focus:ring-offset-2"
                aria-label="Join as a University Partner - Opens in a new tab"
              >
                {universitiesContent.ctaText}{" "}
                <FaArrowRight className="ml-2" aria-hidden="true" />
              </a>

              <button
                onClick={() => setShowModal(true)}
                className="relative group flex items-center text-burgundy font-medium transition-colors focus:outline-none focus:underline"
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
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-burgundy/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </button>
            </div>
          </motion.div>

          {/* Right column with image and testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
              <div className="absolute inset-0 bg-[url(/universities.avif)] bg-cover bg-center transform hover:scale-105 transition-transform duration-7000"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy/20 via-transparent to-burgundy/10"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/70"
                >
                  <div className="flex items-center mb-4 justify-between">
                    <div className="flex items-center">
                      <div className="w-1.5 h-8 bg-burgundy rounded-full mr-3"></div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        Partner Success Stories
                      </h3>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          setCurrentTestimonial((prev) =>
                            prev === 0 ? testimonials.length - 1 : prev - 1
                          )
                        }
                        className="w-8 h-8 rounded-full bg-burgundy/10 flex items-center justify-center text-burgundy hover:bg-burgundy/20 transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <FaChevronLeft size={14} />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentTestimonial((prev) =>
                            prev === testimonials.length - 1 ? 0 : prev + 1
                          )
                        }
                        className="w-8 h-8 rounded-full bg-burgundy/10 flex items-center justify-center text-burgundy hover:bg-burgundy/20 transition-colors"
                        aria-label="Next testimonial"
                      >
                        <FaChevronRight size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <FaQuoteLeft
                          className="text-burgundy/20 text-4xl absolute top-0 left-0"
                          aria-hidden="true"
                        />
                        <p className="text-gray-600 italic pl-8 pt-2">
                          "{testimonials[currentTestimonial].quote}"
                        </p>
                        <div className="mt-3 flex items-center">
                          <div className="w-8 h-8 rounded-full bg-burgundy/20 flex items-center justify-center text-burgundy font-bold mr-2">
                            {testimonials[currentTestimonial].initials}
                          </div>
                          <div>
                            <p className="font-medium text-burgundy">
                              {testimonials[currentTestimonial].author}
                            </p>
                            <p className="text-sm text-gray-600">
                              {testimonials[currentTestimonial].title}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Testimonial pagination indicators */}
                    <div
                      className="flex justify-center gap-2 mt-4"
                      aria-hidden="true"
                    >
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentTestimonial
                              ? "bg-burgundy w-6"
                              : "bg-burgundy/30"
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
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
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/95 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 border border-white/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-10 bg-burgundy rounded-full"></div>
                  <h3
                    id="modal-title"
                    className="text-2xl font-bold text-gray-900"
                  >
                    University Partnership Program
                  </h3>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-burgundy/10 flex items-center justify-center text-gray-500 hover:text-burgundy transition-colors"
                  aria-label="Close dialog"
                >
                  <BsX size={24} aria-hidden="true" />
                </button>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-burgundy/10 to-blue-50/50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Partner with ATAN to Strengthen Your Graduate Success
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Universities strive to prepare students for successful
                    careers, but the transition from education to employment
                    remains challenging. By partnering with ATAN, you can
                    provide your technical graduates with a clear pathway to
                    meaningful employment.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-1.5 h-6 bg-burgundy/70 rounded-full mr-3"></span>
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
                      {
                        icon: <MdAccessibility className="text-burgundy" />,
                        title: "Inclusive Opportunities",
                        desc: "Support diverse graduates in accessing quality employment",
                      },
                    ].map((benefit, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 focus-within:ring-2 focus-within:ring-burgundy/30"
                        tabIndex={0}
                      >
                        <div className="mt-1 text-xl bg-burgundy/10 p-2 rounded-lg">
                          {benefit.icon}
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900">
                            {benefit.title}
                          </h5>
                          <p className="text-sm text-gray-600">
                            {benefit.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-1.5 h-6 bg-burgundy/70 rounded-full mr-3"></span>
                    How the Partnership Works
                  </h4>
                  <ul className="space-y-3 pl-2">
                    {[
                      "We connect your technical graduates with SMEs seeking their specific skills",
                      "Graduates participate in structured, 12-month apprenticeships",
                      "Universities can stay connected with graduates throughout their apprenticeship journey",
                      "Potential opportunities for academic credit arrangements (contact us to discuss options)",
                      "Regular data reports on graduate performance and employment outcomes",
                      "Annual partnership review with recommendations for curriculum alignment",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start bg-white/70 p-3 rounded-lg hover:bg-white/90 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <BsCheck2Circle
                          className="text-burgundy text-xl mt-0.5 mr-3 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Creating Seamless Educational Pathways
                  </h4>
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    ATAN believes that education doesn't end at graduation. By
                    creating structured transitions into the workforce, we help
                    universities fulfill their mission of preparing students for
                    successful futures.
                  </p>
                  <div className="p-5 bg-burgundy/5 rounded-xl border border-burgundy/10">
                    <h5 className="font-bold text-gray-900 mb-2">
                      Join Our Educational Network
                    </h5>
                    <p className="text-gray-700 mb-5">
                      Partner with ATAN to create stronger connections between
                      your educational offerings and the needs of employers in
                      your region.
                    </p>
                    <a
                      href={universitiesContent.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2.5 bg-burgundy text-white font-medium rounded-lg hover:bg-burgundy/90 transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-burgundy/50 focus:ring-offset-2"
                      aria-label="Become a University Partner - Opens in a new tab"
                    >
                      Become a University Partner{" "}
                      <FaArrowRight className="ml-2" aria-hidden="true" />
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
