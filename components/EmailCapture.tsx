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
      <form className={styles.form}>
        <div className={styles.textFields}>
          <input
            type="text"
            placeholder="Your first name"
            className={styles.textField}
          />
          <input
            type="text"
            placeholder="Your email address"
            className={styles.textField}
          />
        </div>
        <button className={styles.button}>Put me on the list</button>
        <p className={styles.footnote}>
          No spam, I promise. You can unsubscribe anytime.
        </p>
      </form>
    </div>
  );
};

export default EmailCapture;
