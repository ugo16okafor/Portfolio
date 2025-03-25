import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import DownloadButton from "./ResumeBtn";
import { RxCross2 } from "react-icons/rx";

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
        <div className="hidden lg:flex" >
          <DownloadButton fileUrl="/Files/resume.txt" fileName="resume.txt" />
        </div>
        {ismenuOpen && (
          <ul className="md:hidden h-screen absolute top-16 inset-0 bg-gray-950/95 border-b text-white border-blue-600 py-16 text-center space-y-10">
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
              <div>
                <DownloadButton
                  fileUrl="/Files/resume.txt"
                  fileName="resume.txt"
                />
              </div>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
