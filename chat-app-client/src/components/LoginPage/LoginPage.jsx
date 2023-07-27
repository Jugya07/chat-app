import { useRef, useLayoutEffect } from "react";
import { Form, useActionData } from "react-router-dom";
import gsap from "gsap";
import styles from "./LoginPage.module.scss";

// eslint-disable-next-line react/prop-types
const LoginPage = ({ method }) => {
  const wrapper = useRef(null);
  const data = useActionData();

  useLayoutEffect(() => {
    gsap.to(wrapper.current, {
      clipPath: "circle(0% at 100% 0)",
      duration: 1,
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.whiteBg} ref={wrapper}></div>
      <h2 className={styles.title}>WELCOME BACK</h2>
      <Form method={method} className={styles.container}>
        {data && (
          <>
            <h2 className={styles.error}>{data.message}</h2>
          </>
        )}
        <div>
          <input
            type="text"
            name="email"
            id="email"
            required
            autoComplete="none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            required="required"
            placeholder="Password"
          />
        </div>
        <button type="submit" className={`${styles.btn} ${styles.login}`}>
          Login
        </button>
      </Form>
    </div>
  );
};

export default LoginPage;
