import { FaTerminal, FaGithub, FaLinkedin } from "react-icons/fa6";

function Home() {
  return (
    <div className="flex flex-col mb-24 pt-4 px-6">
      <div className="flex flex-row">
        <div className="flex items-center space-x-3">
          <FaTerminal className="text-blue-700 text-3xl font-bold" />
          <h1 className="text-3xl font-bold text-blue-700">Sevag Keosseian</h1>
        </div>
        <div className="flex gap-x-4 ml-auto items-center text-center">
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
      </div>
      <div className="flex flex-row mt-24">
        <div className="grid grid-rows-1 grid-cols-2 w-3/4 mx-auto items-center">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-blue-700 text-7xl text-center">
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
          <div className="flex bg-blue-500 p-4 rounded-lg shadow-md h-96 w-2/3 m-auto justify-center items-center">
            <p className="text-white">Put photo/cartoon here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
