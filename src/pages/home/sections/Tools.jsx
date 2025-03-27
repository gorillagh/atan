// src/sections/ToolsSection/index.jsx
import React from "react";
import { motion } from "framer-motion";
import ROICalculator from "../../../utils/ROICalculator";
import FAQAccordion from "../../../utils/FAQAccordion";

const Tools = () => {
  return (
    <section id="tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Frequently <span className="text-burgundy">Asked Questions</span>
          </motion.h2>
          <div className="w-20 h-1 bg-burgundy mx-auto mt-4 mb-6"></div>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resources to help employers, universities, and apprentices make
            informed decisions.
          </p> */}
        </div>

        <div className="flex flex-col gap-8">
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
};

export default Tools;
