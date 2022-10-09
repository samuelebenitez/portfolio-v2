import Button from "../Button";
import style from "./style.module.scss";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function SidebarMenu() {
  const navRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { yPercent: -5 },
      { duration: 0.5, opacity: 1, yPercent: 0 }
    );
  }, []);

  const buttonsName = [
    { name: "home", path: "/" },
    { name: "demos", path: "/demos" },
    { name: "about", path: "/about" },
    { name: "others", path: "/others" },
  ];
  return (
    <nav ref={navRef} className={style.nav_mobile_content}>
      {buttonsName.map((button, key) => (
        <Button
          key={key}
          type="sidebar_button"
          href={button.path}
          label={button.name}
        />
      ))}
    </nav>
  );
}
