import style from "./style.module.scss";
import Button from "../Button/index";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Header({ openMenu, isOpen }) {
  const headerRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
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
    <header ref={headerRef} className={style.header}>
      <div className={style.inner_container}>
        <div className={style.header_brand}>
          <p>SEB</p>
        </div>

        <div className={style.header_nav}>
          <button onClick={() => openMenu(true)} className={style.button}>
            {isOpen ? (
              <>
                <div className={`${style.burger_bar} ${style.burger1}`}></div>
                <div className={`${style.burger_bar} ${style.burger2}`}></div>
              </>
            ) : (
              <>
                <div className={`${style.burger_bar} `}></div>
                <div className={`${style.burger_bar} `}></div>
              </>
            )}
          </button>
          <nav className={style.nav_content}>
            {buttonsName.map((button, key) => (
              <Button
                key={key}
                type="tab"
                href={button.path}
                label={button.name}
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
