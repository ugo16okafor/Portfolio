import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Link, Element } from "react-scroll"; // Corrected import

function Hero() {
  return (
    <Element name="about">
      <main className="flex h-screen justify-center mx-10">
        <section className="font-Montserrat grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 my-20 lg:my-0 lg:mx-10">
          {/* Profile Image */}
          <div className="flex justify-center row-start-1 items-center lg:row-start-1 lg:col-start-2">
            <div className="border-4 border-white rounded-full w-56 h-56 md:h-96 md:w-96 bg-amber-100 overflow-hidden">
              <img
                className="w-full h-full object-cover object-center" // Ensures proper image display
                src="/assets/Profile.png"
                alt="Ugochukwu Okafor"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="row-start-2 lg:row-start-1 flex justify-center lg:justify-start items-center rounded-2xl lg:col-start-1 lg:ml-10">
            <div className="flex-col text-center lg:text-start text-balance">
              <p className="text-4xl md:text-7xl text-blue-400 font-bold">
                Ugochukwu Okafor <br />
                <span className="text-2xl text-white">
                  (uu-g-OH-ch-uu-k-w-uu Oak-af-or)
                </span>
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

              {/* Social Links */}
              <ul className="flex text-3xl justify-center lg:justify-start text-white gap-5 py-4">
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

              {/* Scroll to Next Section */}
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
