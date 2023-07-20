import { FaTerminal } from "react-icons/fa";

function Home() {
  const scrollToDiv = () => {
    const targetDiv = document.getElementById("Projects");
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row px-5">
        <div className="flex items-center space-x-3">
          <FaTerminal className="text-blue-700 text-3xl font-bold" />
          <h1 className="text-3xl font-bold text-blue-700">Sevag Keosseian</h1>
        </div>
        <div className="flex gap-x-4 ml-auto items-center text-center">
          <a
            href="#Experience"
            className="text-xl font-semibold"
            onClick={scrollToDiv}
          >
            Experience
          </a>
          <a href="#Projects" className="text-xl font-semibold">
            Projects
          </a>
          <a href="#" className="text-xl font-semibold">
            Tech Stack
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
