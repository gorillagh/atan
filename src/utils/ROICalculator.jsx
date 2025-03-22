// src/sections/ToolsSection/ROICalculator.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const ROICalculator = () => {
  const [apprentices, setApprentices] = useState(1);
  const [duration, setDuration] = useState(12);
  const [salary, setSalary] = useState(1500);

  // Calculate ROI
  const trainingCost = apprentices * 500; // $500 per apprentice for training
  const totalSalary = apprentices * salary * (duration / 12); // Pro-rated salary cost
  const productivityGain = totalSalary * 1.3; // Assume 30% productivity gain
  const totalCost = trainingCost + totalSalary;
  const totalBenefit = productivityGain;
  const roi = ((totalBenefit - totalCost) / totalCost) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">ROI Calculator</h3>
      <p className="text-gray-600 mb-6">
        Estimate the return on investment for hiring ATAN apprentices at your
        organization.
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Apprentices
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={apprentices}
            onChange={(e) => setApprentices(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>1</span>
            <span>{apprentices}</span>
            <span>10</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Program Duration (months)
          </label>
          <input
            type="range"
            min="3"
            max="24"
            step="3"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>3</span>
            <span>{duration}</span>
            <span>24</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Salary per Apprentice ($)
          </label>
          <input
            type="range"
            min="1000"
            max="3000"
            step="100"
            value={salary}
            onChange={(e) => setSalary(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>$1,000</span>
            <span>${salary.toLocaleString()}</span>
            <span>$3,000</span>
          </div>
        </div>

        <div className="bg-burgundy/5 p-4 rounded-lg mt-8">
          <h4 className="font-bold text-gray-900 mb-4">Your Estimated ROI</h4>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-md">
              <span className="text-sm text-gray-600">Training Cost</span>
              <p className="text-xl font-bold text-gray-900">
                ${trainingCost.toLocaleString()}
              </p>
            </div>
            <div className="bg-white p-3 rounded-md">
              <span className="text-sm text-gray-600">Salary Cost</span>
              <p className="text-xl font-bold text-gray-900">
                ${totalSalary.toLocaleString()}
              </p>
            </div>
            <div className="bg-white p-3 rounded-md">
              <span className="text-sm text-gray-600">Productivity Value</span>
              <p className="text-xl font-bold text-gray-900">
                ${productivityGain.toLocaleString()}
              </p>
            </div>
            <div className="bg-white p-3 rounded-md">
              <span className="text-sm text-gray-600">Net Benefit</span>
              <p className="text-xl font-bold text-gray-900">
                ${(totalBenefit - totalCost).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="mt-4 bg-burgundy text-white p-4 rounded-md text-center">
            <span className="block text-sm">Return on Investment</span>
            <p className="text-3xl font-bold">{roi.toFixed(1)}%</p>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            * This calculator provides an estimate only. Actual results may vary
            based on industry, location, and specific organizational factors.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ROICalculator;
