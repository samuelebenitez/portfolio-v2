import style from "./style.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function Button({ type, href, label }) {
  const router = useRouter();

  const buttonRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { yPercent: 100, opacity: 0 },
      { duration: 0.5, delay: 0.1, yPercent: 0, opacity: 1 }
    );
  }, []);

  switch (type) {
    case "tab":
      if (router.asPath == href) {
        return (
          <Link href={href}>
            <p className={`${style.button} ${style.selected}`}>{label} </p>
          </Link>
        );
      } else {
        return (
          <Link href={href}>
            <p className={style.button}>{label} </p>
          </Link>
        );
      }
    case "sidebar_button":
      if (router.asPath == href) {
        return (
          <Link href={href}>
            <p
              ref={buttonRef}
              className={`${style.button_sidebar} ${style.selected_sidebar}`}
            >
              {label}
            </p>
          </Link>
        );
      } else {
        return (
          <Link href={href}>
            <p ref={buttonRef} className={style.button_sidebar}>
              {label}{" "}
            </p>
          </Link>
        );
      }
      break;
  }
}
