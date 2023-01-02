import style from "./style.module.scss";
import { gsap, Expo } from "gsap";
import { useRef, useEffect } from "react";
import Letter from "../Letter";
import Circle from "../Circle";
import { flowAnimation } from "../../public/svg-resources";

export default function Hero() {
  const box = useRef();
  const spanRef = useRef();

  const letterRef = useRef();

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       box.current,
  //       { yPercent: 0, ease: "expo.easeOut" },
  //       { duration: 1, delay: 0.2, opacity: 1, yPercent: 0 }
  //     );
  //     gsap.fromTo(
  //       spanRef.current,
  //       { yPercent: 0, ease: "expo.easeOut" },
  //       { duration: 2, delay: 0.2, opacity: 1, yPercent: 0 }
  //     );
  //   }, []);
  //   return () => ctx.revert();
  // }, []);

  return (
    <div className={style.hero}>
      <div ref={box} className={style.hero_container}>
        <span ref={spanRef} className={style.pretitle}>
          {"hello, my name is Sam"
            .split("")
            .map((i, key) =>
              i == " " ? (
                <Letter
                  key={key}
                  space={true}
                  letter={i}
                  font="sans"
                  letterRef={letterRef}
                />
              ) : (
                <Letter
                  key={key}
                  space={false}
                  letter={i}
                  font="sans"
                  letterRef={letterRef}
                />
              )
            )}
        </span>
        <h1 ref={spanRef} className={style.title}>
          {"I make websites."
            .split("")
            .map((i, key) =>
              i == " " ? (
                <Letter
                  key={key}
                  space={true}
                  letter={i}
                  font="serif"
                  letterRef={letterRef}
                />
              ) : (
                <Letter
                  key={key}
                  space={false}
                  letter={i}
                  font="serif"
                  letterRef={letterRef}
                />
              )
            )}
        </h1>

        <div className={style.hero_content}>
          <span className={style.hero_desc}>
            I’m a front-end developer based in Buenos Aires, Argentina. I’m
            interested in creative coding, animations, web3 and Big Data
          </span>
        </div>
      </div>
      {/* <div className={style.flyer}>{flowAnimation}</div> */}
    </div>
  );
}
