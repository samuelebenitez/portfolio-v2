import style from "../styles/globals.scss";
import Header from "../components/Header";
import SidebarMenu from "../components/SidebarMenu";
import { useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  function openMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <Header openMenu={openMenu} isOpen={isOpen} />
      {!isOpen ? (
        <>
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{
                duration: 0.5,
              }}
              variants={{
                initialState: {
                  opacity: 0,
                  x: 0,
                },
                animateState: {
                  opacity: 1,
                  x: 0,
                },
                exitState: {
                  opacity: 0,
                  x: -200,
                },
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        <SidebarMenu openMenu={openMenu} />
      )}
    </>
  );
}

export default MyApp;
