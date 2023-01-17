import style from "./style.module.scss";
import { useRef } from "react";
import { starAnimation } from "../../public/svg-resources";

export default function Hero() {
  const box = useRef();
  const spanRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();

  return (
    <div className={style.hero}>
      <div ref={box} className={style.hero_container}>
        <p ref={spanRef} className={style.pretitle}>
          hello, my name is Sam
        </p>
        <h1 ref={titleRef} className={style.title}>
          I make websites.
        </h1>

        <div className={style.hero_content}>
          <p ref={descRef} className={style.hero_desc}>
            I’m a front-end developer based in Buenos Aires, Argentina. I’m
            interested in creative coding, animations, web3 and Big Data
          </p>
        </div>
      </div>
      {/* <div className={style.flyer}>{starAnimation}</div> */}
    </div>
  );
}
