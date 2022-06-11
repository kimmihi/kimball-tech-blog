import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Custom404: NextPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">해당 항목의 게시글이 없습니다.</Typography>
    </Box>
  );
};

export default Custom404;
