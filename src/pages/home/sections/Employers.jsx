import React, { useState, useEffect, useRef } from "react";
import {
  FaBriefcase,
  FaLightbulb,
  FaUserGraduate,
  FaHandshake,
} from "react-icons/fa";
import {
  BsCheck2Circle,
  BsX,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { FaCalculator, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Employers = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const employersContent = {
    id: "employers",
    title: "SMEs",
    icon: FaBriefcase,
    description:
      "Grow your business with fresh talent - access motivated, recently graduated technical professionals at a fraction of the usual cost.",
    features: [
      {
        icon: <FaUserGraduate size={24} />,
        title: "Access to Fresh Skills",
        description:
          "Tap into the latest technical knowledge from university graduates.",
        image: "/employers1.avif",
      },
      {
        icon: <FaCalculator size={24} />,
        title: "Cost-Effective Talent",
        description:
          "Benefit from cost-sharing support, reducing your financial investment.",
        image: "/employers2.avif",
      },
      {
        icon: <FaHandshake size={24} />,
        title: "Build Your Pipeline",
        description:
          "Test potential employees in a low-risk environment before making permanent hires.",
        image: "/universities.avif",
      },
      {
        icon: <FaLightbulb size={24} />,
        title: "Drive Innovation",
        description: "Bring new perspectives and ideas into your organization.",
        image: "/employers3.avif",
      },
    ],
    ctaText: "Join as an SME Partner",
    bgColor: "bg-gradient-to-b from-gray-50 to-gray-100",
    ctaLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfLAqoxl6C4PRUGSyvGPhcd3vA0N_nZ-M4O1WmTnwy8jaYNsQ/viewform",
  };

  // Setup and clear interval based on pause state
  useEffect(() => {
    startCarousel();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const startCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentFeature(
          (prev) => (prev + 1) % employersContent.features.length
        );
      }, 5000);
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % employersContent.features.length);
  };

  const prevFeature = () => {
    setCurrentFeature(
      (prev) =>
        (prev - 1 + employersContent.features.length) %
        employersContent.features.length
    );
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diffX = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum distance to be considered a swipe

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        // Swipe left, go to next
        nextFeature();
      } else {
        // Swipe right, go to prev
        prevFeature();
      }
    }

    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  return (
    <section
      id={employersContent.id}
      className={`py-16 md:py-28 ${employersContent.bgColor} overflow-hidden relative`}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-burgundy/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-burgundy/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content - Desktop & Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5 flex flex-col items-start space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="bg-burgundy/10 p-2.5 rounded-xl">
                <employersContent.icon className="text-burgundy text-2xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                For{" "}
                <span className="text-burgundy">{employersContent.title}</span>
              </h2>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              {employersContent.description}
            </p>

            {/* CTAs - Desktop only */}
            <div className="pt-4 w-full hidden lg:flex flex-wrap gap-5 items-center">
              <a
                href={employersContent.ctaLink}
                target="_blank"
                className="inline-flex items-center px-8 py-3.5 bg-burgundy text-white font-medium rounded-full hover:bg-burgundy/90 transition-all hover:shadow-lg"
              >
                {employersContent.ctaText} <FaArrowRight className="ml-2" />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-3/5 relative"
          >
            {/* Carousel Container */}
            <div
              className="relative rounded-3xl overflow-hidden bg-white/30 backdrop-blur-md shadow-xl border border-white/50 aspect-[16/11] md:aspect-[16/10] w-full mx-auto"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="carousel-container relative h-full w-full">
                {employersContent.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out 
                      ${
                        currentFeature === index
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-105"
                      style={{
                        backgroundImage: feature.image
                          ? `url(${feature.image})`
                          : "url(/for_employers.webp)",
                        transform:
                          currentFeature === index ? "scale(1)" : "scale(1.05)",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-burgundy/5 to-burgundy/30"></div>

                    <div className="absolute inset-x-0 bottom-0 bg-white/40 backdrop-blur-lg border-t border-white/40 transform transition-transform duration-500 ease-in-out">
                      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 p-4 md:p-7">
                        <div className="bg-burgundy/15 p-2.5 md:p-3 rounded-xl text-burgundy flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-base md:text-xl text-gray-900 tracking-tight">
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Carousel Indicators - mobile only */}
                <div className="absolute bottom-28 lg:bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10 ">
                  {employersContent.features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFeature(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentFeature === index
                          ? "bg-burgundy w-6"
                          : "bg-white/80 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>

                {/* Arrow Controls - desktop only */}
                <div className="hidden md:block">
                  <button
                    onClick={prevFeature}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-md border border-white/50 text-burgundy transition-all hover:scale-105"
                    aria-label="Previous slide"
                  >
                    <BsChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextFeature}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-md border border-white/50 text-burgundy transition-all hover:scale-105"
                    aria-label="Next slide"
                  >
                    <BsChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden  mt-6 md:flex w-full justify-center align-middle items-center">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center text-burgundy font-medium hover:text-burgundy/80 transition-colors underline underline-offset-2"
              >
                Learn more about the program
              </button>
            </div>

            {/* Mobile CTAs - Ordered as requested */}
            <div className="flex flex-col items-center space-y-5 mt-8 lg:hidden">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center text-burgundy font-medium hover:text-burgundy/80 transition-colors underline underline-offset-2"
              >
                Learn more about the program
              </button>
              <a
                href={employersContent.ctaLink}
                target="_blank"
                className="inline-flex items-center px-8 py-3.5 bg-burgundy text-white font-medium rounded-full hover:bg-burgundy/90 transition-all hover:shadow-lg"
              >
                {employersContent.ctaText} <FaArrowRight className="ml-2" />
              </a>
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-white/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  SME Partnership Program
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-burgundy transition-colors p-2 rounded-full hover:bg-gray-100"
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

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 mt-6">
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
                    className="inline-flex items-center px-6 py-2.5 bg-burgundy text-white font-medium rounded-full hover:bg-burgundy/90 transition-colors text-sm shadow-md hover:shadow-lg"
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
