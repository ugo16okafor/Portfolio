import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5"; // Import X (Close) Icon

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between font-Montserrat items-center">
      <h1 className="text-3xl font-bold">U.O</h1>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex">
        <ul className="space-x-6 flex">
          <li><a href="about" className="hover:text-gray-400">About</a></li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("Projects").scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-gray-400"
            >
              Projects
            </a>
          </li>
          <li><a href="contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>

      {/* Resume Button & Hamburger Icon */}
      <div className="flex items-center">
        <a href="/resume.pdf" download className="bg-black text-white px-4 py-2 rounded-xl hidden lg:block">
          Download Resume
        </a>

        {/* Hamburger Menu Button */}
        <button onClick={() => setOpen(!isOpen)} className="lg:hidden ml-4 bg-gray-900 text-white">
          <RxHamburgerMenu className="text-3xl" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center 
          space-y-6 text-lg lg:hidden transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* X Button to Close Menu */}
        <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-3xl">
          <IoClose />
        </button>

        <a href="about" className="hover:text-gray-400 py-3 w-4/5 text-center" onClick={() => setOpen(false)}>About</a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("Projects").scrollIntoView({ behavior: "smooth" });
            setOpen(false);
          }}
          className="hover:text-gray-400 py-3 w-4/5 text-center"
        >
          Projects
        </a>
        <a href="contact" className="hover:text-gray-400 py-3 w-4/5 text-center" onClick={() => setOpen(false)}>Contact</a>
        <a href="/resume.pdf" download className="bg-black text-white px-6 py-3 rounded-xl w-4/5 text-center" onClick={() => setOpen(false)}>
          Download Resume
        </a>
      </div>
    </header>
  );
}
