import Card from "./projectscard";
import { Link, Element } from "react-scroll";

const Projects = () => {
  return (
    <section name="projects">
      <div className="mx-10 py-14 font-Montserrat flex-col lg:flex-col justify-center">
        <div className="flex justify-center text-2xl text-blue-500 py-5">
          <h1>Featured Projects</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 overflow-x-auto px-5">
          <Card
            title="Portfolio Website"
            description="A personal portfolio showcasing my projects and skills."
            image="/assets/port.png"
            link="https://ugodevs.vercel.app"
          />
          <Card
            title="Heart Finder"
            description="A romance-based game made using JavaScript."
            image="/assets/heartfinder.png"
            link="https://heart-finder.vercel.app"
          />
          <Card
            title="Task Manager"
            description="A task management web app for better productivity."
            image="/assets/taskmanager.png"
            link="https://task-manager.vercel.app"
          />
          <Card
            title="Weather App"
            description="A weather forecast app using OpenWeather API."
            image="/assets/weather.png"
            link="https://weather-app.vercel.app"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
