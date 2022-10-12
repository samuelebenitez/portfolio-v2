import style from "./style.module.scss";
import Project from "../Project";

export default function Projects() {
  const projects = [
    {
      title: "Courflix",
      description:
        "First project, made on Vanilla JS. Simulates Netflix's homepage. ",
      desk: "https://i.ibb.co/6DyP03B/courflix-desktop-img.webp",
      mobile: "https://i.ibb.co/W5XPT60/courflix-responsive-img.webp",
      demo: "https://courflix-vanilla.vercel.app/",
      repo: "https://github.com/samuelebenitez/CourflixVanilla",
    },
    {
      title: "Dev.to blog",
      description:
        "Made on Next JS. Implementation of pages, dynamic routes and server side rendering.",
      desk: "https://i.ibb.co/DwyBqVD/dev-blog-desktop-img.webp",
      mobile: "https://i.ibb.co/Yp6vDS8/dev-blog-responsive-img.webp",
      demo: "https://devtoblog.vercel.app/",
      repo: "https://github.com/samuelebenitez/dev-to-blog",
    },
    {
      title: "Musikit",
      description:
        "This web simulates Spotify's homepage and return the real data of the user thanks to his oficial API. You can see favorite playlists, artists, albums, podcasts and songs. ",
      desk: "https://i.ibb.co/PtWhy9T/musikit-home-img.webp",
      mobile: "https://i.ibb.co/2sjzHhP/musikitmobile.webp",
      demo: "https://misikit-samuelebenitez.vercel.app/",
      repo: "https://github.com/samuelebenitez/musikit",
    },
  ];

  return (
    <div className={style.projects_container}>
      {projects.map((pro, key) => (
        <Project key={key} proje={pro} />
      ))}
    </div>
  );
}
