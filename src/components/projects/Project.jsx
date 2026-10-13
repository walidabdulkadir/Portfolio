function Project() {
  return (
    <>
      <section id="project">
        <div className="section-label">
          <div className="section-label-text">PROJECT</div>
          <div className="section-label-line"></div>
        </div>
        <div className="project-card">
          <div className="project-thumb">
            <div className="project-thumb-label">
              <img alt="" />
            </div>
            <div className="project-thumb-num">01</div>
          </div>
          <div className="project-body">
            <div className="project-tags">
              <div className="project-tag">NODE.JS</div>
              <div className="project-tag">MYSQL</div>
              <div className="project-tag">EXPRESS</div>
              <div className="project-tag">BOOTSTRAP</div>
            </div>
            <div className="project-title">Student Management System</div>
            <div className="project-desc">
              A full-stack web application for managing student records with
              CRUD operations, MySQL database, and a responsive Bootstrap
              frontend.
            </div>
            <div className="project-footer">
              <div></div>
              <a href="#arrow" className="arrow">
                <div className="project-arrow">→</div>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-thumb">
            <div className="project-thumb-label">
              <img alt="" />
            </div>
            <div className="project-thumb-num">02</div>
          </div>
          <div className="project-body">
            <div className="project-tags">
              <div className="project-tag">HTML</div>
              <div className="project-tag">CSS</div>
              <div className="project-tag">JAVASCRIPT</div>
            </div>
            <div className="project-title">WEATHER APP</div>
            <div className="project-desc">
              A full-stack web application for managing student records with
              CRUD operations, MySQL database, and a responsive Bootstrap
              frontend.
            </div>
            <div className="project-footer">
              <div></div>
              <a href="#arrow" className="arrow">
                <div className="project-arrow">→</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
