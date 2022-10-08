import style from "../styles/globals.scss";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className={style.app_container}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
