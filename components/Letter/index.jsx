import style from "./style.module.scss";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Letter = ({ space, letter }) => {
  const letterRef = useRef();

  useEffect(() => {
    let textAnimation = gsap.timeline({
      defaults: {
        ease: "stepped",
      },
    });
    textAnimation.fromTo(
      letterRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 0.7,
        stagger: {
          each: 0.01,
        },
      }
    );
  }, []);

  return space == true ? (
    <div ref={letterRef} className={style.letter}>
      &nbsp;
    </div>
  ) : (
    <div ref={letterRef} className={style.letter}>
      {letter}
    </div>
  );
};

export default Letter;
