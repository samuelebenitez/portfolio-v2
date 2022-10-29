import style from "./style.module.scss";
import { gsap, Expo } from "gsap";
import { useEffect, useRef } from "react";

const Letter = ({ space, letter, font }) => {
  const letterRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let textAnimation = gsap.timeline();
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
          ease: "expo.easeOut",
          duration: 0.7,
          stagger: {
            each: 0.05,
          },
        }
      );
    }, []);

    return () => ctx.revert();
  }, []);

  return space == true ? (
    <div ref={letterRef} className={style.letter}>
      &nbsp;
    </div>
  ) : (
    <>
      {font == "sans" ? (
        <div ref={letterRef} className={style.letter_sans}>
          {letter}
        </div>
      ) : (
        <div ref={letterRef} className={style.letter_serif}>
          {letter}
        </div>
      )}
    </>
  );
};

export default Letter;
