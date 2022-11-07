import style from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import Flyier from "../components/Flyier";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Badge from "../components/Badge";

export default function Home() {
  return (
    <main className={style.container}>
      <Hero />
      <Flyier label="• Demos • Demos • Demos • Demos • Demos • Demos • Demos " />
      <Projects />
      <Badge />
      <Footer />
    </main>
  );
}
