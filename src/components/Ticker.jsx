import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiMysql,
  SiBootstrap,
  SiGit,
  SiTypescript,
  SiPython,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const SKILLS = [
  { label: "JAVASCRIPT",  icon: <SiJavascript  size={15} /> },
  { label: "REACT",       icon: <SiReact       size={15} /> },
  { label: "NODE.JS",     icon: <SiNodedotjs   size={15} /> },
  { label: "EXPRESS",     icon: <SiExpress     size={15} /> },
  { label: "TAILWIND",    icon: <SiTailwindcss size={15} /> },
  { label: "HTML",        icon: <SiHtml5       size={15} /> },
  { label: "CSS",         icon: <SiCss         size={15} /> },
  { label: "SQL",         icon: <SiMysql       size={15} /> },
  { label: "BOOTSTRAP",   icon: <SiBootstrap   size={15} /> },
  { label: "GIT",         icon: <SiGit         size={15} /> },
  { label: "REST APIs",   icon: <TbApi         size={15} /> },
  { label: "TYPESCRIPT",  icon: <SiTypescript  size={15} /> },
  { label: "Python" ,     icon: <SiPython      size={15}/>  },
];

function TickerTrack() {
  return (
    <div className="flex items-center shrink-0">
      {SKILLS.map(({ label, icon }) => (
        <span
          key={label}
          className="flex items-center gap-2 font-mono text-[13px] font-bold tracking-[0.15em] text-primary whitespace-nowrap px-10"
        >
          {/* dot separator */}
          <span className="text-teal font-black mr-6">·</span>
          <span className="text-teal">{icon}</span>
          {label}
        </span>
      ))}
    </div>
  );
}

function Ticker() {
  return (
    <div className="overflow-hidden border-t border-b border-border bg-teal-light py-[18px] flex items-center">
      <div className="flex animate-ticker">
        <TickerTrack />
        <TickerTrack />
      </div>
    </div>
  );
}

export default Ticker;
