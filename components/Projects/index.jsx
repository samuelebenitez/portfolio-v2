import style from "./style.module.scss";
import Project from "../Project";

export default function Projects() {
  const projects = [
    {
      title: "Courflix",
      description:
        "Primer proyecto, hecho en JS Vanilla que simula la home page de Netflix. Uso de librería Slick para crear carrouseles de imágenes. ",
      desk: "https://i.ibb.co/6DyP03B/courflix-desktop-img.webp",
      mobile: "https://i.ibb.co/W5XPT60/courflix-responsive-img.webp",
      demo: "https://courflix-vanilla.vercel.app/",
      repo: "https://github.com/samuelebenitez/CourflixVanilla",
    },
    {
      title: "Dev.to blog",
      description:
        "Hecho en Next JS. Implementación de pages, rutas dinámicas y server side rendering",
      desk: "https://i.ibb.co/DwyBqVD/dev-blog-desktop-img.webp",
      mobile: "https://i.ibb.co/Yp6vDS8/dev-blog-responsive-img.webp",
      demo: "https://devtoblog.vercel.app/",
      repo: "https://github.com/samuelebenitez/dev-to-blog",
    },
    {
      title: "Musikit",
      description:
        "Esta web simula la home page de Spotify y devuelve los datos reales del usuario gracias a su API oficial. Se pueden observar las playlists, artistas preferidos, albumes, podcasts y canciones. Requiere de una cuenta de spotify para su uso.",
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
