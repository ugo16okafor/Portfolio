import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Projects from "./projects";

const Body =()=>{

    return(
        <main className="container mx-auto  flex-col font-Montserrat">
        <div className="h-screen flex-col ">
            <div className="py-9 pl-8 mx-20">
                <h1 className="text-7xl font-bold pb-10">
                  Hi,👋 <br />I'm  Ugochukwu Okafor
                </h1>
                <p className="text-2xl">Web developer based in Nigeria. Building full stack cross-platform solutions with React
                </p>
            </div>

            <div className="py-20 text-center">
                <h1 className="text-3xl py-7">My tech stack</h1>
                <div className="flex gap-20 justify-center text-2xl">
                <p className="flex items-center gap-2 ">
                    <RiTailwindCssFill />
                    Tailwind</p>
                    <p className="flex items-center gap-2">
                    <FaReact />
                    React</p>
                    <p className="flex items-center gap-2">
                    <SiJavascript />
                    Javascript</p>
                </div>
            </div>
        </div>


        <section id="Projects" className=" flex-col justify-center h-screen p-10">
            <div className="text-center text-2xl">
                <h1>
                    Projects i have worked on
                </h1>
                <Projects />
            </div>
        </section>
        </main>
    )
}

export default Body