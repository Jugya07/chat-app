import { Hero, Desc, Profiles, Features, Footer } from "../../components";
import styles from "./Main.module.scss";
const Main = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Desc />
      <Features />
      <Profiles />
      <Footer />
    </div>
  );
};

export default Main;
