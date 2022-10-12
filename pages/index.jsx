import Image from "next/image";
import style from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import Flyier from "../components/Flyier";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className={style.container}>
      <Hero />
      <Flyier label="• Demos • Demos • Demos • Demos" />
      <Projects />
    </main>
  );
}
