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
                <h4>Social Media & Marketing Manager</h4>
                <h5>Educate and Elevate</h5>
              </div>
              <h3>2025 - PRESENT</h3>
            </div>
            <p>
              Lead end-to-end social media strategy and managed ₹100K+ in paid ad spend across Meta and Google Ads. 
              Optimize campaigns for lead generation and ROI through continuous A/B testing and performance tracking.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Marketing Intern</h4>
                <h5>SellingOS</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed brand-aligned creatives using Canva and Adobe Photoshop. 
              Assisted in managing paid campaign setup, audience targeting, and competitor research to drive organic growth.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Customer Service Representative</h4>
                <h5>Quampetence</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Handled high-volume customer interactions, improving response efficiency and resolution time. 
              Developed client-facing communication skills that support current brand interaction and community management roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
