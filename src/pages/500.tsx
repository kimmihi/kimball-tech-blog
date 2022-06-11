import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Custom500: NextPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">잠시 후 다시 시도해주세요.</Typography>
    </Box>
  );
};

export default Custom500;
