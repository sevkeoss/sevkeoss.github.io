import { FaTerminal, FaGithub, FaLinkedin } from "react-icons/fa6";
import { GrMenu } from "react-icons/gr";
import { useState } from "react";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col mb-12 md:mb-24 pt-4 px-6">
      <div className="flex flex-row items-center">
        <div className="flex items-center space-x-3">
          <FaTerminal className="text-blue-700 font-bold text-xl md:text-3xl" />
          <h1 className="text-blue-700 font-bold text-xl md:text-3xl">
            Sevag Keosseian
          </h1>
        </div>
        <div className="hidden md:flex gap-x-4 ml-auto items-center text-center">
          <a href="#Experience" className="nav-link">
            Experience
          </a>
          <a href="#Projects" className="nav-link">
            Projects
          </a>
          <a href="#TechStack" className="nav-link">
            Tech Stack
          </a>
        </div>
        <div className="ml-auto md:hidden">
          <GrMenu className="text-2xl" onClick={toggleMenu} />
          {menuOpen && (
            <div className="flex flex-col absolute right-2 bg-white border rounded-lg shadow-lg">
              <a
                href="#Experience"
                className="px-4 py-2 hover:bg-slate-100"
                onClick={toggleMenu}
              >
                Experience
              </a>
              <a
                href="#Projects"
                className="px-4 py-2 hover:bg-slate-100"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="#TechStack"
                className="px-4 py-2 hover:bg-slate-100"
                onClick={toggleMenu}
              >
                Tech Stack
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-evenly md:flex-row items-center mt-8 md:mt-24">
        <div className="flex flex-col mb-4 md:mb-0">
          <h1 className="text-blue-700 text-4xl md:text-6xl lg:text-7xl">
            Software Engineer
          </h1>
          <div className="flex flex-row justify-center">
            <a
              href="https://github.com/sevkeoss?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="media-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/sevag-keosseian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="media-icon" />
            </a>
          </div>
        </div>
        <div className="flex bg-blue-500 p-4 rounded-lg shadow-md h-96 items-center">
          <p className="text-white">Put photo/cartoon here</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
