// src/sections/EmployersSection.jsx
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { FaCalculator } from "react-icons/fa";
import Audience from "./Audience";
const Employers = () => {
  const employersContent = {
    id: "employers",
    title: "Employers",
    icon: FaBriefcase,
    description:
      "Partner with ATAN to access pre-screened technical talent, reduce recruitment costs, and contribute to workforce development across Africa.",
    features: [
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Access Vetted Talent",
        description:
          "All apprentices undergo rigorous technical assessments and soft skills evaluations.",
      },
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Reduce Recruitment Costs",
        description:
          "Save on traditional hiring while training future employees aligned with your specific needs.",
      },
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Improve Diversity",
        description:
          "Expand your talent pool with diverse candidates from across the African continent.",
      },
      {
        icon: <FaCalculator size={20} />,
        title: "Compelling ROI",
        description:
          "Calculate your potential return on investment with our interactive tool.",
      },
    ],
    ctaText: "Become an Employer Partner",
    bgColor: "bg-gray-50",
    image: "/employer-image.jpg",
  };

  return <Audience {...employersContent} />;
};

export default Employers;
