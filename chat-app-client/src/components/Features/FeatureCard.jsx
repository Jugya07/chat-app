import styles from "./Features.module.css";

// eslint-disable-next-line react/prop-types
const FeatureCard = ({ setSectionRef, setDivRef, num, title }) => {
  return (
    <div className={styles.card} ref={setSectionRef}>
      <h2>{num}</h2>
      <p ref={setDivRef}>{title}</p>
    </div>
  );
};

export default FeatureCard;
