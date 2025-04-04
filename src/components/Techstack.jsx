import React from "react";

// Tech data array
const techData = [
  { id: 1, name: "React" },
  { id: 2, name: "Tailwind CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "HTML" },
  { id: 5, name: "CSS" },
  { id: 6, name: "A.I Tools" },
];

// Individual card component
const Tech = ({ name }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex items-center justify-center text-gray-800 text-lg font-semibold hover:shadow-lg transition-all duration-300">
      {name}
    </div>
  );
};

// Main list component
const TechList = () => {
  return (
    <div className="h-auto bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
        Tech Stack
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {techData.map((tech) => (
          <Tech key={tech.id} {...tech} />
        ))}
      </div>
    </div>
  );
};

export default TechList;
