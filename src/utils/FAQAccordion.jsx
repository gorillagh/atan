// src/sections/ToolsSection/FAQAccordion.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the ATAN apprenticeship program?",
      answer:
        "The ATAN apprenticeship program connects talented African technical talent with employers for structured, hands-on training opportunities. The program typically lasts 3-12 months and focuses on bridging the gap between academic knowledge and practical industry skills.",
    },
    {
      question: "How do employers benefit from hiring apprentices?",
      answer:
        "Employers benefit by accessing pre-screened talent, reducing recruitment costs, training future employees aligned with their specific needs, and contributing to workforce development in Africa. Many employers report significant ROI from converting apprentices into full-time employees.",
    },
    {
      question: "What role do universities play in ATAN?",
      answer:
        "Universities partner with ATAN to enhance curriculum relevance, provide industry exposure to students, and improve graduate employment outcomes. ATAN works with universities to identify promising candidates and create pathways for students to gain practical experience.",
    },
    {
      question: "Who can apply to be an apprentice?",
      answer:
        "ATAN apprenticeships are open to recent graduates and early-career professionals in technical fields across Africa. Candidates should have a degree or diploma in a relevant field, strong academic performance, and demonstrated interest in their chosen technical area.",
    },
    {
      question: "What is the application process?",
      answer:
        "The application process involves submitting an online application, completing a technical assessment, and participating in interviews. Successful candidates are matched with employer partners based on skills, interests, and employer needs.",
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
      className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h3>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-lg overflow-hidden"
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
