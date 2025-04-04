import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsCheck2Circle } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Enhanced background with elegant patterns and brand colors */}
      <div className="absolute inset-0 z-0 bg-[url('/elegant-pattern.png')] bg-repeat opacity-5"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple/5 via-white to-orange/5"></div>

      {/* Decorative elements */}
      <div className="absolute top-40 -left-20 w-96 h-96 bg-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-0 w-64 h-64 bg-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-[10%] w-80 h-80 bg-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 right-[5%] w-[500px] h-[500px] bg-purple/5 rounded-full blur-3xl"></div>

      {/* Subtle lines for visual elegance */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About <span className="text-purple font-extrabold">ATAN</span>
            </h2>
            <div className="w-full h-1.5 bg-orange mt-3 rounded-full"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto mt-8 leading-relaxed"
          >
            ATAN connects talented technical graduates with small and medium
            enterprises (SMEs) through our innovative 12-month apprenticeship
            program.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/80">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 inline-block border-b-3 border-orange pb-1">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mt-2">
                We're on a mission to solve two critical challenges: helping
                SMEs access the technical talent they need to grow, and
                supporting recent graduates in gaining the practical experience
                that launches successful careers.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/80">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 inline-block border-b-3 border-orange pb-1">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mt-2">
                We envision a future where the transition from education to
                employment is seamless, where businesses of all sizes can access
                the talent they need to innovate, and where graduates can apply
                their knowledge in meaningful ways from day one.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/50">
              <img
                src="/about.avif"
                alt="ATAN's impact in Africa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple/40"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-orange opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-purple opacity-50"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/70 transform transition-all hover:shadow-xl max-w-3xl mx-auto"
        >
          <h4 className="font-bold text-xl text-gray-900 border-l-4 border-orange pl-4 mb-5">
            How ATAN Works
          </h4>
          <p className="text-gray-700 mb-6">
            Our platform creates meaningful connections between technical
            graduates and SMEs looking to grow. Through structured 12-month
            full-time apprenticeships, graduates gain hands-on experience while
            SMEs benefit from fresh perspectives and technical expertise.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <BsCheck2Circle className="text-orange text-xl mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Match SMEs with talented recent graduates eager to make a
                  difference
                </span>
              </li>
              <li className="flex items-start">
                <BsCheck2Circle className="text-orange text-xl mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Cost-sharing support for businesses and living stipends for
                  apprentices
                </span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start">
                <BsCheck2Circle className="text-orange text-xl mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  80%+ job placement rates for apprentices after program
                  completion
                </span>
              </li>
              <li className="flex items-start">
                <BsCheck2Circle className="text-orange text-xl mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Active in 12 African countries with 50+ SME partners
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowModal(true)}
              className="text-purple inline-flex items-center text-sm font-medium hover:text-purple/80 transition-colors underline"
            >
              <AiOutlineInfoCircle className="mr-1" size={18} />
              Learn more about how ATAN works
            </button>
          </div>
        </motion.div>
      </div>

      {/* Detailed Information Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white/90 backdrop-blur-md rounded-xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                How ATAN Works
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-purple transition-colors"
              >
                <IoClose size={24} />
              </button>
            </div>

            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">
                  Connecting Talent with Opportunity
                </h4>
                <p>
                  Our platform creates meaningful connections between technical
                  graduates and SMEs looking to grow. Through our structured
                  12-month full-time apprenticeships, graduates gain hands-on
                  experience while SMEs benefit from fresh perspectives and
                  technical expertise.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">
                  Financial Support
                </h4>
                <p>
                  With cost-sharing support for businesses and living stipends
                  for apprentices, ATAN creates a sustainable model that works
                  for everyone involved. This approach ensures that financial
                  barriers don't prevent talented graduates from accessing
                  opportunities or SMEs from accessing talent.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">
                  Our Impact
                </h4>
                <p>
                  Building on the success of our PFS pilot program, ATAN
                  achieves job placement rates of over 80% for apprentices, with
                  many securing full-time positions at their host companies
                  after the apprenticeship ends.
                </p>
                <p className="mt-2">
                  By bridging the skills gap between academia and industry,
                  we're not just building careers—we're strengthening businesses
                  and communities across Africa.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">
                  University Partnerships
                </h4>
                <p>
                  We partner with over 25 universities across Africa to prepare
                  graduates for industry challenges. These partnerships ensure
                  that our apprentices have the theoretical knowledge and
                  academic support needed to excel in their placements.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-purple text-white font-medium rounded-full hover:bg-purple/90 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default About;
