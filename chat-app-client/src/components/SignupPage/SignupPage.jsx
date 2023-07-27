import { useRef, useLayoutEffect } from "react";
import { Form, useActionData } from "react-router-dom";
import gsap from "gsap";
import styles from "./SignupPage.module.scss";

// eslint-disable-next-line react/prop-types
const SignupPage = ({ method }) => {
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
            autoComplete="none"
          />
          {/* <label htmlFor="name">Name</label> */}
        </div>
        <div>
          <input
            type="text"
            name="email"
            id="email"
            required="required"
            placeholder="Email"
            autoComplete="none"
          />
          {/* <label htmlFor="email">Email</label> */}
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            required="required"
            placeholder="Password"
          />
          {/* <label htmlFor="password">Password</label> */}
        </div>
        {/* <div className={styles.dp}>
        <input
          type="file"
          name="dp"
          id="dp"
          accept="image/*"
          onChange={uploadPic}
        />
        <label htmlFor="dp">Your Picture</label>
      </div> */}
        <button type="submit" className={styles.btn}>
          Signup
        </button>
      </Form>
    </div>
  );
};

export default SignupPage;
