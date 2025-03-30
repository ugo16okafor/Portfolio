import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { Link } from "react-scroll"; // Fixed import
import DownloadButton from "./ResumeBtn";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between px-10 w-full fixed top-0 bg-gray-950/70 backdrop-blur-md shadow-lg py-4 font-Montserrat">
      {/* Logo */}
      <div className="text-white flex items-center">
        <h1 className="text-2xl">UO</h1>
      </div>

      {/* Desktop Links */}
      <nav className="xl:flex hidden items-center text-white">
        <ul className="flex gap-9">
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button & Download Button */}
      <div className="flex items-center text-white">
        {/* Mobile Menu Toggle */}
        <button className="xl:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <RxCross2 className="text-3xl absolute top-5 right-5 z-50" />
          ) : (
            <CiMenuBurger className="text-3xl" />
          )}
        </button>

        {/* Desktop Download Button */}
        <div className="hidden lg:flex">
          <DownloadButton fileUrl="/Files/resume.txt" fileName="resume.txt" />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 w-3/4 h-screen bg-gray-950/95 text-white py-16 px-10">
            <ul className="space-y-10 text-center">
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <DownloadButton
                  fileUrl="/Files/resume.txt"
                  fileName="resume.txt"
                />
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
