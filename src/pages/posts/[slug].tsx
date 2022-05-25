import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getPostBySlug, getAllPostPaths } from "../../lib";
import Container from "components/Layout/Container";
interface Props {
  frontMatter: PostMetaType;
  content: string;
  mdxSource: MDXRemoteSerializeResult;
}

const PostBySlug: NextPage<Props> = ({ frontMatter, content, mdxSource }) => {
  const [source, setSource] = useState(mdxSource);

  useEffect(() => {
    setSource(mdxSource);
  }, []);

  return (
    <>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} />
    </>
  );
};

export const getStaticProps = async ({ params }: PostParams) => {
  const { frontMatter, content, mdxSource } = await getPostBySlug(params.slug);
  return {
    props: {
      frontMatter,
      content,
      mdxSource,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: getAllPostPaths(),
    fallback: false,
  };
};

export default PostBySlug;
