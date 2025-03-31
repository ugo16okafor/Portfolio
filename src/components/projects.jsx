import Card from "./projectscard";
import { Link, Element } from "react-scroll";

const Projects = () => {
  return (
    <section name="projects">
      <div className="mx-10 py-14 font-Montserrat flex-col lg:flex-col justify-center ">
        <div className="flex justify-center text-2xl text-blue-500 py-5">
          <h1>Featured Projects</h1>
        </div>
        <div className="flex">
          <Card
            title="Portfolio Website"
            description="A personal portfolio showcasing my projects and skills."
            image="/assets/port.png"
            link="ugodevs.vercel.app"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
