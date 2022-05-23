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
    <Container
      sx={{
        padding: 5,
        minWidth: "1200px",
      }}
    >
      <Grid container spacing={2}>
        {posts.map((post) => {
          return (
            <Grid item xs={4} key={post.slug}>
              <PostCard post={post} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
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
