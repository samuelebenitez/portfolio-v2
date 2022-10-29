import style from "./style.module.scss";
import Button from "../Button/index";
import { gsap, Expo } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import { backIcon } from "../../public/svg-resources.js";

gsap.registerPlugin(ScrollTrigger);

export default function Header({ openMenu, isOpen }) {
  const router = useRouter();
  const headerRef = useRef();


  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { yPercent: -5 },
        {
          duration: 0.5,
          opacity: 1,
          yPercent: 0,
        }
      );

      gsap.fromTo(
        headerRef.current,
        { backgroundColor: "transparent" },
        {
          duration: 0.1,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "=+50",
            end: "=0",
            ease: "expo",
            onLeave: () =>
              gsap.to(headerRef.current, {
                backgroundColor: "#0e141bb6",
              }),
            onEnterBack: () =>
              gsap.to(headerRef.current, {
                backgroundColor: "transparent",
              }),
          },
        }
      );
    }, []);

    return () => ctx.revert();
  }, []);

  const buttonsName = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "others", path: "/others" },
  ];

  return (
    <header ref={headerRef} className={style.header}>
      <div className={style.inner_container}>
        {router.asPath !== "/" ? (
          <div className={style.header_back}>
            <span onClick={() => router.back()}>{backIcon}</span>
          </div>
        ) : (
          <>
            <div className={style.header_brand}>
              <p>⚜</p>
            </div>
            <div className={style.header_nav}>
              <button onClick={() => openMenu(true)} className={style.button}>
                {isOpen ? (
                  <>
                    <div
                      className={`${style.burger_bar} ${style.burger1}`}
                    ></div>
                    <div
                      className={`${style.burger_bar} ${style.burger2}`}
                    ></div>
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
            </div>{" "}
          </>
        )}
      </div>
    </header>
  );
}
