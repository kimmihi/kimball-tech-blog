import type { NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getPostBySlug, getAllPostPaths } from "../../lib";
import Container from "components/Layout/Container";
interface Props {
  frontMatter: PostMetaType;
  content: string;
  slug: string;
  mdxSource: MDXRemoteSerializeResult;
}

const PostBySlug: NextPage<Props> = ({
  frontMatter,
  content,
  slug,
  mdxSource,
}) => {
  console.log(mdxSource);
  return (
    <Container>
      <h1>{slug}</h1>
      <MDXRemote {...mdxSource} />
    </Container>
  );
};

export const getStaticProps = async ({ params }: PostParams) => {
  const { frontMatter, content, slug, mdxSource } = getPostBySlug(params.slug);
  return {
    props: {
      frontMatter,
      content,
      slug,
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
