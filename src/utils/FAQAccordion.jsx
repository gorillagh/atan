// src/sections/ToolsSection/FAQAccordion.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the ATAN apprenticeship program?",
      answer:
        "ATAN connects talented recent graduates with SMEs across Africa for hands-on apprenticeships, typically lasting 3-12 months. These programs bridge the gap between academic knowledge and real-world industry skills.",
    },
    {
      question: "How do employers benefit from hiring apprentices?",
      answer:
        "SMEs gain access to pre-screened, skilled graduates ready to contribute, reducing recruitment costs and training time. Apprenticeships often lead to full-time hires, offering a strong ROI while supporting Africa's workforce development.",
    },
    {
      question: "What role do universities play in ATAN?",
      answer:
        "Universities partner with ATAN to align curricula with industry needs, connect students to SME apprenticeship opportunities, and boost graduate employment rates.",
    },
    {
      question: "Who can apply to be an apprentice?",
      answer:
        "Recent graduates and early-career professionals in technical fields across Africa can apply. Candidates need a relevant degree or diploma, strong academics, and a passion for their field.",
    },
    {
      question: "What is the application process?",
      answer:
        "Apply online, complete a technical assessment, and interview. Successful candidates are matched with SMEs based on skills and interests.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
    >
      {/* <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h3> */}

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-900 hover:bg-gray-50 focus:outline-none"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-gray-50 border-t border-gray-100"
              >
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQAccordion;
