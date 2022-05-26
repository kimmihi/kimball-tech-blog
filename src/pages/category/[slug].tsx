import type { NextPage } from "next";
import Box from "@mui/material/Box";

import PostCard from "components/Post/PostCard";
import { getPostByTag, getAllPostPathsByTag } from "lib";

interface Props {
  posts: PostType[];
}

const PostListByCategory: NextPage<Props> = ({ posts }) => {
  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      {posts.map((post) => {
        return <PostCard post={post} key={post.slug} />;
      })}
    </Box>
  );
};

export const getStaticProps = async ({ params }: PostParams) => {
  const posts = await getPostByTag(params.slug);
  return {
    props: {
      posts,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: getAllPostPathsByTag(),
    fallback: false,
  };
};

export default PostListByCategory;
