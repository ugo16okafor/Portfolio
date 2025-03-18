import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Projects from "./projects";

const Body = () => {
  const profileImage = ""; // Add your image URL here, or leave empty for placeholder

  return (
    <main className="flex flex-col font-Montserrat bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center items-center px-6 md:px-20 text-center">
        
        {/* Profile Picture Placeholder */}
        <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-700 flex justify-center items-center mb-6">
          <img
            src={profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="py-6 md:py-9">
          <h1 className="text-3xl md:text-5xl font-bold pb-6">
            Hi,👋 I'm Ugochukwu Okafor
          </h1>
          <p className="text-lg md:text-2xl leading-relaxed">
            Web developer based in Nigeria. Building full-stack cross-platform
            solutions with React.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="py-10 md:py-20 text-center">
          <h1 className="text-2xl md:text-3xl py-5">My tech stack</h1>
          <div className="flex flex-wrap justify-center gap-10 text-lg md:text-2xl">
            <p className="flex items-center gap-2">
              <RiTailwindCssFill /> Tailwind
            </p>
            <p className="flex items-center gap-2">
              <FaReact /> React
            </p>
            <p className="flex items-center gap-2">
              <SiJavascript /> JavaScript
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="Projects" className="flex flex-col items-center justify-center h-screen p-6 md:p-10">
        <div className="text-center text-xl md:text-2xl">
          <h1 className="mb-6">Projects I have worked on</h1>
          <Projects />
        </div>
      </section>
    </main>
  );
};

export default Body;
