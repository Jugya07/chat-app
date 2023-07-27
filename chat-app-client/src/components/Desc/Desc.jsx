import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useArrayRef } from "../../hooks/useArrayRef";
import styles from "./Desc.module.css";

gsap.registerPlugin(ScrollTrigger);

const Desc = () => {
  const text =
    "Discover a world of vibrant communication and limitless possibilities as you engage in real-time interactions with friends, family, and new acquaintances through our user-friendly and feature-rich chat platform.";

  const [letterRef, setLetterRef] = useArrayRef();

  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(letterRef.current, {
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: true,
          start: "top 80%",
          end: "bottom center",
        },
        color: "white",
        duration: 3,
        stagger: 1,
      });
    });
    return () => {
      ctx.revert();
    };
  }, [letterRef]);

  return (
    <div className={styles.container}>
      <div className={styles.whiteBg}></div>
      <div ref={triggerRef}>
        {text.split("").map((l, i) => (
          <span className={styles.text} ref={setLetterRef} key={i}>
            {l}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Desc;
