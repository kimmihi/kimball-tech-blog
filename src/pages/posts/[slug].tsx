import type { NextPage } from "next";
import { getPostBySlug, getAllPostPaths } from "../../lib";

interface Props {
  post: {
    frontMatter: PostMetaType;
    slug: string;
  };
}

const PostBySlug: NextPage<Props> = ({ post }) => {
  console.log(post);
  return (
    <>
      <h1>{post.slug}</h1>
    </>
  );
};

export const getStaticProps = async ({ params }: PostParams) => {
  return {
    props: {
      post: getPostBySlug(params.slug),
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: getAllPostPaths(),
    fallback: false,
  };
}

export default PostBySlug;
