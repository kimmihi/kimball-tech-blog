import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import { colors } from "theme";
interface Props {
  post: PostType;
}

const PostCard: NextPage<Props> = ({ post }) => {
  return (
    <Card
      sx={{
        width: "95%",
        height: 250,
        margin: 3,
        display: "flex",

        justifyContent: "space-between",
        paddingX: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          color: colors.dark,
        }}
      >
        <Link href={`/posts/${post.slug}`}>
          <Typography variant="h3" sx={{ cursor: "pointer" }}>
            {post.frontMatter.title}
          </Typography>
        </Link>
        <Typography>{post.frontMatter.description}</Typography>
        <Typography>{post.frontMatter.date}</Typography>
      </Box>
      <Box>
        {post.frontMatter.thumbnailUrl ? (
          <Image src={post.frontMatter.thumbnailUrl} width="200" height="200" />
        ) : (
          <></>
        )}
      </Box>
    </Card>
  );
};

export default PostCard;
