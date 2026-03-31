import gsap from "gsap";
import { splitTextIntoChars } from "./splitText";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const landingText = document.querySelectorAll(".landing-info h3, .landing-intro h2, .landing-intro h1");
  landingText.forEach((el: any) => {
    const chars = splitTextIntoChars(el);
    gsap.fromTo(
      chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.3,
      }
    );
  });

  const text1 = document.querySelector(".landing-h2-info");
  const text2 = document.querySelector(".landing-h2-info-1");
  const text3 = document.querySelector(".landing-h2-1");
  const text4 = document.querySelector(".landing-h2-2");

  if (text1 && text2) LoopText(text1 as HTMLElement, text2 as HTMLElement);
  if (text3 && text4) LoopText(text3 as HTMLElement, text4 as HTMLElement);
}

function LoopText(el1: HTMLElement, el2: HTMLElement) {
  const chars1 = splitTextIntoChars(el1);
  const chars2 = splitTextIntoChars(el2);

  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    chars2,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      chars1,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      chars1,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      chars2,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
