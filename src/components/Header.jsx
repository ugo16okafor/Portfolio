import { useState } from "react";
import { Link } from "react-scroll";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import DownloadButton from "./ResumeBtn";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/70 backdrop-blur-md shadow-lg py-4 px-10 font-Montserrat">
      <div className="flex justify-between items-center text-white">
        {/* Logo */}
        <h1 className="text-2xl font-bold">UO</h1>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex gap-9">
          <Link
            to="about"
            smooth
            duration={500}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth
            duration={500}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side: Download Button + Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Desktop Download Button */}
          <div className="hidden lg:block">
            <DownloadButton fileUrl="/Files/resume.txt" fileName="resume.txt" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-3xl"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <CiMenuBurger />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-screen z-40 bg-gray-950/95 text-white px-10 py-8">
          {/* Close Icon */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-3xl z-50"
            aria-label="Close Menu"
          >
            <RxCross2 />
          </button>

          {/* Menu Links */}
          <ul className="mt-20 space-y-10 text-center text-xl">
            <li>
              <Link
                to="about"
                smooth
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth
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
    </header>
  );
}

export default Header;
