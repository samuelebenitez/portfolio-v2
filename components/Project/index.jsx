import { useRef, useEffect } from "react";
import style from "./style.module.scss";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Link from "next/link";

export default function Project({ proje }) {
  const projectRef = useRef();

  useEffect(() => {
    let tl = gsap.timeline({
      delay: 0.1,
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top bottom-=10%", // when the top of the trigger hits the top of the viewport
        end: "+=500",
        markers: true,
      },
    });

    tl.fromTo(
      projectRef.current,
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

  const { title, description, mobile, desk, repo, demo } = proje;
  return (
    <div
      ref={projectRef}
      style={{ backgroundImage: `url(${desk})` }}
      className={style.project_container}
    >
      <h2 className={style.project_title}>{title}</h2>
      <p className={style.project_desc}>{description}</p>
      <div className={style.project_buttons}>
        <Link href={repo} target="_blank">
          <button className={style.button}>code</button>
        </Link>
        <Link href={demo} target="_blank">
          <button className={style.button}>demo</button>
        </Link>
      </div>
    </div>
  );
}
