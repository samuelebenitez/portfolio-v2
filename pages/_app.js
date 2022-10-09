import style from "../styles/globals.scss";
import Header from "../components/Header";
import SidebarMenu from "../components/SidebarMenu";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className={style.app_container}>
      <Header openMenu={openMenu} />
      {!isOpen ? <Component {...pageProps} /> : <SidebarMenu />}
    </div>
  );
}

export default MyApp;
