import ProfileCard from "./ProfileCard";
import styles from "./Profiles.module.css";

const Profiles = () => {
  return (
    <div className={styles.container}>
      <h2>LET&apos;S GET IN TOUCH</h2>
      <div className={styles.profiles}>
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
};

export default Profiles;
