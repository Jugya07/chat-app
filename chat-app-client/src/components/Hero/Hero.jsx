import { useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useArrayRef } from "../../hooks/useArrayRef";
import styles from "./Hero.module.scss";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const [letterRef, setLetterRef] = useArrayRef();

  const triggerRef = useRef(null);
  const containerRef = useRef(null);
  const whitebg = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(letterRef.current, {
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: true,
          start: "top 60%",
          end: "bottom center",
        },
        color: "#00ffff",
        duration: 3,
        stagger: 1,
      });
      gsap.to(`.${styles.title}`, {
        scrollTrigger: {
          scrub: true,
          start: "top 20%",
          end: "bottom center",
        },
        y: -300,
        duration: 1,
      });
      gsap.to(`.${styles.btncontainer}`, {
        scrollTrigger: {
          scrub: true,
          start: "top top",
          end: "bottom top",
        },
        y: -400,
        duration: 1,
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [letterRef]);

  const handleLoginClick = () => {
    gsap.to(whitebg.current, {
      clipPath: "circle(100% at 100% 0)",
      duration: 2,
    });
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  const handleSignupClick = () => {
    gsap.to(whitebg.current, {
      clipPath: "circle(100% at 100% 0)",
      duration: 2,
    });
    setTimeout(() => {
      navigate("/signup");
    }, 500);
  };

  return (
    <>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.whiteBg} ref={whitebg}></div>
        <div className={styles.subtitle}>
          <p>
            “CONNECTING <br />
            HEARTS & MINDS”
          </p>
        </div>
        <div className={styles.title}>
          <h1>CHATSYNC</h1>
        </div>
        <div className={styles.btncontainer}>
          <button
            className={`${styles.btn} ${styles.login}`}
            onClick={handleLoginClick}
          >
            Login
          </button>
          <div className={styles.scroll} ref={triggerRef}>
            <span ref={setLetterRef}>S</span>
            <span ref={setLetterRef}>C</span>
            <span ref={setLetterRef}>R</span>
            <span ref={setLetterRef}>O</span>
            <span ref={setLetterRef}>L</span>
            <span ref={setLetterRef}>L</span>
          </div>
          <button
            className={`${styles.btn} ${styles.signup}`}
            onClick={handleSignupClick}
          >
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
