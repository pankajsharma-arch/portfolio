import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I help startups, D2C brands, and growing businesses build a stronger digital presence and turn marketing into measurable growth.
        </p>
        <p className="para" style={{ marginTop: "20px" }}>
          My expertise spans social media management, content strategy, Meta & Google Ads, SEO, websites, and e-commerce. I combine creative execution with data-driven strategy to build campaigns and content that serve real business goals.
        </p>
        <p className="para" style={{ marginTop: "20px" }}>
          From managing day-to-day social media to running campaigns and improving digital presence, I focus on what works, what doesn’t, and what needs to change.
        </p>
      </div>
    </div>
  );
};

export default About;
