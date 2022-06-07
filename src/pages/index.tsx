import type { NextPage } from "next";
import Link from "next/link";
import Box from "@mui/material/Box";
import PostCard from "components/Post/PostCard";
import { getAllPosts } from "lib";

interface Props {
  posts: PostType[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      {posts?.map((post) => {
        return (
          <Link key={post.slug} href={`/posts/${post.slug}`}>
            <PostCard post={post} />
          </Link>
        );
      })}
    </Box>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

export default Home;
