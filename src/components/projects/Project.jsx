import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./data";

function Project() {
  return (
    <section id="project" className="py-24 px-8 max-w-1100px mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono text-sm font-bold tracking-[0.25em] text-teal">
          PROJECTS
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-10">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Project;
