import experiences from "../content/experiences";

function Job({ experience }) {
  return (
    <div className="group h-auto p-6 bg-white scale-90 hover:scale-100 rounded-xl shadow-lg hover:bg-blue-900 hover:text-slate-100 ease-in-out duration-300">
      <h2 className="text-center text-blue-700 group-hover:text-sky-300 text-xl font-semibold">
        {experience.title} - {experience.company}
      </h2>
      <ul className="p-3 list-disc">
        {experience.description.map((task, i) => (
          <li key={i} className="text-lg font-normal">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  return (
    <div id="Experience" className="flex flex-col bg-slate-100 py-10 space-y-4">
      <h1 className="text-center text-blue-700 text-4xl font-bold">
        Professional Experience
      </h1>
      <div className="grid md:grid-cols-2 w-3/4 mx-auto gap-2">
        {experiences.map((experience, i) => (
          <Job key={i} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
