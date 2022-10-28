import style from "./style.module.scss";
import { githubIcon, linkedinIcon } from "../../public/svg-resources.js";

export default function Footer() {
  return (
    <div className={style.footer_container}>
      <div className={style.icon}>
        <span>{githubIcon}</span>
      </div>
      <div className={style.icon}>
        <span>{linkedinIcon}</span>
      </div>
    </div>
  );
}
