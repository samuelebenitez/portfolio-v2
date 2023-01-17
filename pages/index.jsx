import style from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import Flyier from "../components/Flyier";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Badge from "../components/Badge";

import PAGE_TRANSITIONS from "../utils/pageTranstionsVars";

import { useRef, useEffect } from "react";

import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LazyMotion, domAnimation, m } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const pageMotionProps = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: PAGE_TRANSITIONS.DURATION,
        ease: PAGE_TRANSITIONS.EASE,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: PAGE_TRANSITIONS.DURATION,
        delay: PAGE_TRANSITIONS.DELAY,
        ease: PAGE_TRANSITIONS.EASE,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.main className={style.container} {...pageMotionProps}>
        <Hero />
        <Flyier label="• Demos • Demos • Demos • Demos • Demos • Demos • Demos • Demos • Demos " />
        <Projects />
        <Badge />
        <Footer />
      </m.main>
    </LazyMotion>
  );
}
