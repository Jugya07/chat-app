import { useRef, useLayoutEffect } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";
import gsap from "gsap";
import styles from "./Login.module.scss";

// eslint-disable-next-line react/prop-types
const Login = ({ method }) => {
  const wrapper = useRef(null);
  const data = useActionData();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    gsap.to(wrapper.current, {
      clipPath: "circle(0% at 100% 0)",
      duration: 0.6,
    });
  }, []);

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.whiteBg} ref={wrapper}></div>
      <button
        className={styles.homeBtn}
        onClick={() => {
          navigate("/");
        }}
      >
        &lArr;
      </button>
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
            autoComplete="off"
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
      <h2 className={styles.checker}>
        Create an account.
        <button className={styles.smallBtn} onClick={handleSignupClick}>
          Signup
        </button>
      </h2>
    </div>
  );
};

export default Login;
