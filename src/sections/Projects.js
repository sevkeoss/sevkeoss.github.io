import projects from "../content/projects";

function Project({ project }) {
  return (
    <button className="group h-36 bg-slate-100 scale-90 hover:scale-100 rounded-xl shadow-lg hover:bg-blue-900 hover:text-slate-100 ease-in-out duration-300">
      <h2 className="text-blue-700 group-hover:text-sky-300 text-xl font-semibold">
        {project.title}
      </h2>
      <p>{project.description}</p>
    </button>
  );
}

function Projects() {
  return (
    <div id="Projects" className="flex flex-col bg-white py-10 space-y-4">
      <h1 className="text-center text-blue-700 text-3xl font-bold">Projects</h1>
      <div className="grid grid-cols-2 w-3/4 mx-auto gap-2">
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;