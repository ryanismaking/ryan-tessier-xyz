import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "../styles/Title.module.css";

const Title: FunctionComponent = () => {
  return (
    <Link href="/" className={styles.link}>
      <a className={styles.anchor}>Product Design with Ryan</a>
    </Link>
  )
}

export default Title