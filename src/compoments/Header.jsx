import Body from "./body";

const Header =()=>{

    return (
        <header className="bg-white text-black py-4 px-6 flex justify-between items-center font-Montserrat">

          <h1 className="text-3xl font-bold">U.O</h1>
    
          {/* Navigation Links */}
          <nav>
            <ul className=" space-x-6 hidden lg:flex">
              <li><a href="about" className="hover:text-gray-400">About</a></li>
              <li>
              <a
                 href="#"
                 onClick={(e) => {
                   e.preventDefault();
                   document.getElementById("Projects").scrollIntoView({ behavior: "smooth" });
                 }}
                >               
                Projects
                </a>

              </li>
              <li><a href="contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>
    
          {/* Call to Action */}
          <a
            href="/resume.pdf"
            download
            className="bg-black text-white px-4 py-2 rounded-4xl"

          >
            Download Resume
          </a>
        </header>
      );

}

export default Header