import style from "./style.module.scss";
import { githubIcon, linkedinIcon } from "../../public/svg-resources.js";

export default function Footer() {
  return (
    <div className={style.footer_container}>
      <div className={style.icon}>
        <span>{githubIcon}</span>
        <p>Github</p>
      </div>
      <div className={style.icon}>
        <span>{linkedinIcon}</span>
        <p>LinkedIn</p>
      </div>
    </div>
  );
}
