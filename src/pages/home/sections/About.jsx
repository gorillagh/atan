import React from "react";
import { motion } from "framer-motion";
import { BsCheck2Circle } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            About <span className="text-burgundy">ATAN</span>
          </motion.h2>
          <div className="w-20 h-1 bg-burgundy mx-auto mt-4 mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An initiative by the Global Development Incubator (GDI) to bridge
            the gap between technical education and employment in Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              ATAN aims to foster technical skills development and create
              meaningful employment opportunities across Africa by connecting
              key stakeholders in the tech ecosystem.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 mb-6">
              To build a sustainable pathway for African youth to acquire
              relevant technical skills and secure quality jobs in the growing
              digital economy.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-3">Key Objectives</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <BsCheck2Circle className="text-burgundy mt-1 mr-2 flex-shrink-0" />
                  <span>
                    Bridge the skill gap between technical education and
                    industry requirements
                  </span>
                </li>
                <li className="flex items-start">
                  <BsCheck2Circle className="text-burgundy mt-1 mr-2 flex-shrink-0" />
                  <span>
                    Create sustainable apprenticeship programs with leading
                    employers
                  </span>
                </li>
                <li className="flex items-start">
                  <BsCheck2Circle className="text-burgundy mt-1 mr-2 flex-shrink-0" />
                  <span>
                    Strengthen university partnerships to enhance curriculum
                    relevance
                  </span>
                </li>
                <li className="flex items-start">
                  <BsCheck2Circle className="text-burgundy mt-1 mr-2 flex-shrink-0" />
                  <span>
                    Provide ongoing mentorship and career development support
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm shadow-lg border border-white/50 relative">
              {/* Replace with actual image showing ATAN's impact */}
              <div className="absolute inset-0 bg-[url('/api/placeholder/600/400')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-burgundy/30"></div>
            </div>

            <div className="mt-8 bg-white rounded-lg p-6 shadow-lg border border-gray-100 relative">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Impact Numbers
              </h3>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-burgundy">500+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Apprentices Placed
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-burgundy">50+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Employer Partners
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-burgundy">25+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    University Partners
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-burgundy">12</div>
                  <div className="text-sm text-gray-600 mt-1">
                    African Countries
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-10 opacity-70"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
