import projects from "../../public/projects.json";
import { useRouter } from "next/router";
import style from "./style.module.scss";
import {
  htmlIcon,
  scssIcon,
  javascriptIcon,
  reactIcon,
  nextjsIcon,
  backIcon,
  githubIcon,
  openNewWindow,
} from "../../public/svg-resources.js";

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  const selectedProject = projects.filter((project) => project.id == id);

  function renderLargeDesc(id) {
    switch (id) {
      case 3:
        return (
          <p className={style.project_description}>
            First project, made on JS Vanilla that simulates the Netflix home
            page. Use of Slick library to create image carrousels.
          </p>
        );
      case 2:
        return (
          <p className={style.project_description}>
            Made on Next JS. Implementation of pages, dynamic routes and server
            side rendering.
          </p>
        );

      case 1:
        return (
          <p className={style.project_description}>
            This website simulates the Spotify home page and returns the real
            data of the user thanks to its official API. You can see the
            playlists, favorite artists, albums, podcasts and songs. You will
            need a spotify accont to see it. Sorry about that.
          </p>
        );

      default:
        break;
    }
  }

  const selectedIcon = (len, key) => {
    switch (len) {
      case "HTML":
        return <span key={key}>{htmlIcon}</span>;

      case "CSS":
        return <span key={key}>{scssIcon}</span>;

      case "Vanilla Javascript":
        return <span key={key}>{javascriptIcon}</span>;

      case "Next JS":
        return <span key={key}>{nextjsIcon}</span>;

      default:
        break;
    }
  };

  return (
    <>
      {selectedProject.map((pr, key) => (
        <div className={style.projectpage_container} key={key}>
          <div className={style.title_container}>
            <h1 className={style.project_title}>{pr.title}</h1>
            <div className={style.arrows}>
              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>

              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>
            </div>
            <div className={style.imgs_container}>
              <img className={style.img1} src={pr.desk} alt="" />
            </div>
            <div className={style.arrows}>
              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>

              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>
              <span className={style.arrow}>???</span>
            </div>
          </div>

          <div className={style.description_container}>
            {renderLargeDesc(pr.id)}

            <div className={style.icons}>
              {pr.lenguages.map((lenguage, key) => selectedIcon(lenguage, key))}
            </div>

            <div className={style.buttons}>
              <a
                target="_blank"
                href={pr.demo}
                className={`${style.button} ${style.depl} `}
                rel="noopener noreferrer"
              >
                Website 
              </a>
              <a
                target="_blank"
                href={pr.repo}
                className={`${style.button} ${style.git} `}
                rel="noopener noreferrer"
              >
                Code 
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
