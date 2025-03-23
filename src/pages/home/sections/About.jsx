import React from "react";
import { motion } from "framer-motion";
import { BsCheck2Circle } from "react-icons/bs";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-burgundy/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About <span className="text-burgundy font-extrabold">ATAN</span>
            </h2>
            <div className="w-full h-1.5 bg-burgundy mt-3 rounded-full"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto mt-8 leading-relaxed"
          >
            An initiative by the Global Development Incubator (GDI) to connect
            talented recent graduates with SMEs across Africa for growth and
            impact.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 inline-block border-b-3 border-burgundy pb-1">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mt-2">
                ATAN connects employers, universities, and apprentices to unlock
                opportunities, drive growth, and build a brighter future for
                Africa's workforce.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 inline-block border-b-3 border-burgundy pb-1">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mt-2">
                To empower Africa's SMEs by providing access to a diverse pool
                of skilled graduates, fostering innovation and sustainable
                development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all hover:shadow-xl">
              <h4 className="font-bold text-xl text-gray-900 mb-5 border-l-4 border-burgundy pl-4">
                Key Objectives
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Match SMEs with talented recent graduates eager to make a
                    difference
                  </span>
                </li>
                <li className="flex items-start">
                  <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Offer cost-effective recruitment through apprenticeship
                    programs
                  </span>
                </li>
                <li className="flex items-start">
                  <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Partner with universities to prepare graduates for industry
                    challenges
                  </span>
                </li>
                <li className="flex items-start">
                  <BsCheck2Circle className="text-burgundy text-xl mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Support apprentices with training and career development
                    opportunities
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
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl relative">
              {/* Using img tag instead of background for better cross-device compatibility */}
              <img
                src="/about_image.webp"
                alt="ATAN's impact in Africa"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-burgundy/40"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 bg-white rounded-xl p-8 shadow-xl border border-gray-100 relative transform -translate-y-6 mx-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Impact Numbers
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-5 bg-burgundy/5 rounded-lg border border-burgundy/10 transform transition-all hover:scale-105 duration-300">
                  <div className="text-4xl font-extrabold text-burgundy">
                    500+
                  </div>
                  <div className="text-gray-700 font-medium mt-2">
                    Graduates Connected
                  </div>
                </div>
                <div className="text-center p-5 bg-burgundy/5 rounded-lg border border-burgundy/10 transform transition-all hover:scale-105 duration-300">
                  <div className="text-4xl font-extrabold text-burgundy">
                    50+
                  </div>
                  <div className="text-gray-700 font-medium mt-2">
                    SME Partners
                  </div>
                </div>
                <div className="text-center p-5 bg-burgundy/5 rounded-lg border border-burgundy/10 transform transition-all hover:scale-105 duration-300">
                  <div className="text-4xl font-extrabold text-burgundy">
                    25+
                  </div>
                  <div className="text-gray-700 font-medium mt-2">
                    University Partners
                  </div>
                </div>
                <div className="text-center p-5 bg-burgundy/5 rounded-lg border border-burgundy/10 transform transition-all hover:scale-105 duration-300">
                  <div className="text-4xl font-extrabold text-burgundy">
                    12
                  </div>
                  <div className="text-gray-700 font-medium mt-2">
                    African Countries
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
