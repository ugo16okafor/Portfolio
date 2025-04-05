import React from "react";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaTools,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

// Tech data array with icons and gradient backgrounds
const techData = [
  {
    id: 1,
    name: "React",
    bg: "bg-gradient-to-r from-blue-400 to-cyan-500",
    icon: <FaReact size={40} />,
  },
  {
    id: 2,
    name: "Tailwind CSS",
    bg: "bg-gradient-to-r from-teal-400 to-blue-500",
    icon: <SiTailwindcss size={40} />,
  },
  {
    id: 3,
    name: "JavaScript",
    bg: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    icon: <FaJsSquare size={40} />,
  },
  {
    id: 4,
    name: "HTML",
    bg: "bg-gradient-to-r from-orange-400 to-red-500",
    icon: <FaHtml5 size={40} />,
  },
  {
    id: 5,
    name: "CSS",
    bg: "bg-gradient-to-r from-blue-300 to-indigo-500",
    icon: <FaCss3Alt size={40} />,
  },
  {
    id: 6,
    name: "A.I Tools",
    bg: "bg-gradient-to-r from-purple-500 to-pink-500",
    icon: <FaTools size={40} />,
  },
];

// Individual card component
const Tech = ({ name, bg, icon }) => {
  return (
    <div
      className={`${bg} text-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-lg font-semibold transform hover:scale-105 transition-transform duration-300`}
    >
      <div className="mb-3">{icon}</div>
      {name}
    </div>
  );
};

// Main list component
const TechList = () => {
  return (
    <div className="h-auto bg-gray-100 py-12 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Tech Stack
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {techData.map((tech) => (
          <Tech key={tech.id} {...tech} />
        ))}
      </div>
    </div>
  );
};

export default TechList;
