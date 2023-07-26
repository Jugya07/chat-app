import { Form, useActionData } from "react-router-dom";
import styles from "./LoginPage.module.css";

// eslint-disable-next-line react/prop-types
const LoginPage = ({ method }) => {
  const data = useActionData();
  return (
    <Form method={method} className={styles.container}>
      {data && (
        <>
          <h2 className={styles.error}>{data.message}</h2>
        </>
      )}
      <div>
        <input type="text" name="email" id="email" required="required" />
        <label htmlFor="email">Email</label>
      </div>
      <div>
        <input
          type="password"
          name="password"
          id="password"
          required="required"
        />
        <label htmlFor="password">Password</label>
      </div>
      <button type="submit" className={styles.btn}>
        Login
      </button>
    </Form>
  );
};

export default LoginPage;
