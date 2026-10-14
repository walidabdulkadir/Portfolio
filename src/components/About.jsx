import cv from "../assets/files/Walid_Abdulkadir_CV.pdf";

function About() {
  return (
    <section id="about" className="py-24 px-8 max-w-[1100px] mx-auto">

      {/* Section label */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono text-sm font-bold tracking-[0.25em] text-teal">
          ABOUT ME
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Content */}
      <div className="max-w-[800px]">
        <h2 className="font-sans text-[2.2rem] font-bold text-primary mb-6">
          WHO AM I?
        </h2>

        <div className="flex flex-col gap-5 text-[17px] leading-[1.8] text-muted">
          <p>
            I'm <strong className="text-primary">Walid Abdulkadir</strong>, a
            Computer Science student at <strong className="text-primary">Wachemo University</strong> in
            Ethiopia, passionate about understanding how technology works and building software that
            solves real-world problems.
          </p>

          <p>
            I enjoy turning ideas into working applications, from designing intuitive user interfaces
            to developing backend systems and working with databases. My focus is on{" "}
            <strong className="text-primary">full-stack web development</strong>, with a growing
            interest in software engineering, system design, and the technologies that power modern
            applications.
          </p>

          <p>
            I'm a hands-on learner who believes the best way to grow as a developer is to build,
            experiment, break things, and figure out how to fix them. Every project is an opportunity
            to strengthen my problem-solving skills and explore something new.
          </p>

          <p>
            My goal is to become a software engineer who doesn't just write code, but understands the
            problems behind it and builds <strong className="text-primary">reliable, meaningful solutions</strong>.
          </p>

          <p>
            I'm curious by nature, driven by challenges, and always building toward what's next.
          </p>
        </div>

        {/* Resume button */}
        <a
          href={cv}
          download="Walid_Abdulkadir_CV.pdf"
          className="inline-flex items-center mt-8 font-mono font-bold text-[13px] tracking-[0.1em] px-6 py-3 rounded-md bg-teal text-btn-text border border-transparent transition-all duration-300 hover:bg-teal-dark hover:-translate-y-0.5 hover:shadow-lg"
        >
          VIEW RESUME ↓
        </a>
      </div>

    </section>
  );
}

export default About;
