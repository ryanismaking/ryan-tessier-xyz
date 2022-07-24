import { FunctionComponent } from "react";
import styles from "../styles/Author.module.css";
import avatar from "../public/ryan.jpg";
import Image from "next/image";

const Author: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Image src={avatar} className={styles.avatar} width={64} height={64} />
      <div className={styles.name}>Ryan Tessier</div>
    </div>
  );
};

export default Author;
