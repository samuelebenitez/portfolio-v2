import Image from "next/image";
import style from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import Circle from "../components/Circle";

export default function Home() {
  return (
    <main className={style.container}>
      <Hero />
    </main>
  );
}
