import style from "./style.module.scss";
import { githubIcon, linkedinIcon } from "../../public/svg-resources.js";

export default function Footer() {
  return (
    <>
      <hr className={style.hr} />
      <div className={style.footer_container}>
        <div className={style.icon}>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/samuelebenitez"
          >
            <span>{githubIcon}</span>
          </a>
        </div>
        <div className={style.icon}>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/samuelebenitez"
          >
            <span>{linkedinIcon}</span>
          </a>
        </div>
      </div>
    </>
  );
}
