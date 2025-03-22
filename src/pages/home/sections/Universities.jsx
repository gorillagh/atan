// src/sections/UniversitiesSection.jsx
import React from "react";
import { FaUniversity } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import Audience from "./Audience";

const Universities = () => {
  const universitiesContent = {
    id: "universities",
    title: "Universities",
    icon: FaUniversity,
    description:
      "Enhance your curriculum relevance, provide industry exposure to students, and improve graduate employment outcomes through ATAN partnerships.",
    features: [
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Industry-Aligned Curriculum",
        description:
          "Collaborate with employers to ensure curriculum meets current industry demands.",
      },
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Student Opportunities",
        description:
          "Create pathways for students to gain practical experience before graduation.",
      },
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Improved Graduate Outcomes",
        description:
          "Increase employment rates for graduates through structured apprenticeship programs.",
      },
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Research Partnerships",
        description:
          "Develop joint research initiatives with industry partners through ATAN connections.",
      },
    ],
    ctaText: "Partner with ATAN",
    bgColor: "bg-white",
    image: "/universities-image.jpg",
  };

  return <Audience {...universitiesContent} />;
};

export default Universities;
