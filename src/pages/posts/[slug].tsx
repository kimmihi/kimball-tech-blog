import type { NextPage } from "next";
import { MDXProvider } from "@mdx-js/react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getPostBySlug, getAllPostPaths } from "../../lib";
import CodeBlock from "src/components/mdx/code-block";
import Strong from "src/components/mdx/strong";

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
    <Box
      sx={{
        padding: "24px 120px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">{frontMatter.title}</Typography>
        <Typography variant="h6">{frontMatter.date}</Typography>
      </Box>
      <Divider sx={{ paddingY: 1 }} />
      <MDXProvider>
        <MDXRemote {...source} components={{ Divider, CodeBlock, Strong }} />
      </MDXProvider>
    </Box>
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
