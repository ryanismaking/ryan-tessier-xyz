import { MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "../styles/ArticleList.module.css";

type ArticlePreview = {
  slug: string;
  title: string;
};

type ArticleListProps = {
  articlePreviews: ArticlePreview[];
};

const ArticleList: FunctionComponent<ArticleListProps> = (
  props: ArticleListProps
) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subheading}>Latest articles</h2>
      <ul className={styles.list}>
        {props.articlePreviews.map((articlePreview) => (
          <li className={styles.listItem} key={articlePreview.slug}>
            <Link href={`/articles/${articlePreview.slug}`}>
              <a className={styles.anchor}>{articlePreview.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
