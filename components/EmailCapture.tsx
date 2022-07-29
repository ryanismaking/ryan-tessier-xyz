import {
  ChangeEventHandler,
  FormEventHandler,
  FunctionComponent,
  useState,
} from "react";
import styles from "../styles/EmailCapture.module.css";

const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const EmailCapture: FunctionComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const subscribe: FormEventHandler = (event) => {
    event.preventDefault();

    const formData = {
      "form-name": "subscribe",
      "first-name": firstName,
      "email-address": emailAddress,
    };
    const encodedFormData = encode(formData);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedFormData,
    })
      .then(() => alert("You've been subscribed!"))
      .catch((error) => alert(error));
  };

  const updateFirstName: ChangeEventHandler<HTMLInputElement> = (event) =>
    setFirstName(event.target.value);

  const updateEmailAddress: ChangeEventHandler<HTMLInputElement> = (event) =>
    setEmailAddress(event.target.value);

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Learn product design with me!</h2>
      <p className={styles.introduction}>
        I send other growth-oriented product designers my insights on the path
        to designing successful digital products. Drop me your contact details
        and I’ll send new stuff straight to your inbox!
      </p>
      <form
        name="subscribe"
        method="POST"
        data-netlify="true"
        onSubmit={subscribe}
        className={styles.form}
      >
        <input type="hidden" name="form-name" value="subscribe" />
        <div className={styles.textFields}>
          <div className={styles.textFieldContainer}>
            <label htmlFor="first-name" className={styles.textFieldLabel}>
              First name
            </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              required
              value={firstName}
              onChange={updateFirstName}
              className={styles.textField}
            />
          </div>
          <div className={styles.textFieldContainer}>
            <label htmlFor="email-address" className={styles.textFieldLabel}>
              Email address
            </label>
            <input
              type="email"
              id="email-address"
              name="email-address"
              required
              value={emailAddress}
              onChange={updateEmailAddress}
              className={styles.textField}
            />
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
