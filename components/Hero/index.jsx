import style from "./style.module.scss";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function Hero() {
  const box = useRef();

  useEffect(() => {
    gsap.fromTo(
      box.current,
      { yPercent: -5 },
      { duration: 0.5, opacity: 1, delay: 2, yPercent: 0 }
    );
  }, []);

  return (
    <div ref={box} className={style.hero_container}>
      <p className={style.pretitle}> hello, my name is sam</p>
      <h1 className={style.title}>I make websites.</h1>

      <div className={style.hero_content}>
        <p>
          I’m a front-end developer based in Buenos Aires, Argentina. I’m
          interested in creative coding, animations, web3 and the whole crypto
          thing (?)
        </p>
      </div>
    </div>
  );
}
