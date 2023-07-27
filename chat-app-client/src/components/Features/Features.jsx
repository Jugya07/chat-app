import { useRef, useLayoutEffect } from "react";
import FeatureCard from "./FeatureCard";
import styles from "./Features.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useArrayRef } from "../../hooks/useArrayRef";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Fast &  REALTIME",
    num: "01",
  },
  {
    title: "Secure &  ENCRYPTED",
    num: "02",
  },
  {
    title: "Easy &  USER-FRIENDLY",
    num: "03",
  },
];

const Features = () => {
  const [sectionRef, setSectionRef] = useArrayRef();
  const [divRef, setDivRef] = useArrayRef();
  const main = useRef(null);
  const scrollBarRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let scrollTween = gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: main.current,
          scrub: 1,
          pin: true,
          start: "-50% top",
          end: "+=3000",
        },
        xPercent: -100 * (sectionRef.current.length - 1),
        ease: "none",
      });
      gsap.to(scrollBarRef.current, {
        width: "100%",
        scrollTrigger: {
          trigger: main.current,
          start: "-70% top",
          end: "+=3000",
          scrub: 1,
        },
      });
      sectionRef.current.forEach((section) => {
        gsap.context(() => {
          gsap.to("p", {
            scrollTrigger: {
              trigger: section,
              containerAnimation: scrollTween,
              start: "left 80%",
              end: "right 70%",
              scrub: true,
            },
            color: "white",
          });
        }, section);
      });
    });
    return () => {
      ctx.revert();
    };
  }, [sectionRef, divRef]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollBar} ref={main}>
        <svg
          viewBox="0 0 900 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
            fill="#6e6d6d"
          />
          <mask
            id="mask0_0_1"
            style={{ "mask-type": "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="900"
            height="10"
          >
            <path
              d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_0_1)">
            <rect
              className={styles.mask}
              y="-49"
              height="99"
              fill="#00ffff"
              ref={scrollBarRef}
            />
          </g>
        </svg>
        <div className={styles.sections}>
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              setSectionRef={setSectionRef}
              setDivRef={setDivRef}
              num={feature.num}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
