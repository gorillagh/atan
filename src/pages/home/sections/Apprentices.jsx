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
      "Launch your career by gaining hands-on experience with Africa’s leading SMEs.",
    features: [
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Real-World Skills",
        description: "Learn by doing in structured SME apprenticeships.",
      },
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Expert Mentorship",
        description: "Get guidance from industry professionals.",
      },
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Career Opportunities",
        description: "Turn your apprenticeship into a full-time role.",
      },
      {
        icon: <BsCheck2Circle size={20} />,
        title: "Build Connections",
        description: "Network with peers and tech leaders across Africa.",
      },
    ],
    ctaText: "Apply as an Apprentice",
    bgColor: "bg-gray-50",
    image: "for_employers.webp",
    ctaLink:
      "https://docs.google.com/forms/d/1QqaMzo8JNZzq_HW-NbF4Whykbf1BuKmKTRXm9qEC2N8/viewform?ts=6798a257&edit_requested=true",
  };

  return <Audience {...apprenticesContent} />;
};

export default Apprentices;
