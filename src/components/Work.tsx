import "./styles/Work.css";
import WorkImage from "./WorkImage";
import WorkScene from "./WorkScene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    // 3D Tilt effect for boxes
    const boxes = document.querySelectorAll(".work-box");
    boxes.forEach((box) => {
      const handleMouseMove = (e: any) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        
        gsap.to(currentTarget, {
          rotateY: x * 15,
          rotateX: -y * 15,
          transformPerspective: 1000,
          ease: "power2.out",
          duration: 0.5,
        });
      };
      
      const handleMouseLeave = (e: any) => {
        gsap.to(e.currentTarget, {
          rotateY: 0,
          rotateX: 0,
          transformPerspective: 1000,
          ease: "power2.out",
          duration: 0.5,
        });
      };
      
      box.addEventListener("mousemove", handleMouseMove);
      box.addEventListener("mouseleave", handleMouseLeave);
      
      return () => {
        box.removeEventListener("mousemove", handleMouseMove);
        box.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    let translateX: number = 0;

  function setTranslateX() {
    const box = document.querySelectorAll(".work-box");
    if (box.length === 0) return;
    const workContainer = document.querySelector(".work-container");
    if (!workContainer) return;
    const rectLeft = workContainer.getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = (box[0].parentElement as HTMLElement).getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  if (translateX <= 0) {
    translateX = 2000; // Fallback if calculation fails initially
  }

  const xSetter = gsap.quickSetter(".work-flex", "x", "px");

  const workTrigger = ScrollTrigger.create({
    trigger: ".work-section",
    start: "top top",
    end: () => `+=${translateX}`,
    pin: true,
    pinSpacing: true,
    pinType: "transform",
    scrub: true,
    id: "work-pin",
    onUpdate: (self) => {
      xSetter(-translateX * self.progress);
    },
  });

  // Refresh to ensure spacer height is correct
  ScrollTrigger.refresh();

  return () => {
    workTrigger.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <WorkScene />
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Paid Google Ads</h4>
                  <p>Performance Marketing</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Google Ads, Search Console, A/B Testing</p>
            </div>
            <WorkImage image="/images/work_google_ads_new.jpg" alt="Google Ads Performance Marketing" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Meta Ads Manager</h4>
                  <p>Social Advertising</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Facebook Ads, Instagram, Pixel Tracking</p>
            </div>
            <WorkImage image="/images/work_meta_ads_new.png" alt="Meta Ads Manager Social Advertising" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Social Media Strategy</h4>
                  <p>Organic Growth</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Content Calendars, Engagement Analytics</p>
            </div>
            <WorkImage image="/images/work_content_calendar.png" alt="Social Media Strategy Organic Growth" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Website & AI Automation</h4>
                  <p>Digital Solutions</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>WordPress, Framer, Zapier, ChatGPT API</p>
            </div>
            <WorkImage image="/images/work_automation.jpg" alt="Website Creation and AI Tool Automation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
