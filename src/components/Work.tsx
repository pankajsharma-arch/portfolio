import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    if (!box || box.length === 0) return;
    const totalWidth = box[0].getBoundingClientRect().width * box.length;
    translateX = totalWidth - window.innerWidth + 300;
    if (translateX < 0) translateX = 0;
  }

    let timeline: gsap.core.Timeline;
    const initGSAP = setTimeout(() => {
      setTranslateX();

      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: () => {
            setTranslateX();
            return `+=${translateX}`;
          },
          scrub: true,
          pin: true,
          pinType: "transform",
          id: "work",
          invalidateOnRefresh: true,
        },
      });

      timeline.to(".work-flex", {
        x: () => -translateX,
        ease: "none",
      });
      
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(initGSAP);
      timeline?.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            { title: "Social Media Management", category: "Social Media Marketing", tools: "Instagram, Facebook, LinkedIn, Content Strategy, Community Management", img: "/images/social_media.jpg" },
            { title: "Meta & Google Ads", category: "Paid Advertising", tools: "Meta Ads, Google Ads, Campaign Strategy, Lead Generation, Performance Optimization", img: "/images/paid_ads.jpg" },
            { title: "Content Strategy & Creation", category: "Content Marketing", tools: "Content Planning, Reels, Social Media Content, Copywriting, Brand Storytelling", img: "/images/content.jpg" },
            { title: "Brand & Social Media Rebuild", category: "Brand Marketing", tools: "Brand Positioning, Instagram Strategy, Visual Direction, Content Strategy, Audience Research", img: "/images/brand.jpg" },
            { title: "Website Creation", category: "Web Development", tools: "WordPress, Landing Pages, E-commerce Websites, Website Management", img: "/images/website.jpg" },
            { title: "Sales Funnel & Conversion", category: "Conversion Marketing", tools: "Landing Pages, Sales Funnels, Lead Generation, Conversion Optimization", img: "/images/funnel.jpg" }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
