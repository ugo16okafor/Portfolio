import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Link, Element } from "react-scroll";

function Hero() {
  return (
    <Element name="about">
      <main className="flex h-screen justify-center mx-10">
        <section className="font-Montserrat grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 my-20 lg:my-0 lg:mx-10">
          {/* Profile Image */}
          <div className="flex justify-center items-center row-start-1 lg:row-start-1 lg:col-start-2">
            <div className="w-56 h-56 md:w-96 md:h-96 border-4 border-white rounded-full bg-amber-100 overflow-hidden">
              <img
                src="/assets/Profile.png"
                alt="Ugochukwu Okafor"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex justify-center lg:justify-start items-center row-start-2 lg:row-start-1 lg:col-start-1 lg:ml-10">
            <div className="flex-col text-center lg:text-start text-balance">
              <p className="text-4xl md:text-7xl text-blue-400 font-bold py-1">
                Ugochukwu Okafor
              </p>
              <p className="text-white text-2xl">
                <span className="text-blue-600 text-2xl md:text-4xl">
                  Frontend Developer
                </span>{" "}
                based in Nigeria. Creating{" "}
                <span className="text-blue-600 text-2xl md:text-4xl">
                  scalable responsive websites
                </span>
              </p>

              {/* Social Icons */}
              <ul className="flex justify-center lg:justify-start gap-5 text-3xl text-white py-4">
                <li>
                  <a
                    href="http://www.linkedin.com/in/ugochukwu-okafor16"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.linkedin.com/in/ugochukwu-okafor16"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:your.email@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGmail />
                  </a>
                </li>
              </ul>

              {/* Scroll Button */}
              <div className="mt-5">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-blue-400 text-xl hover:underline"
                >
                  See My Projects ↓
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Element>
  );
}

export default Hero;
