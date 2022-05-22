import type { NextPage } from "next";

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
        width: 600,
      }}
    >
      <CardContent>
        <Typography>{post.frontMatter.title}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
