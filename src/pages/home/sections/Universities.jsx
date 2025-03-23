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
      "Prepare your students for industry success by connecting with SMEs and offering real-world opportunities.",
    features: [
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Industry-Relevant Skills",
        description: "Align curriculum with SME needs for job-ready graduates.",
      },
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Real-World Experience",
        description:
          "Provide students with hands-on apprenticeship opportunities.",
      },
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Boost Employment Rates",
        description: "Improve graduate outcomes through SME partnerships.",
      },
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Collaborative Research",
        description: "Engage in joint projects with industry for innovation.",
      },
    ],
    ctaText: "Join as a University Partner",
    bgColor: "bg-white",
    image: "for_universities.webp",
    ctaLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfLAqoxl6C4PRUGSyvGPhcd3vA0N_nZ-M4O1WmTnwy8jaYNsQ/viewform",
  };

  return <Audience {...universitiesContent} />;
};

export default Universities;
