import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
        flexDirection: "column",
        justifyContent: "space-around",
        paddingX: 4,
      }}
    >
      <Typography variant="h3">{post.frontMatter.title}</Typography>
      <Typography>{post.frontMatter.description}</Typography>
      <Typography>{post.frontMatter.date}</Typography>
    </Card>
  );
};

export default PostCard;
