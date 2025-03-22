// src/sections/ApprenticesSection.jsx
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import Audience from "./Audience";

const Apprentices = () => {
  const apprenticesContent = {
    id: "apprentices",
    title: "Apprentices",
    icon: FaGraduationCap,
    description:
      "Gain practical industry experience, build professional networks, and secure meaningful employment through ATAN's apprenticeship programs.",
    features: [
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Hands-on Experience",
        description:
          "Gain practical skills through structured apprenticeships with leading employers.",
      },
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Mentorship",
        description:
          "Access industry mentors who provide guidance throughout your apprenticeship.",
      },
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Employment Pathways",
        description:
          "Most apprenticeships lead to full-time employment opportunities.",
      },
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Professional Network",
        description:
          "Connect with peers and professionals across the African tech ecosystem.",
      },
    ],
    ctaText: "Apply for an Apprenticeship",
    bgColor: "bg-gray-50",
    image: "/apprentices-image.jpg",
  };

  return <Audience {...apprenticesContent} />;
};

export default Apprentices;
