import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Custom lightweight text splitter to replace premium SplitText
export const splitTextIntoChars = (element: HTMLElement) => {
  const text = element.innerText;
  element.innerHTML = "";
  const chars = text.split("").map((char) => {
    const span = document.createElement("span");
    span.innerText = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    element.appendChild(span);
    return span;
  });
  return chars;
};

export const splitTextIntoWords = (element: HTMLElement) => {
  const text = element.innerText;
  element.innerHTML = "";
  const words = text.split(" ").map((word) => {
    const span = document.createElement("span");
    span.innerText = word + "\u00A0";
    span.style.display = "inline-block";
    element.appendChild(span);
    return span;
  });
  return words;
};

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  
  const paras = document.querySelectorAll(".para");
  const titles = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: any) => {
    para.classList.add("visible");
    const words = splitTextIntoWords(para);

    gsap.fromTo(
      words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });

  titles.forEach((title: any) => {
    const chars = splitTextIntoChars(title);
    gsap.fromTo(
      chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
