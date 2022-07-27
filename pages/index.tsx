import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Headline from "../components/Headline";
import EmailCapture from "../components/EmailCapture";
import Title from "../components/Title";
import ArticleList from "../components/ArticleList";
import Footer from "../components/Footer";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

type ArticlePreview = {
  slug: string;
  title: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const articlesDirectory = path.join(process.cwd(), "articles");
  const fileNames = fs.readdirSync(articlesDirectory);
  const fileBuffers = fileNames.map((fileName) =>
    fs.readFileSync(path.join(articlesDirectory, fileName))
  );
  const articlePreviews = fileBuffers.map((fileBuffer, fileIndex) => {
    const { content: fileContents, data: fileMetadata } = matter(fileBuffer);

    return {
      slug: fileNames[fileIndex].replace(/.mdx$/, ""),
      title: fileMetadata.title,
    };
  });

  return {
    props: {
      articlePreviews,
    },
  };
};

const Home: NextPage<{ articlePreviews: ArticlePreview[] }> = ({
  articlePreviews,
}) => (
  <div>
    <Head>
      <title>Product Design with Ryan</title>
      <meta
        name="description"
        content="I’m Ryan Tessier. I’m a product designer who enjoys learning how to improve my craft and helping others do the same."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Title />

      <Headline>A guide to product design with a growth mindset</Headline>

      <EmailCapture />

      <ArticleList articlePreviews={articlePreviews} />
    </main>

    <Footer />
  </div>
);

export default Home;
