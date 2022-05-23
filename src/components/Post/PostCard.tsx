import type { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Props {
  post: PostType;
}

const PostCard: NextPage<Props> = ({ post }) => {
  return (
    <Card
      sx={{
        minWidth: 400,
        width: 400,
        height: 300,
      }}
    >
      <CardContent>
        <Typography>{post.frontMatter.title}</Typography>
        <MDXRemote {...post.content} />
      </CardContent>
    </Card>
  );
};

export default PostCard;
