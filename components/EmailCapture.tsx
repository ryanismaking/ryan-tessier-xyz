import { FunctionComponent } from "react";
import styles from "../styles/EmailCapture.module.css";

const EmailCapture: FunctionComponent = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>The value for the audience</h2>
      <p className={styles.introduction}>
        I email every Blahday with some juicy value. Drop me your name and email
        and I’ll send new stuff straight to your inbox!
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
        <button className={styles.button}>Get me on the list</button>
        <p className={styles.footnote}>
          No spam, I promise. I respect your privacy. You can unsubscribe
          anytime.
        </p>
      </form>
    </div>
  );
};

export default EmailCapture;
