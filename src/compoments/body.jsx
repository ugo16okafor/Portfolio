import { BsTwitterX, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Body(params) {
  return (
    <main className="flex h-screen justify-center mx-10">
      <section className="font-Montserrat grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 my-20 lg:my-0 lg:mx-10">
        <div className="flex justify-center row-start-1 items-center lg:row-start-1 lg:col-start-2">
          <div className="border-4 border-white rounded-full w-56 h-56 md:h-96 md:w-96 bg-amber-100 overflow-hidden">
            <img
              className="bg-cover bg-center"
              src="/assets/images/Profile.png"
              alt="pfp"
            />
          </div>
        </div>
        <div className="row-start-2 lg:row-start-1 flex justify-center lg:justify-start items-center rounded-2xl lg:col-start-1 lg:ml-10">
          <div className="flex-col text-center lg:text-start text-balance">
            <p className="text-4xl md:text-7xl text-blue-400  font-bold">
              Ugochukwu Okafor <br />
              <span className="text-2xl text-white">
                (uu-g-OH-ch-uu-k-w-uu Oak-af-or)
              </span>
            </p>
            <p className="text-white text-2xl">
              <span className="text-blue-600  text-2xl md:text-4xl">
                Frontend developer
              </span>{" "}
              based in Nigeria. Creating{" "}
              <span className="text-blue-600  text-2xl md:text-4xl">
                scalable responsive websites
              </span>
            </p>
            <ul className="flex text-3xl justify-center lg:justify-start text-white gap-5 py-4">
              
              <li>
                <a
                  href="http://www.linkedin.com/in/ugochukwu-okafor16"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=Hello&body=I%20wanted%20to%20reach%20out..."
                  target="_blank"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Body;
