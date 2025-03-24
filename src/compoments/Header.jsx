import { CiMenuBurger } from "react-icons/ci";
import { IoMdDownload } from "react-icons/io";
import { useState } from "react";

function Header() {
  const [ismenuOpen, setmenuOPen] = useState(false);
  return (
    <header className=" flex justify-between left-0 px-10 w-full fixed top-0 bg-gray-950/70 backdrop-blur-md shadow-lg py-4 font-Montserrat">
      {/* logo */}
      <div className=" text-white items-center flex">
        <h1 className="text-2xl">UO</h1>
      </div>
      {/* links */}
      <div className="xl:flex hidden items-center text-white">
        <ul className="flex gap-9">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* burger & button */}
      <div className="flex items-center text-white ">
        <button className=" xl:hidden" onClick={() => setmenuOPen(!ismenuOpen)}>
          <CiMenuBurger className="text-3xl"></CiMenuBurger>
        </button>
        {/* button */}
        <button className="hidden xl:flex text-md bg-blue-800 text-white px-4 p-2 rounded-full">
          <a href="" className="flex items-center gap-2 ">
            <IoMdDownload />
            Resume
          </a>
        </button>

        {ismenuOpen && (
          <ul className="md:hidden h-screen absolute top-16 inset-0 bg-gray-950/95 border-b text-white border-blue-600 py-16 text-center space-y-5">
            <li>
              <a href="#about" onClick={() => setmenuOPen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setmenuOPen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setmenuOPen(false)}>
                Contact
              </a>
            </li>
            <li>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full transition">
                Resume
              </button>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
