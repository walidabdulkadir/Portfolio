import { BsGithub, BsInstagram, BsYoutube, BsTelegram, BsLinkedin } from "react-icons/bs";
import cv from "../assets/files/Walid_Abdulkadir_CV.pdf";

const SOCIAL_LINKS = [
  { icon: <BsInstagram size={18} />, href: "https://www.instagram.com/walidjr_10?igsh=dHdoMnc2aTdyeXN2", label: "Instagram" },
  { icon: <BsLinkedin size={18} />,   href: "https://linkedin.com/in/walid-abdulkadir-70529a2a2", label: "LinkedIn"   },
  { icon: <BsTelegram size={18} />,  href: "https://t.me/walidjr_10", label: "Telegram"  },
];

function Home() {
  return (
    <section
      id="home"
      className="pt-40 pb-20 px-8 max-w-[1100px] mx-auto"
    >
      <div className="flex flex-col items-start text-left gap-5">

        {/* Role */}
        <span className="font-mono text-lg font-bold tracking-[0.15em] text-teal">
          FULLSTACK DEVELOPER
        </span>

        {/* Heading */}
        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-primary">
          HI, I'M <br />
          <span className="text-teal">WALID ABDULKADIR</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-muted max-w-[650px] leading-relaxed">
         I turn ideas into <strong style={{ color: "var(--text)" }}>useful, reliable software</strong> — building everything from scalable backend systems to clean, responsive interfaces. I’m a Computer Science student passionate about learning, building, and solving real-world problems with technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-2">
          {/* GitHub */}
          <a
            href="https://github.com/walidabdulkadir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono font-bold text-[13px] tracking-[0.1em] px-6 py-3 rounded-md bg-teal text-btn-text border border-transparent transition-all duration-300 hover:bg-teal-dark hover:-translate-y-0.5 hover:shadow-lg"
          >
            <BsGithub size={16} /> GITHUB
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="inline-flex items-center font-mono font-bold text-[13px] tracking-[0.1em] px-6 py-3 rounded-md bg-transparent text-primary border border-border transition-all duration-300 hover:bg-teal-light hover:border-teal hover:text-teal hover:-translate-y-0.5"
          >
            CONTACT ME →
          </a>

         
        </div>

        {/* Social Icons */}
        <div className="flex gap-2.5 mt-4">
          {SOCIAL_LINKS.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border text-muted transition-all duration-300 hover:border-teal hover:text-teal hover:-translate-y-0.5 hover:bg-teal-light"
            >
              {icon}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Home;
