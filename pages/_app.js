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
    <>
      <Header openMenu={openMenu} isOpen={isOpen} />
      {!isOpen ? (
        <Component {...pageProps} />
      ) : (
        <SidebarMenu openMenu={openMenu} />
      )}
    </>
  );
}

export default MyApp;
