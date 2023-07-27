import { Icon } from "@iconify/react";
import jkg from "../../assets/jkg.png";
import styles from "./Profiles.module.css";
const ProfileCard = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <img src={jkg} alt="img" />
        </div>
        <div className={styles.card_content}>
          <div className={styles.pro}>
            <h3>Jugya Kamal Gogoi</h3>
            <p>FrontEnd Developer</p>
          </div>
          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="ri:github-fill" color="white" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="uil:linkedin" color="white" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="ic:outline-facebook" color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
