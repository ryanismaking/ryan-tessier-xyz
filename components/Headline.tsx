import { FunctionComponent } from "react"
import styles from "../styles/Headline.module.css"

type HeadlineProps = {
  children: string
}

const Headline: FunctionComponent<HeadlineProps> = ({ children }) => {
  return (
    <h1 className={styles.headline}>{children}</h1>
  )
}

export default Headline