import style from "../styles/globals.css";
import Header from "../components/Header";
import SidebarMenu from "../components/SidebarMenu";
import {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const Circle = forwardRef(({ size, delay }, ref) => {
    const el = useRef();

    useImperativeHandle(
      ref,
      () => {
        // return our API
        return {
          moveTo(x, y) {
            gsap.to(el.current, { x, y, delay });
          },
        };
      },
      [delay]
    );

    return <div className={`circle ${size}`} ref={el}></div>;
  });

  Circle.displayName = "Circle";

  const circleRefs = useRef([]);

  // reset on re-renders
  circleRefs.current = [];

  useEffect(() => {
    circleRefs.current.forEach((ref) =>
      ref.moveTo(innerWidth / 2, innerHeight / 2)
    );

    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addCircleRef = (ref) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

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

              <Circle size="sm" ref={addCircleRef} delay={0.1} />
              <Circle size="md" ref={addCircleRef} delay={0.2} />
              <Circle size="lg" ref={addCircleRef} delay={0.3} />
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
