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
      "Unlock your SME’s potential by connecting with talented recent graduates eager to make a difference.",
    features: [
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Skilled Graduates",
        description: "Access pre-screened talent ready to contribute.",
      },
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Cost-Effective Hiring",
        description: "Save on recruitment with tailored apprenticeships.",
      },
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Diverse Talent Pool",
        description: "Hire from across Africa for fresh perspectives.",
      },
      {
        icon: <FaCalculator size={20} />,
        title: "Measure ROI",
        description: "Use our tool to calculate your hiring benefits.",
      },
    ],
    ctaText: "Join as an SME Partner",
    bgColor: "bg-gray-100",
    image: "for_apprentices",
    ctaLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfLAqoxl6C4PRUGSyvGPhcd3vA0N_nZ-M4O1WmTnwy8jaYNsQ/viewform",
  };

  return <Audience {...employersContent} />;
};

export default Employers;
