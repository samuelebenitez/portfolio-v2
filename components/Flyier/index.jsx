import { useRef, useEffect } from "react";
import style from "./style.module.scss";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Flyier({ label }) {
  const wordRef = useRef();

  useEffect(() => {
    let tl = gsap.timeline({
      delay: 0.1,
      scrollTrigger: {
        trigger: wordRef.current,
        start: "top bottom-=10%", // when the top of the trigger hits the top of the viewport
        end: "+=500",
        markers: true,
      },
    });

    tl.fromTo(
      wordRef.current,
      {
        y: 100,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        ease: "expo.easeOut",
        duration: 1,
        stagger: {
          each: 0.05,
        },
      }
    );
  }, []);

  return (
    <div ref={wordRef} className={style.flyier_container}>
      {label}
    </div>
  );
}
