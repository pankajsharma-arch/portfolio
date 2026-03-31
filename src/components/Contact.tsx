import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box contact-footer">
            <div className="footer-col">
              <h5>Email</h5>
              <a href="mailto:pankajarya0808@gmail.com">pankajarya0808@gmail.com</a>
              <h5>Instagram</h5>
              <a href="https://www.instagram.com/itspankajsharmaaa/">@itspankajsharmaaa</a>
            </div>
            <div className="footer-col">
              <h5>Social</h5>
              <a href="https://github.com/pankajsharma-arch" target="_blank">Github <MdArrowOutward /></a>
              <a href="https://www.linkedin.com/in/pankaj-sharma-486406366/" target="_blank">Linkedin <MdArrowOutward /></a>
              <a href="https://www.instagram.com/itspankajsharmaaa/" target="_blank">Instagram <MdArrowOutward /></a>
            </div>
            <div className="footer-col credits-col">
              <h5>Designed and Developed By</h5>
              <h2>Pankaj Sharma</h2>
              <p><MdCopyright /> 2026 All Rights Reserved</p>
            </div>
            <div className="footer-col portrait-col">
              <div className="footer-portrait">
                <img src="/images/footer_portrait.jpg" alt="Pankaj Sharma" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
