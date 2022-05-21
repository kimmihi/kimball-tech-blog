import type { NextPage } from "next";
import Container from "components/Layout/Container";
import { getAllPosts } from "lib";

interface Props {
  posts: PostType[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => {
        return <h1 key={post.slug}>{post.frontMatter.title}</h1>;
      })}
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
