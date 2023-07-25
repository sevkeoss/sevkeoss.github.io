import { useState } from "react";
import { useEffect } from "react";

function Project({ project }) {
  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group h-auto p-6 bg-slate-100 scale-90 hover:scale-100 rounded-xl shadow-lg hover:bg-blue-900 hover:text-slate-100 ease-in-out duration-300"
    >
      <h2 className="text-center text-blue-700 group-hover:text-sky-300 text-xl font-semibold">
        {project.name}
      </h2>
      <p className="mt-2 text-lg font-normal">{project.description}</p>
    </a>
  );
}

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const username = "sevkeoss";

    const getRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const data = await response.json();
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setProjects(data);
      } catch (error) {
        console.error("Error fetching public repositories:", error.message);
      }
    };

    getRepos();
  }, []);

  return (
    <div id="Projects" className="flex flex-col bg-white py-10 space-y-4">
      <h1 className="text-center text-blue-700 text-4xl font-bold">Projects</h1>
      <div className="grid md:grid-cols-2 w-3/4 mx-auto gap-2">
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
