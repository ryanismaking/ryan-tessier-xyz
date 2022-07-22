import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "../styles/ArticleList.module.css";

const ArticleList: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subheading}>Latest articles</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/articles/4">
            <a className={styles.anchor}>Some article</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/articles/4">
            <a className={styles.anchor}>Some other article</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/articles/4">
            <a className={styles.anchor}>Another article</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ArticleList;
