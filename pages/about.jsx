import Image from "next/image";
import Flyier from "../components/Flyier";
import style from "../styles/About.module.scss";
import profilepic from "../public/profilepic.jpg";

import { useRef, useEffect } from "react";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

import {
  githubIcon,
  linkedinIcon,
  resumeIcon,
} from "../public/svg-resources.js";

export default function About() {
  const imageRef = useRef();
  const infoRef = useRef();
  const infoRef2 = useRef();
  const infoRef3 = useRef();

  const infoRef4 = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        delay: 0.1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom-=10%", // when the top of the trigger hits the top of the viewport
          end: "+=500",
        },
      });

      let tl2 = gsap.timeline({
        delay: 0.1,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top bottom-=10%", // when the top of the trigger hits the top of the viewport
          end: "+=500",
        },
      });

      tl.fromTo(
        imageRef.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          delay: 0.5,
          ease: "expo.easeOut",
          duration: 0.5,
          stagger: {
            each: 0.05,
          },
        }
      );

      tl2.fromTo(
        infoRef.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          delay: 0.3,
          ease: "expo.easeOut",
          duration: 0.5,
          stagger: {
            each: 0.05,
          },
        }
      );
      tl2.fromTo(
        infoRef2.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          delay: 0.3,
          ease: "expo.easeOut",
          duration: 0.5,
          stagger: {
            each: 0.05,
          },
        }
      );

      tl2.fromTo(
        infoRef3.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          delay: 0.3,
          ease: "expo.easeOut",
          duration: 0.5,
          stagger: {
            each: 0.05,
          },
        }
      );

      tl2.fromTo(
        infoRef4.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          delay: 0.3,
          ease: "expo.easeOut",
          duration: 0.5,
          stagger: {
            each: 0.05,
          },
        }
      );
    }, []);

    return () => ctx.revert();
  }, []);

  return (
    <div className={style.about_container}>
      {/* <iframe
        src="https://my.spline.design/daftpunkcopy-7378af5cfa10d309d4ed8c13320df8e0/"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe> */}

      <Flyier label="• About  • About  • About  • About  • About  • About  • About • About • About • About  " />
      <div className={style.about_first}>
        <div ref={imageRef} className={style.crazy}>
          <Image src={profilepic} alt="profilepic " />
        </div>
        <div className={style.info}>
          <p ref={infoRef}>
            Hi, my name is Samuel and I&apos;m a frontend developer based in
            Buenos Aires, Argentina.
          </p>
          <p ref={infoRef2}>
            Around two years ago I started to study frontend development, since
            then I been playing with differents librarys and fun things on the
            internet.
          </p>
          <p ref={infoRef3}>
            I&apos;m an enthusiastic person and I&apos;m looking for a team to
            work, learn, and help. If u are looking for a frontend developer
            with knowledge of React and Next JS to add to your team, I could be
            the perfect match.
          </p>
          <p ref={infoRef4}>
            To know more about my studies and freelance experiencie, I left my
            resume below.
          </p>
        </div>
      </div>

      <div className={style.about_second}>
        <div className={style.title_container}>
          <h1 className={style.title}>You can find me here...</h1>
        </div>
        <div className={style.icons_container}>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/samuelebenitez"
          >
            <span className={style.icon}> {githubIcon}</span>
          </a>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/samuelebenitez"
          >
            <span className={style.icon}>{linkedinIcon}</span>
          </a>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://media-exp1.licdn.com/dms/document/C4D2DAQE10wDeRLzxag/profile-treasury-document-pdf-analyzed/0/1668380947700?e=1669248000&v=beta&t=esWWkWtG_6eISouimXbSdZS9ZyWJjTHzAx6Ose3kgvA"
          >
            <span className={style.icon}>{resumeIcon}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
