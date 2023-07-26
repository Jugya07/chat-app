import { Outlet, NavLink } from "react-router-dom";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.btns}>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            Login
          </NavLink>
          <span className={styles.slash}>|</span>
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            Signup
          </NavLink>
          <div></div>
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
