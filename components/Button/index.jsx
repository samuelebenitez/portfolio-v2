import style from "./style.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { gsap, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import Letter from "../Letter";

export default function Button({ type, href, label, openMenu }) {
  const router = useRouter();
  const buttonRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(buttonRef.current, {
        duration: 1.5,
        yPercent: 0,
        ease: "power4",
        stagger: 0.09,
      });
    }, []);

    return () => ctx.revert();
  }, []);

  switch (type) {
    case "tab":
      if (router.asPath == href) {
        return (
          <Link href={href}>
            <span className={`${style.button} ${style.selected}`}>
              {label}{" "}
            </span>
          </Link>
        );
      } else {
        return (
          <Link href={href}>
            <span className={style.button}>{label} </span>
          </Link>
        );
      }
    case "sidebar_button":
      if (router.asPath == href) {
        return (
          <Link href={href}>
            <span
              ref={buttonRef}
              className={`${style.button_sidebar} ${style.selected_sidebar}`}
              onClick={() => openMenu(false)}
            >
              {label
                .split("")
                .map((i, key) =>
                  i == " " ? (
                    <Letter key={key} space={true} letter={i} />
                  ) : (
                    <Letter key={key} space={false} letter={i} />
                  )
                )}
            </span>
          </Link>
        );
      } else {
        return (
          <Link href={href}>
            <span
              onClick={() => openMenu(false)}
              ref={buttonRef}
              className={style.button_sidebar}
            >
              {label
                .split("")
                .map((i, key) =>
                  i == " " ? (
                    <Letter key={key} space={true} letter={i} />
                  ) : (
                    <Letter key={key} space={false} letter={i} />
                  )
                )}
            </span>
          </Link>
        );
      }
      break;
  }
}
