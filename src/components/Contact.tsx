import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3 style={{ marginBottom: "40px" }}>Contact</h3>
        <div className="contact-flex" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
          <div className="contact-box" style={{ gap: "10px" }}>
            <h4>Email</h4>
            <p>
              <a href="mailto:pankajarya0808@gmail.com" data-cursor="disable" className="contact-social" style={{ display: "flex", alignItems: "center", gap: "10px", width: "fit-content", paddingBottom: "5px", fontSize: "18px" }}>
                <FaEnvelope /> pankajarya0808@gmail.com <MdArrowOutward />
              </a>
            </p>
            <h4 style={{ marginTop: "15px" }}>Phone</h4>
            <p>
              <a href="tel:+917258867554" data-cursor="disable" className="contact-social" style={{ display: "flex", alignItems: "center", gap: "10px", width: "fit-content", paddingBottom: "5px", fontSize: "18px" }}>
                <FaPhone /> +91 7258867554 <MdArrowOutward />
              </a>
            </p>
          </div>
          
          <div className="contact-box" style={{ gap: "10px" }}>
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/pankaj-sharma-486406366/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              style={{ display: "flex", alignItems: "center", gap: "10px", width: "fit-content", paddingBottom: "5px" }}
            >
              <FaLinkedinIn /> Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/itspankajsharmaaa/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              style={{ display: "flex", alignItems: "center", gap: "10px", width: "fit-content", paddingBottom: "5px" }}
            >
              <FaInstagram /> Instagram <MdArrowOutward />
            </a>
            <a
              href="https://github.com/pankajsharma-arch"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              style={{ display: "flex", alignItems: "center", gap: "10px", width: "fit-content", paddingBottom: "5px" }}
            >
              <FaGithub /> GitHub <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box" style={{ flexDirection: "row", alignItems: "center", gap: "25px" }}>
            <img 
              src="/images/profile.png" 
              alt="Pankaj Sharma" 
              style={{ height: "200px", width: "auto", borderRadius: "10px", border: "2px solid var(--accentColor)" }} 
            />
            <div>
              <h2 style={{ fontSize: "20px", lineHeight: "1.5" }}>
                Designed and Developed <br /> by{" "}
                <a href="https://www.instagram.com/itspankajsharmaaa/" target="_blank" style={{ color: "var(--accentColor)" }}>
                  Pankaj Sharma
                </a>
              </h2>
              <h5 style={{ marginTop: "10px", display: "flex", gap: "10px", alignItems: "center" }}>
                <MdCopyright /> 2026
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
