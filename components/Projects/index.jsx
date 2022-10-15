import style from "./style.module.scss";
import Project from "../Project";
import projects from "../../public/projects.json";

export default function Projects() {
  return (
    <div className={style.projects_container}>
      {projects.map((pro, key) => (
        <Project key={key} proje={pro} />
      ))}
    </div>
  );
}
