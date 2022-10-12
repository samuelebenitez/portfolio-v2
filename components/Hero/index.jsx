import style from "./style.module.scss";
import { gsap, Expo } from "gsap";
import { useRef, useEffect } from "react";
import Letter from "../Letter";

export default function Hero() {
  const box = useRef();
  const spanRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      box.current,
      { yPercent: -10, ease: "expo.easeOut" },
      { duration: 1, opacity: 1, yPercent: 0 }
    );
    gsap.fromTo(
      spanRef.current,
      { yPercent: -5, ease: "expo.easeOut" },
      { duration: 2, delay: 0.2, opacity: 1, yPercent: 0 }
    );
  }, []);

  return (
    <div ref={box} className={style.hero_container}>
      <span ref={spanRef} className={style.pretitle}>
        {"hello, my name is Sam"
          .split("")
          .map((i) =>
            i == " " ? (
              <Letter space={true} letter={i} key={i} />
            ) : (
              <Letter space={false} letter={i} key={i} />
            )
          )}
      </span>
      <h1 span ref={spanRef} className={style.title}>
        {"I make websites."
          .split("")
          .map((i) =>
            i == " " ? (
              <Letter space={true} letter={i} />
            ) : (
              <Letter space={false} letter={i} />
            )
          )}
      </h1>

      <div className={style.hero_content}>
        <span className={style.hero_desc}>
          I’m a front-end developer based in Buenos Aires, Argentina. I’m
          interested in creative coding, animations, web3 and the whole crypto
          thing (?)
        </span>
      </div>
    </div>
  );
}
