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
import gsap from "gsap";
// import SmoothScroll from "../components/SmoothScroll";

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
          <>
            <Component {...pageProps} />

            <Circle size="sm" ref={addCircleRef} delay={0.1} />
            <Circle size="md" ref={addCircleRef} delay={0.2} />
            <Circle size="lg" ref={addCircleRef} delay={0.3} />
          </>
        </>
      ) : (
        <SidebarMenu openMenu={openMenu} />
      )}
    </>
  );
}

export default MyApp;
