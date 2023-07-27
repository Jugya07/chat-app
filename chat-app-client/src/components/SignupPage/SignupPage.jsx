import { Form, useActionData } from "react-router-dom";
import styles from "./SignupPage.module.scss";

// eslint-disable-next-line react/prop-types
const SignupPage = ({ method }) => {
  const data = useActionData();
  const uploadPic = () => {};
  return (
    <Form method={method} className={styles.container}>
      {data && (
        <>
          <h2 className={styles.error}>{data.message}</h2>
        </>
      )}
      <div>
        <input type="text" name="name" id="name" required="required" />
        <label htmlFor="name">Name</label>
      </div>
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
      <div className={styles.dp}>
        <input
          type="file"
          name="dp"
          id="dp"
          accept="image/*"
          onChange={uploadPic}
        />
        <label htmlFor="dp">Your Picture</label>
      </div>
      <button type="submit" className={styles.btn}>
        Signup
      </button>
    </Form>
  );
};

export default SignupPage;
