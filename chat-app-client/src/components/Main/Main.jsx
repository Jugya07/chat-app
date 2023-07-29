import { ReactLenis } from "@studio-freight/react-lenis";
import Hero from "../Hero/Hero";
import Desc from "../Desc/Desc";
import Profiles from "../Profiles/Profiles";
import styles from "./Main.module.scss";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <ReactLenis root>
      <div className={styles.container}>
        <Hero />
        <Desc />
        <Features />
        <Profiles />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Main;
