import { FunctionComponent } from "react";
import styles from "../styles/EmailCapture.module.css";

const EmailCapture: FunctionComponent = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Level up your product design craft</h2>
      <p className={styles.introduction}>
        Every Thursday, I send other learning-driven product designers my
        insights on the path to designing thoughtful products. Drop me your
        contact details and I’ll send new stuff straight to your inbox!
      </p>
      <form
        name="subscribe"
        method="POST"
        className={styles.form}
        data-netlify="true"
      >
        <div className={styles.textFields}>
          <div className={styles.textFieldContainer}>
            <label className={styles.textFieldLabel}>First name</label>
            <input type="text" name="first-name" className={styles.textField} />
          </div>
          <div className={styles.textFieldContainer}>
            <label className={styles.textFieldLabel}>Email</label>
            <input type="text" name="email" className={styles.textField} />
          </div>
        </div>
        <button type="submit" className={styles.button}>
          Put me on the list
        </button>
        <p className={styles.footnote}>
          No spam, I promise. You can unsubscribe anytime.
        </p>
      </form>
    </div>
  );
};

export default EmailCapture;
