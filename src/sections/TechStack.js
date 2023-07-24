import {
  SiReact,
  SiTailwindcss,
  SiCplusplus,
  SiSpring,
  SiKubernetes,
} from "react-icons/si";
import {
  FaNodeJs,
  FaJava,
  FaPython,
  FaGolang,
  FaRust,
  FaAws,
  FaDocker,
} from "react-icons/fa6";

function TechStack() {
  return (
    <div id="TechStack" className="flex flex-col bg-slate-100 py-10 space-y-4">
      <h1 className="text-center text-blue-700 text-4xl font-bold">
        Tech Stack
      </h1>
      <h2 className="text-center text-2xl font-semibold">Frontend</h2>
      <div className="flex flex-row m-auto gap-4">
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <SiReact className="tech-icon" />
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTailwindcss className="tech-icon" />
        </a>
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
          <FaNodeJs className="tech-icon" />
        </a>
      </div>
      <h2 className="text-center text-2xl font-semibold">Backend</h2>
      <div className="flex flex-row m-auto gap-4">
        <a href="https://dev.java/" target="_blank" rel="noopener noreferrer">
          <FaJava className="tech-icon" />
        </a>
        <a
          href="https://www.python.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPython className="tech-icon" />
        </a>
        <a
          href="https://www.rust-lang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRust className="tech-icon" />
        </a>
        <a href="https://go.dev/" target="_blank" rel="noopener noreferrer">
          <FaGolang className="tech-icon" />
        </a>
        <a
          href="https://cplusplus.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiCplusplus className="tech-icon" />
        </a>
      </div>
      <h2 className="text-center text-2xl font-semibold">Technologies</h2>
      <div className="flex flex-row m-auto gap-4">
        <a
          href="https://aws.amazon.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaAws className="tech-icon" />
        </a>
        <a href="https://spring.io/" target="_blank" rel="noopener noreferrer">
          <SiSpring className="tech-icon" />
        </a>
        <a
          href="https://www.docker.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDocker className="tech-icon" />
        </a>
        <a
          href="https://kubernetes.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiKubernetes className="tech-icon" />
        </a>
      </div>
    </div>
  );
}

export default TechStack;
