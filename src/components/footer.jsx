import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Ugochukwu Okafor. All rights reserved.
      </p>
      <div className="mt-2 flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/ugochukwu-okafor16"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <li className="flex">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=Hello&body=I%20wanted%20to%20reach%20out..."
            target="_blank"
          >
            <SiGmail />
          </a>
        </li>
      </div>
    </footer>
  );
};

export default Footer;
