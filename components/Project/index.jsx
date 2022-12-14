import { useRef, useEffect } from "react";
import style from "./style.module.scss";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function Project({ proje }) {
  const projectRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        delay: 0.1,
        scrollTrigger: {
          trigger: projectRef.current,
          start: "top bottom-=10%", // when the top of the trigger hits the top of the viewport
          end: "+=500",
        },
      });

      tl.fromTo(
        projectRef.current,
        {
          y: 50,
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

    return () => ctx.revert();
  }, []);

  const { title, description, mobile, desk, repo, demo, id } = proje;
  return (
    <div
      ref={projectRef}
      style={{ backgroundImage: `url(${desk})` }}
      className={style.project_container}
    >
      <h2 className={style.project_title}>{title}</h2>
      <p className={style.project_desc}>{description}</p>
      <div className={style.project_buttons}>
        <Link href={`/Demos/${id}`}>
          <button className={`${style.button} ${style.link}`}>⬳</button>
        </Link>
      </div>
    </div>
  );
}
