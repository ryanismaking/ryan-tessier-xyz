import { FunctionComponent } from "react";
import styles from "../styles/Author.module.css"

const Author: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar} />
      <div className={styles.name}>Ryan Tessier</div>
    </div>
  )
}

export default Author