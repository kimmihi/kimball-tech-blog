import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "components/Layout/Container";
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
        return <PostCard post={post} key={post.slug} />;
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
