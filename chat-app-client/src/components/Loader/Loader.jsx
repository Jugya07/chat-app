import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
  const [counter, setCounter] = useState(0);
  const containerRef = useRef(null);
  useEffect(() => {
    if (counter >= 100) {
      gsap.to(containerRef.current, {
        y: "-100vh",
        duration: 2,
      });
      return;
    }
    document.documentElement.style.setProperty("--count", `${counter}%`);
    setTimeout(() => {
      setCounter((counter) => counter + 1);
    }, 30);
  }, [counter]);
  return (
    <div className={styles.loader} ref={containerRef}>
      <div className={styles.inner}>
        <div className={styles.trackbar}>
          <div className={styles.counter}>{counter}</div>
        </div>
        <div className={styles.text}>Loading</div>
      </div>
    </div>
  );
};

export default Loader;
