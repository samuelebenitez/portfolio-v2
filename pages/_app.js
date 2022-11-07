import style from "../styles/globals.scss";
import Header from "../components/Header";
import SidebarMenu from "../components/SidebarMenu";
import { useState } from "react";
import { useRouter } from "next/router";
import { SwitchTransition, Transition } from "react-transition-group";
import { gsap, Power3 } from "gsap";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const onPageEnter = (node) => {
    gsap.fromTo(
      node,
      {
        y: 50,
        autoAlpha: 0,
        ease: "power3",
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3",
      }
    );
  };

  const onPageExit = (node) => {
    gsap.fromTo(
      node,
      {
        y: 0,
        autoAlpha: 1,
        ease: "power3.out",
      },
      {
        y: -50,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.inOut",
      }
    );
  };

  function openMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <SwitchTransition>
        <Transition
          key={router.pathname}
          timeout={500}
          in={true}
          onEnter={onPageEnter}
          onExit={onPageExit}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <>
            <Header openMenu={openMenu} isOpen={isOpen} />
            {!isOpen ? (
              <Component {...pageProps} />
            ) : (
              <SidebarMenu openMenu={openMenu} />
            )}
          </>
        </Transition>
      </SwitchTransition>
    </>
  );
}

export default MyApp;
