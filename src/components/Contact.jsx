function Contact() {
  return (
    <>
      <section id="contact">
        <div className="section-label">
          <div className="section-label-text">CONTACT</div>
          <div className="section-label-line"></div>
        </div>
        <div className="contact-grid">
          <div className="contact-form-wrap">
            <div className="contact-form-title">LET'S CONNECT</div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">NAME</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">EMAIL</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">MESSAGE</label>
              <textarea
                className="form-textarea"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button className="form-submit">SEND MESSAGE</button>
          </div>

          <div className="contact-info">
            <div className="contact-info-header">CONTACT INFO</div>
            <div className="info-item">
              <div>
                <div className="info-label">PHONE</div>
                <div className="info-value">+251 951 968 887</div>
              </div>
            </div>

            <div className="info-item">
              <div>
                <div className="info-label">EMAIL</div>
                <div className="info-value">walidabdulkadir37@gmail.com</div>
              </div>
            </div>
            <div className="info-item">
              <div>
                <div className="info-label">LOCATION</div>
                <div className="info-value">Addis Ababa, Ethiopia</div>
              </div>
            </div>

            <div className="contact-socials">
              <div className="contact-socials-label">CONNECT ON SOCIAL</div>
              <div className="media-btn">
                <a href="INSTA" className="link">
                  <i className="bx bxl-instagram-alt">#L</i>
                </a>
                <a href="YT" className="link">
                  {" "}
                  <i className="bx bxl-youtube"></i>#I
                </a>
                <a href="TELE" className="link">
                  {" "}
                  <i className="bx bxl-telegram"></i>#T
                </a>
                <a href="TELE" className="link">
                  {" "}
                  <i className="bx bxl-telegram"></i>#G
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
