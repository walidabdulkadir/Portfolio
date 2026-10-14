import { BsArrowRight, BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

function ProjectCard({ id, title, description, tags, image, liveUrl, repoUrl }) {
  return (
    <div className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-teal hover:shadow-[0_12px_30px_rgba(90,170,155,0.15)]">

      {/* Thumbnail */}
      <div className="relative h-[200px] bg-teal-light border-b border-border overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-mono text-[3rem] font-bold text-teal opacity-20">{id}</span>
          </div>
        )}
        {/* Project number badge */}
        <div className="absolute top-4 left-4 font-mono text-[13px] font-bold text-teal bg-bg px-2 py-1 rounded-md border border-border z-10">
          {id}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-7">

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] font-bold tracking-[0.05em] text-teal px-3 py-1 rounded-full border border-teal-mid bg-teal-light"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed flex-1 mb-6">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border pt-5 mt-auto">
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted transition-all duration-300 hover:border-teal hover:text-teal hover:bg-teal-light"
            >
              <BsGithub size={16} />
            </a>
            {/* Live */}
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted transition-all duration-300 hover:border-teal hover:text-teal hover:bg-teal-light"
            >
              <BsBoxArrowUpRight size={14} />
            </a>
          </div>

          {/* Arrow */}
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-primary transition-all duration-300 hover:border-teal hover:bg-teal hover:text-btn-text hover:translate-x-1"
          >
            <BsArrowRight size={16} />
          </a>
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;
