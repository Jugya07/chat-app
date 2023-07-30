import { useRef, useLayoutEffect } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";
import gsap from "gsap";
import styles from "./Signup.module.scss";

// eslint-disable-next-line react/prop-types
const Signup = ({ method }) => {
  const wrapper = useRef(null);
  const data = useActionData();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    gsap.to(wrapper.current, {
      clipPath: "circle(0% at 100% 0)",
      duration: 0.6,
    });
  }, []);
  const handleLoginClick = () => {
    navigate("/login");
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
      <h2 className={styles.title}>START YOUR CONVERSATION</h2>
      <Form method={method} className={styles.container}>
        {data && (
          <>
            <h2 className={styles.error}>{data.message}</h2>
          </>
        )}
        <div>
          <input
            type="text"
            name="name"
            id="name"
            required="required"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            id="email"
            required="required"
            placeholder="Email"
            autoComplete="off"
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
        <button type="submit" className={styles.btn}>
          Signup
        </button>
      </Form>
      <h2 className={styles.checker}>
        Already have an account?{" "}
        <button className={styles.smallBtn} onClick={handleLoginClick}>
          Login
        </button>
      </h2>
    </div>
  );
};

export default Signup;
