import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Customer Service Representative</h4>
                <a href="https://www.quampetence.com/" target="_blank" data-cursor="disable">
                  <h5>Quampetence</h5>
                </a>
              </div>
              <h3 style={{ fontSize: "22px", color: "var(--accentColor)", opacity: 0.8 }}>May 2024 - May 2025</h3>
            </div>
            <p>
              Handled customer interactions across calls and digital channels, improving response efficiency and issue resolution time. Built strong communication and problem-solving skills by addressing customer queries, concerns, and service requests daily. Maintained accurate records of customer interactions and feedback to support service quality improvements. Developed client-facing communication skills that later supported audience engagement, community management, and brand interaction in social media roles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Marketing Intern</h4>
                <a href="https://sellingos.com/" target="_blank" data-cursor="disable">
                  <h5>SellingOS</h5>
                </a>
              </div>
              <h3 style={{ fontSize: "22px", color: "var(--accentColor)", opacity: 0.8 }}>Aug 2025 - Nov 2025</h3>
            </div>
            <p>
              Supported planning and execution of social media campaigns across major platforms, focusing on content consistency, reach, and engagement growth. Handled customer queries across channels.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Manager</h4>
                <a href="https://houseofkaur.in/" target="_blank" data-cursor="disable">
                  <h5>House Of kaur</h5>
                </a>
              </div>
              <h3 style={{ fontSize: "22px", color: "var(--accentColor)", opacity: 0.8 }}>Dec 2025 - Apr 2026</h3>
            </div>
            <p>
              Designed and developed the brand website and setup the complete online store. Managed social media presence, created engaging posts to improve brand visibility and audience growth.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media & Marketing Manager</h4>
                <a href="https://www.instagram.com/educateandelevates/" target="_blank" data-cursor="disable">
                  <h5>Educate and Elevate</h5>
                </a>
              </div>
              <h3 style={{ fontSize: "22px", color: "var(--accentColor)", opacity: 0.8 }}>Dec 2025 - Apr 2026</h3>
            </div>
            <p>
              Led end-to-end social media strategy across Instagram, Facebook, LinkedIn, and YouTube. Managed 50K+ ad spend for lead generation, optimizing campaigns via A/B testing to improve ROI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
