import React from "react";
import { motion } from "framer-motion";
import { FaCalculator } from "react-icons/fa";

const Audience = ({
  id,
  title,
  icon,
  description,
  features,
  ctaText,
  bgColor,
  image,
  ctaLink,
}) => {
  const Icon = icon;

  return (
    <section id={id} className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  flex-col lg:flex-row  items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon className="text-burgundy text-2xl" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                For <span className="text-burgundy">{title}</span>
              </h2>
            </div>

            <p className="text-xl text-gray-600 mb-8">{description}</p>

            <div className="space-y-6 mb-8">
              {features?.map((feature, index) => (
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

            <a
              href={ctaLink}
              target="_blank"
              className="inline-block px-8 py-3 bg-burgundy text-white font-medium rounded-md hover:bg-burgundy/90 transition-colors"
            >
              {ctaText}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden bg-white/40 backdrop-blur-md shadow-xl border border-white/50 aspect-[4/3]">
              {/* Replace with relevant image for each audience */}
              {id === "employers" ? (
                <div className="absolute inset-0 bg-[url(/for_employers.webp)] bg-cover bg-center"></div>
              ) : id === "apprentices" ? (
                <div className="absolute inset-0 bg-[url(/for_apprentices.webp)] bg-cover bg-center"></div>
              ) : (
                <div className="absolute inset-0 bg-[url(/for_universities.webp)] bg-cover bg-center"></div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-burgundy/40"></div>

              {/* Custom UI element for each section */}
              {id === "employers" && (
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/50">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <FaCalculator className="mr-2 text-burgundy" /> ROI
                    Calculator Preview
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
              )}

              {id === "universities" && (
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/50">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Partner Success Story
                  </h3>
                  <p className="text-sm text-gray-600 italic">
                    "Our partnership with ATAN has significantly improved
                    graduate employment rates and industry relevance of our
                    curriculum."
                  </p>
                  <p className="text-sm font-medium text-burgundy mt-2">
                    — Prof. Ada Johnson, University of Technology, Lagos
                  </p>
                </div>
              )}

              {id === "apprentices" && (
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/50">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Application Timeline
                  </h3>
                  <div className="flex justify-between text-sm">
                    <div className="text-center">
                      <div className="w-6 h-6 rounded-full bg-burgundy text-white flex items-center justify-center mx-auto">
                        1
                      </div>
                      <p className="mt-1">Apply</p>
                    </div>
                    <div className="text-center">
                      <div className="w-6 h-6 rounded-full bg-burgundy text-white flex items-center justify-center mx-auto">
                        2
                      </div>
                      <p className="mt-1">Interview</p>
                    </div>
                    <div className="text-center">
                      <div className="w-6 h-6 rounded-full bg-burgundy text-white flex items-center justify-center mx-auto">
                        3
                      </div>
                      <p className="mt-1">Match</p>
                    </div>
                    <div className="text-center">
                      <div className="w-6 h-6 rounded-full bg-burgundy text-white flex items-center justify-center mx-auto">
                        4
                      </div>
                      <p className="mt-1">Start</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
