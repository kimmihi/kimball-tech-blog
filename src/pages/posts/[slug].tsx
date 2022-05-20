import type { NextPage } from "next";
import { getPostBySlug, getAllPostPaths } from "../../lib";
import Container from "components/Container";
interface Props {
  post: {
    frontMatter: PostMetaType;
    slug: string;
  };
}

const PostBySlug: NextPage<Props> = ({ post }) => {
  return (
    <Container>
      <h1>{post.slug}</h1>
    </Container>
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
