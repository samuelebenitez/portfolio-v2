import Image from "next/image";
import style from "../styles/Home.module.scss";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className={style.container}>
      <Hero />
    </main>
  );
}
