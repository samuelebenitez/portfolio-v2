import style from "./style.module.scss";

export default function Badge() {
  return (
    <div className={style.badge_container}>
      <p className={style.badge_text}>Working on new projects...</p>
    </div>
  );
}
